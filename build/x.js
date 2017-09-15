"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XEntity_1 = require("./decorator/XEntity");
const manager_1 = require("./driver/mysql/manager");
const constant_1 = require("./constant");
const repository_1 = require("./repository");
const gc_1 = require("./gc");
var isRuning = false;
class XEntityManager {
    constructor() {
        this.repoInstance = new Map();
    }
    of(entity) {
        this.factory = entity;
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
    async delete(...args) {
        let desc;
        if (args.length == 1) {
            let entity = args[0];
            if (Array.isArray(entity)) {
                if (!entity.length) {
                    return false;
                }
                desc = XEntity_1.EntityMap.get(entity[0].__proto__.constructor.name);
                if (!desc) {
                    throw new Error("desc not found");
                }
                var ids = entity.map(item => item[desc.primary]).filter(item => item != null && item != '');
                var condition = {};
                condition[desc.primary] = ['in', ids];
                return await this.getConnection(desc.database).delete(condition, desc);
            }
            else {
                desc = XEntity_1.EntityMap.get(entity[0].__proto__.constructor.name);
                if (!desc) {
                    throw new Error("desc not found");
                }
                var condition = {};
                condition[desc.primary] = entity[desc.primary];
                return await this.getConnection(desc.database).delete(condition, desc);
            }
        }
        else if (args.length == 2) {
            desc = XEntity_1.EntityMap.get(args[0].name);
            if (!desc) {
                throw new Error("desc not found");
            }
            var condition = {};
            switch (typeof args[1]) {
                case 'number':
                case 'string':
                    condition[desc.primary] = args[1];
                    break;
                default:
                    condition = args[1];
                    break;
            }
            return await this.getConnection(desc.database).delete(condition, desc);
        }
        else {
            throw new Error("delete 参数不对");
        }
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
    async find(option = {}, observable = false) {
        var name = this.factory ? this.factory.name : '';
        const desc = XEntity_1.EntityMap.get(name);
        if (!desc) {
            throw new Error("desc not found");
            // return [];
        }
        var result = await this.getConnection(desc.database).find(option, desc);
        //判断是否要追加字段
        // if (option.addon) {
        //     var addons = Object.keys(desc.external).filter(item => desc.external[item]);
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
        if (option.addon) {
            var addons = Object.keys(option.addon).filter(item => desc.external[item]);
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
    async findOne(option = {}) {
        var result = await this.find(option);
        return result[0];
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
    async start(configs) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXNIO0FBSXRILG9EQUFnRTtBQUNoRSx5Q0FBdUM7QUFDdkMsNkNBQW9HO0FBQ3BHLDZCQUF1QztBQUd2QyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFFckI7SUFBQTtRQUVZLGlCQUFZLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7SUErZTNELENBQUM7SUFqZUcsRUFBRSxDQUFJLE1BQWlCO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFXLENBQUM7SUFDdkIsQ0FBQztJQWNELEtBQUssQ0FBQyxJQUFJLENBQUksTUFBVztRQUNyQixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNaLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFDRCxNQUFNLEdBQUcsTUFBZSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDZixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUNELElBQUksSUFBSSxHQUFHLG1CQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBc0IsQ0FBQztRQUNwRixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUNELGdCQUFnQjtRQUNoQixJQUFJLEdBQUcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUUsTUFB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