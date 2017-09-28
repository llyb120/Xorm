"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XEntity_1 = require("./decorator/XEntity");
const manager_1 = require("./driver/mysql/manager");
const constant_1 = require("./constant");
const gc_1 = require("./gc");
const Link_1 = require("./decorator/Link");
var isRuning = false;
class XManager {
    /**end */
    constructor(
        /**
         * 新加入的权限体系，当是su的时候，拥有所有权限，其余需确定是否可以执行操作、查找的字段、限定条件等等
         *
         * 因为不同的表直接存在依赖，不可能通过一种权限过滤所有的操作，所以只能从根权限出发
         *
         * 例如运营商查找其下的层级，需从proxy入手，通过关联字段直接查出对应的东西，这部分的依赖需要自行管理
         */
        permission = 'su') {
        this.permission = permission;
    }
    of(entity) {
        entity = entity;
        if (entity.prototype) {
            this.factory = entity;
        }
        else if (entity.__proto__) {
            this.factory = entity.__proto__;
        }
        return this;
    }
    async save(models) {
        var isMultipul = Array.isArray(models);
        if (!isMultipul) {
            models = [models];
        }
        models = models;
        if (!models.length) {
            return [];
        }
        var desc;
        let _desc;
        if (models[0].__proto__) {
            _desc = XEntity_1.EntityMap.get(models[0].__proto__.constructor.name);
        }
        //如果找不到，尝试使用this.facotry
        if (!_desc) {
            _desc = XEntity_1.EntityMap.get(this.factory.name);
            if (!_desc) {
                throw new Error("desc not found:");
            }
        }
        desc = _desc;
        // var ret = [];
        var ret = await Promise.all(models.map(async (model) => {
            var changed = gc_1.ObservingObject.getChanged(model);
            if (!changed) {
                changed = Object.keys(model);
            }
            if (!changed.length) {
                return model;
            }
            //禁止更改主键，更改了主键就视为新的
            if (!model[desc.primary]) {
                // let ret = this.getRepository(constructor).insert(model);
                let ret = await this.getConnection(desc.database).insert(model, desc);
                gc_1.ObservingObject.clearChanged(model);
                return ret;
            }
            else {
                var condition = {};
                condition[desc.primary] = model[desc.primary];
                var updateData = {};
                changed.forEach(change => {
                    updateData[change] = model[change];
                });
                await this.getConnection(desc.database).update(condition, updateData, desc);
                gc_1.ObservingObject.clearChanged(model);
                return model;
            }
        }));
        if (isMultipul) {
            return ret;
        }
        return ret[0];
        // if (Array.isArray(models)) {
        //     models = models as T[];
        //     var ret = [];
        //     for (let model of models) {
        //         ret.push(this.save(model));
        //     }
        //     return ret;
        // }
        // else {
        //     var model = <T>models;
        //     //查找描述信息
        //     var desc = EntityMap.get((model as any).__proto__.constructor.name);
        //     if (!desc) {
        //         throw new Error("desc not found:" + (model as any).__proto__.constructor.name);
        //     }
        //     //没有发生任何改变的情况
        //     // var changed = Object.keys(model);
        //     var changed = ObservingObject.getChanged(model);
        //     if (!changed || !changed.length) {
        //         return model;
        //     }
        //     // var entries = Object.entries(model);
        //     //查询主键，如果没有的情况，默认为“ID"
        //     var constructor = (model as any).__proto__.constructor as {
        //         new(): any
        //     }
        //     if (changed.includes(desc.primary) || !(desc.primary in model)) {
        //         // let ret = this.getRepository(constructor).insert(model);
        //         let ret = await this.getConnection(desc.database).insert(model as Partial<T>, desc);
        //         return ret;
        //     }
        //     else {
        //         // return this.update((model as any).__proto__.constructor,)
        //         if (!(desc.primary in model)) {
        //             return false;
        //         }
        //         var condition = {};
        //         (condition as any)[desc.primary] = (model as any)[desc.primary];
        //         var updateData: any = Object.assign({},model);
        //         var updateData : any = {};
        //         for(const change of changed){
        //             updateData[change] = model[change]
        //         }
        //         delete updateData[desc.primary];
        //         let ret = await this.getConnection(desc.database).update(condition, updateData, desc);
        //         return model;
        //     }
        // }
    }
    /**
     * 更新函数，可以传入多个精湛的参数
     * @param entity
     * @param condition
     * @param data
     */
    // async update( condition: string, data: Partial<U>): Promise<Partial<U>>;
    // async update( condition: number, data: Partial<U>): Promise<Partial<U>>;
    // async update( condition: WhereOption<U>, data: Partial<U>): Promise<Partial<U>>;
    async update(condition, data) {
        var name = this.factory ? this.factory.name : '';
        var desc = XEntity_1.EntityMap.get(name);
        if (!desc) {
            throw new Error("desc not found:" + name);
        }
        if (!(desc.primary in data)) {
            throw new Error("desc primary not found:" + name);
        }
        let _condition;
        let ret;
        switch (typeof condition) {
            case 'string':
            case 'number':
                _condition = {};
                _condition[desc.primary] = condition;
                break;
            default:
                _condition = condition;
                break;
        }
        ret = await this.getConnection(desc.database).update(_condition, data, desc);
        return data;
    }
    /**
     * 删除函数
     *
     * 为了安全起见，删除函数要求必须传递条件
     */
    // async delete<T>(entity: T): Promise<boolean>;
    // async delete<T>(entity: T[]): Promise<boolean>;
    async delete(condition) {
        // async delete<T>(entity: Entity<T>, condition: number): Promise<boolean>;
        // async delete<T>(entity: Entity<T>, condition: string): Promise<boolean>;
        // async delete(...args: any[]) {
        let desc;
        let option;
        //非条件的情况
        if (!Array.isArray(condition)) {
            if (typeof condition === 'object') {
                desc = XEntity_1.EntityMap.get(this.factory.name);
                if (!desc) {
                    throw new Error("desc not found");
                }
                return this.getConnection(desc.database).delete(condition, desc);
            }
            //单一主键删除
            condition = [condition];
        }
        //此时condition必然为数组
        condition = condition;
        var ids = condition.map((item) => {
            if (typeof item == 'object') {
                desc = desc || XEntity_1.EntityMap.get(item.__proto__.constructor.name);
                return item[desc.primary];
            }
            else {
                desc = desc || XEntity_1.EntityMap.get(this.factory.name);
                return item;
            }
        });
        option = {};
        if (!desc) {
            throw new Error("desc not found");
        }
        option[desc.primary] = ['in', ids.filter((item) => {
                return item;
            })];
        return this.getConnection(desc.database).delete(option, desc);
    }
    query(...args) {
        if (args.length == 2) {
            return this.getConnection(args[0]).query(args[1]);
        }
        return this.getConnection().query(args[0]);
    }
    /**
     * 对find方法的封装，有提示，有提示，有提示，重点要说三遍
     * 为了效率着想，暂时不自动检测内部属性变化
     * 提供第三个属性来强制要求返回观测对象
     * @param entity
     * @param option
     */
    async find(option, onlyOne = false) {
        let condition;
        var name = this.factory ? this.factory.name : '';
        const desc = XEntity_1.EntityMap.get(name);
        if (!desc) {
            throw new Error("desc not found");
        }
        do {
            if (!option) {
                condition = {};
                break;
            }
            if (!Array.isArray(option)) {
                //直接输入条件的情况
                if (typeof option == 'object') {
                    condition = option;
                    break;
                }
                else {
                    option = [option];
                }
            }
            option = option;
            if (!option.length) {
                return [];
            }
            //构造主键查询
            condition = { where: {} };
            condition.where[desc.primary] = ['in', option];
        } while (0);
        if (!condition) {
            return [];
        }
        if (onlyOne) {
            condition.limit = 1;
        }
        var result = await this.getConnection(desc.database).find(condition, desc);
        // }
        var ret = [];
        for (let item of result) {
            //新版API
            if (this.factory.prototype.onGet) {
                this.factory.prototype.onGet.call(item);
            }
            //兼容以前的写法
            if (this.factory.prototype.onLoad) {
                this.factory.prototype.onLoad.call(item);
            }
            //黑魔法,将原型指向该字段，取Object.entries的时候只会取到变化的字段
            var observed = gc_1.ObservingObject.addObserveObject(item);
            observed.__proto__ = desc.entity.prototype;
            ret.push(observed);
            // item.constructor = this.factory;
            // let obj = Object.create(item);
            // ret.push(obj);
        }
        if (condition.addon) {
            var addons = Object.keys(condition.addon).filter(item => desc.external[item]);
            //TODO : 将查询更近一层，做出多级嵌套效果（多级可能没有提示）
            //使用in统一查询，减少负担                    
            await Promise.all(addons.map(async (key) => {
                await this.makeAddon(ret, key);
            }));
        }
        return ret;
    }
    /**
     * findOne默认追加observable
     * 可以检测到该元素内部的变动
     * @param entity
     * @param option
     */
    async findOne(option) {
        var result = await this.find(option, true);
        if (result.length) {
            return result[0];
        }
        // return new this.factory.prototype.constructor;
        // return null as U;
    }
    async makeAddon(entity, key) {
        if (!Array.isArray(entity)) {
            entity = [entity];
        }
        if (!entity.length) {
            return;
        }
        let desc = XEntity_1.EntityMap.get(entity[0].__proto__.constructor.name);
        if (!desc) {
            throw new Error("desc not found");
        }
        //如果没有传递key这个参数，那么默认生成所有的连接关系
        if (!key) {
            var keys = Object.keys(desc.external);
            if (!keys.length) {
                return;
            }
            await Promise.all(keys.map(async (key) => await this.makeAddon(entity, key)));
            return;
        }
        if (!Array.isArray(key)) {
            key = [key];
        }
        //真正的查询从这里开始
        for (const k of key) {
            var addon = desc.external[k];
            var cVals = entity.map(item => {
                return item[addon.fromKey];
            });
            var condition = {};
            condition[addon.toKey] = ['in', cVals];
            var targetEntity = XEntity_1.EntityMap.get(addon.entity);
            if (!targetEntity) {
                continue;
            }
            let result = await this.of(targetEntity.entity).find({
                where: condition
            });
            //按指定条件分组                
            var groups = {};
            result.forEach(item => {
                var k = item[addon.toKey];
                groups[k] = groups[k] || [];
                groups[k].push(item);
            });
            if (addon.type == '1vn') {
                for (var item of entity) {
                    var target = groups[item[addon.fromKey]];
                    if (target) {
                        item[addon.field] = groups[item[addon.fromKey]];
                    }
                    else {
                        item[addon.field] = [];
                    }
                }
            }
            else {
                for (var item of entity) {
                    var target = groups[item[addon.fromKey]];
                    if (target && target.length) {
                        item[addon.field] = target[0];
                    }
                }
            }
        }
    }
    /**
     * 启动函数，只有调用了这个并且传入对应的数据库连接配置，XORM才会生效
     * @param configs
     */
    async startORM(configs) {
        if (!configs) {
            throw new Error("Xorm 配置文件错误");
        }
        if (!Array.isArray(configs)) {
            configs = [configs];
        }
        //设为正在运行的状态，防止后面有人重新启动
        if (isRuning) {
            return [];
        }
        isRuning = true;
        //启动垃圾回收器
        gc_1.ObservingObject.start();
        //开始启动连接池
        var promises = [];
        configs.forEach(config => {
            let manager;
            switch (config.type) {
                case 'mysql':
                    manager = new manager_1.MysqlConnectionManager(config);
                    break;
                default:
                    throw new Error("未被识别的数据库驱动：" + config.type);
            }
            constant_1.ORMCONFIG.CONFIGS[config.name] = config;
            promises.push(new Promise(async function (resolve, reject) {
                await manager.start();
                constant_1.ORMCONFIG.CONNECTION_MANAGER[config.name] = manager;
                resolve(manager);
            }));
        });
        //返回对应的连接实例
        return Promise.all(promises);
    }
    async transition(command) {
        return null;
    }
    /**
     * 因为采取了原型内魔法
     */
    // toJSON(...args: any[]): string {
    //     return JSON.stringify(this.toObject.apply(this, args));
    // }
    // /**
    //  * 同上
    //  */
    // toObject(data: any): object {
    //     var ret;
    //     if (Array.isArray(data)) {
    //         ret = [];
    //         for (var item of data) {
    //             ret.push(this.toObject(item));
    //         }
    //         return ret;
    //     }
    //     else {
    //         for (var i in data) {
    //             switch (typeof data[i] as any) {
    //                 case 'function':
    //                     break;
    //                 case 'array':
    //                     data[i] = this.toObject(data[i]);
    //                     break;
    //                 default:
    //                     data[i] = data[i];
    //                     break;
    //             }
    //         }
    //         return data;
    //     }
    // }
    // getRepository<T>(model: Entity<T>) {
    //     // return new Repository(model);
    //     //让单例见鸡儿去吧
    //     var resp = this.repoInstance.get(model.name) || (() => {
    //         var resp = new Repository(model)
    //         this.repoInstance.set(model.name, resp);
    //         return resp;
    //     })();
    //     return resp as Repository<T>;
    // }
    /**
    * 得到一个连接
    */
    getConnection(type = 'default') {
        return this.hasConnection(type) ? constant_1.ORMCONFIG.CONNECTION_MANAGER[type] : undefined;
    }
    /**
     * 判断是否存在这个数据库连接
     * @param type
     */
    hasConnection(type = 'default') {
        return constant_1.ORMCONFIG.CONNECTION_MANAGER[type];
    }
    /**
     * 封装一些常用的引用，使之只需要导入一个X就可以
     */
    // get Entity() {
    //     return XEntity;
    // }
    get OneToOne() {
        return Link_1.OneToOne;
    }
    get ManyToOne() {
        return Link_1.ManyToOne;
    }
    // get PrimaryColumn() {
    //     return PrimaryColumn;
    // }
    // get PrimaryGeneratedColumn() {
    //     return PrimaryGeneratedColumn;
    // }
    /**
     * 封装一些不依赖装饰器的行为
     */
    /**
     * 注册一个控制器
     */
    // registerEntity<T>(
    //     entity : Entity<T>,
    //     primary : (c : T) => any,
    //     fromDb : string = 'default',
    // ){
    //     if(EntityMap.has(entity.name)){
    //         return;
    //     }
    //     var newEntity = XEntity(fromDb)(entity) as Function;
    //     // Xen  
    //     PrimaryColumn()(newEntity.prototype,makeFactory(primary));
    // }
    /**
     * 用装饰器注册，因为需要改变函数行为，所以必须使用装饰器
     */
    // Enitty(
    //     config : EntityConfig
    // )
    // {
    // }   
    Entity(config) {
        return function (entity) {
            if (!config.database) {
                config.database = 'default';
            }
            var primary;
            if (typeof config.primary == 'function') {
                primary = Link_1.makeFactory(config.primary);
            }
            else {
                primary = config.primary;
            }
            var info;
            if (!XEntity_1.EntityMap.has(entity.name)) {
                info = XEntity_1.InitEntityDescirption();
                XEntity_1.EntityMap.set(entity.name, info);
            }
            else {
                info = XEntity_1.EntityMap.get(entity.name);
            }
            info.database = config.database;
            info.tableName = entity.name.replace(/^[A-Z]/, function (a) {
                return a.toLowerCase();
            }).replace(/[A-Z][a-z]/g, function (a) {
                return '_' + a.toLowerCase();
            });
            info.primary = primary;
            //大概会用到吧
            constant_1.ORMCONFIG.MODELS[config.database] = constant_1.ORMCONFIG.MODELS[config.database] || [];
            constant_1.ORMCONFIG.MODELS[config.database].push(entity);
            var code = new Function('entity', 'ObservingObject', `
                return class extends entity.prototype.constructor {
                    constructor() {
                        super();
                        return ObservingObject.addObserveObject(this);
                    }
                }
            `);
            var newClass = code.call(null, entity, gc_1.ObservingObject);
            // var newClass = class extends entity.prototype.constructor {
            //     constructor() {
            //         super();
            //         return ObservingObject.addObserveObject(this);
            //     }
            // }
            Object.defineProperty(newClass, 'name', {
                value: entity.name
            });
            info.entity = newClass;
            return newClass;
        };
    }
    /**
     * 创建一个新角色
     */
    createRole() {
    }
}
exports.XManager = XManager;
exports.X = new XManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW9JO0FBR3BJLG9EQUFnRTtBQUNoRSx5Q0FBdUM7QUFFdkMsNkJBQXVDO0FBQ3ZDLDJDQUFnRjtBQUtoRixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFFckI7SUE0QkksU0FBUztJQUtUO1FBQ0k7Ozs7OztXQU1HO1FBQ0ksYUFBYSxJQUFJO1FBQWpCLGVBQVUsR0FBVixVQUFVLENBQU87SUFHNUIsQ0FBQztJQTFCRCxFQUFFLENBQUMsTUFBVztRQUNWLE1BQU0sR0FBRyxNQUFhLENBQUM7UUFDdkIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDMUIsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDcEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFXLENBQUM7SUFDdkIsQ0FBQztJQThCRCxLQUFLLENBQUMsSUFBSSxDQUFJLE1BQVc7UUFDckIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQ0QsTUFBTSxHQUFHLE1BQWUsQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDZCxDQUFDO1FBQ0QsSUFBSSxJQUF3QixDQUFDO1FBQzdCLElB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