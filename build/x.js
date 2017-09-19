"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XEntity_1 = require("./decorator/XEntity");
const manager_1 = require("./driver/mysql/manager");
const constant_1 = require("./constant");
const repository_1 = require("./repository");
const gc_1 = require("./gc");
const Link_1 = require("./decorator/Link");
const PrimaryColumn_1 = require("./decorator/PrimaryColumn");
var isRuning = false;
class XEntityManager {
    constructor() {
        this.repoInstance = new Map();
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
        // if(Array.isArray(condition)){
        //     if(!condition.length){
        //         return false;
        //     }
        //     //批量删除实例，必须有主键
        //     if(typeof condition[0] == 'object'){
        //         desc = EntityMap.get(condition[0].__proto__.constructor.name) as EntityDescirption;
        //         var ids = condition.map(item => (item as any)[desc.primary]).filter(item => item != null && item != '');
        //         option = {};
        //         (option as any)[desc.primary] = ['in',ids];
        //     }
        //     else{
        //         desc = EntityMap.get(this.factory.name) as EntityDescirption;
        //     }
        // }
        // else{
        //     desc
        // }
        // return await this.getConnection(desc.database).delete(option, desc);
        // if (args.length == 1) {
        //     let entity = args[0];
        //     if (Array.isArray(entity)) {
        //         if (!entity.length) {
        //             return false;
        //         }
        //         desc = EntityMap.get(entity[0].__proto__.constructor.name) as EntityDescirption;
        //         if (!desc) {
        //             throw new Error("desc not found");
        //         }
        //         var ids = entity.map(item => (item as any)[desc.primary]).filter(item => item != null && item != '');
        //         var condition: any = {};
        //         condition[desc.primary] = ['in', ids];
        //         return await this.getConnection(desc.database).delete(condition, desc);
        //     }
        //     else {
        //         desc = EntityMap.get(entity[0].__proto__.constructor.name) as EntityDescirption;
        //         if (!desc) {
        //             throw new Error("desc not found");
        //         }
        //         var condition: any = {};
        //         condition[desc.primary] = (entity as any)[desc.primary]
        //         return await this.getConnection(desc.database).delete(condition, desc);
        //     }
        // }
        // else if (args.length == 2) {
        //     desc = EntityMap.get(args[0].name) as EntityDescirption;
        //     if (!desc) {
        //         throw new Error("desc not found");
        //     }
        //     var condition: any = {};
        //     switch (typeof args[1]) {
        //         case 'number':
        //         case 'string':
        //             condition[desc.primary] = args[1];
        //             break;
        //         default:
        //             condition = args[1];
        //             break;
        //     }
        //     return await this.getConnection(desc.database).delete(condition, desc);
        // }
        // else {
        //     throw new Error("delete 参数不对");
        // }
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
    get Entity() {
        return XEntity_1.XEntity;
    }
    get OneToOne() {
        return Link_1.OneToOne;
    }
    get ManyToOne() {
        return Link_1.ManyToOne;
    }
    get PrimaryColumn() {
        return PrimaryColumn_1.PrimaryColumn;
    }
    get PrimaryGeneratedColumn() {
        return PrimaryColumn_1.PrimaryGeneratedColumn;
    }
    /**
     * 封装一些不依赖装饰器的行为
     */
    /**
     * 注册一个控制器
     */
    registerEntity(entity, primary, fromDb = 'default') {
        if (XEntity_1.EntityMap.has(entity.name)) {
            return;
        }
        var newEntity = XEntity_1.XEntity(fromDb)(entity);
        // Xen  
        PrimaryColumn_1.PrimaryColumn()(newEntity.prototype, Link_1.makeFactory(primary));
    }
    addManyToOneLink(from, to, option) {
        Link_1.ManyToOne(to, option)(from.prototype, Link_1.makeFactory(option.from));
    }
    addOneToOneLink(from, to, option) {
        Link_1.OneToOne(to, option)(from.prototype, Link_1.makeFactory(option.from));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXNIO0FBR3RILG9EQUFnRTtBQUNoRSx5Q0FBdUM7QUFDdkMsNkNBQW9HO0FBQ3BHLDZCQUF1QztBQUN2QywyQ0FBOEY7QUFDOUYsNkRBQWtGO0FBR2xGLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztBQUVyQjtJQUFBO1FBRVksaUJBQVksR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQztJQStvQjNELENBQUM7SUEvbkJHLEVBQUUsQ0FBQyxNQUFXO1FBQ1YsTUFBTSxHQUFHLE1BQWEsQ0FBQztRQUN2QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUMxQixDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQVcsQ0FBQztJQUN2QixDQUFDO0lBY0QsS0FBSyxDQUFDLElBQUksQ0FBSSxNQUFXO1FBQ3JCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUNELE1BQU0sR0FBRyxNQUFlLENBQUM7UUFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUNELElBQUksSUFBSSxHQUFHLG1CQUFTLENBQUMs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