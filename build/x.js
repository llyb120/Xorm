"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XEntity_1 = require("./decorator/XEntity");
const manager_1 = require("./driver/mysql/manager");
const constant_1 = require("./constant");
const repository_1 = require("./repository");
const gc_1 = require("./gc");
const Link_1 = require("./decorator/Link");
var isRuning = false;
class XEntityManager {
    constructor() {
        this.repoInstance = new Map();
        // addManyToOneLink<T, K>(
        //     from: Entity<T>,
        //     to: Entity<K>,
        //     option: LinkOptionEX<T, K>
        // ) {
        //     ManyToOne(to, option)(from.prototype, makeFactory(option.from));
        // }
        // addOneToOneLink<T, K>(
        //     from: Entity<T>,
        //     to: Entity<K>,
        //     option: LinkOptionEX<T, K>
        // ) {
        //     OneToOne(to, option)(from.prototype, makeFactory(option.from));
        // }
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
        var desc = XEntity_1.EntityMap.get(models[0].__proto__.constructor.name);
        if (!desc) {
            throw new Error("desc not found:");
        }
        // var ret = [];
        var ret = await Promise.all(models.map(async (model) => {
            var changed = gc_1.ObservingObject.getChanged(model);
            if (!changed || !changed.length) {
                return model;
            }
            if (changed.includes(desc.primary) || !(desc.primary in model)) {
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
        option[desc.primary] = ids.filter((item) => {
            return item;
        });
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
        return null;
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
    getRepository(model) {
        // return new Repository(model);
        //让单例见鸡儿去吧
        var resp = this.repoInstance.get(model.name) || (() => {
            var resp = new repository_1.Repository(model);
            this.repoInstance.set(model.name, resp);
            return resp;
        })();
        return resp;
    }
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
            var newClass = class extends entity.prototype.constructor {
                constructor() {
                    super();
                    return gc_1.ObservingObject.addObserveObject(this);
                }
            };
            Object.defineProperty(newClass, 'name', {
                value: entity.name
            });
            info.entity = newClass;
            return newClass;
        };
    }
}
exports.XEntityManager = XEntityManager;
exports.X = new XEntityManager;
// function X() {
// return xx;
// }
// namespace X {
// export const hasConnection = xx.hasConnection;
// export const 
// export function hasConnection() {
//     return xx.hasConnection
// }
// }
// export {X};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW9JO0FBR3BJLG9EQUFnRTtBQUNoRSx5Q0FBdUM7QUFDdkMsNkNBQW9HO0FBQ3BHLDZCQUF1QztBQUN2QywyQ0FBZ0Y7QUFLaEYsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBRXJCO0lBQUE7UUFFWSxpQkFBWSxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO1FBMG5CdkQsMEJBQTBCO1FBQzFCLHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIsaUNBQWlDO1FBQ2pDLE1BQU07UUFDTix1RUFBdUU7UUFDdkUsSUFBSTtRQUVKLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIscUJBQXFCO1FBQ3JCLGlDQUFpQztRQUNqQyxNQUFNO1FBQ04sc0VBQXNFO1FBQ3RFLElBQUk7SUFFUixDQUFDO0lBMW5CRyxFQUFFLENBQUMsTUFBVztRQUNWLE1BQU0sR0FBRyxNQUFhLENBQUM7UUFDdkIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDMUIsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDcEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFXLENBQUM7SUFDdkIsQ0FBQztJQWNELEtBQUssQ0FBQyxJQUFJLENBQUksTUFBVztRQUNyQixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNkLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FB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