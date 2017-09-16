import { EntityMap, Entity, XEntity, EntityWatchingMap, IWatchedModel, EntityDescirption } from './decorator/XEntity';
import { XOrmConfig } from "./config";
import { IDriverBase } from "./driver/driver";
import { MysqlConnectionManager } from "./driver/mysql/manager";
import { ORMCONFIG } from "./constant";
import { FindOption, Repository, WhereOptionCompare, WhereOption, AddOnOption } from './repository';
import { ObservingObject } from './gc';
import { OneToOne, ManyToOne, makeFactory, LinkOption, LinkOptionEX } from './decorator/Link';
import { PrimaryColumn, PrimaryGeneratedColumn } from './decorator/PrimaryColumn';


var isRuning = false;

export class XEntityManager<U>{

    private repoInstance = new Map<any, Repository<any>>();

    /**
     * 是否属于transition，当transition开启的时候，所有数据库操作均使用一条新开的事务，其间发生任何事，都进行回滚
     * 此时需要一个新的EntiyManager实例
     */
    private connection: any;

    /**
     * 因为typescript无法通过省略参数来识别出第一个泛型，所以增加以下的变量以及方法，应对find方法，其他方法应该不受影响
     */
    /** start */
    private factory: Function;

    of<K>(entity: Entity<K>): XEntityManager<K>;
    of<K>(entity: K): XEntityManager<K>;
    of(entity: any): any {
        entity = entity as any;
        if (entity.prototype) {
            this.factory = entity;
        }
        else if (entity.__proto__) {
            this.factory = entity.__proto__;
        }
        return this as any;
    }
    /**end */


    /**
     * 保存多个实例
     * @param models 
     */
    async save<T>(models: T[]): Promise<T[]>;
    /**
     * 保存单个实例
     * @param model 
     */
    async save<T>(model: T): Promise<T>;
    async save<T>(models: any): Promise<any> {
        var isMultipul = Array.isArray(models);
        if (!isMultipul) {
            models = [models];
        }
        models = models as any[];
        if (!models.length) {
            return [];
        }
        var desc = EntityMap.get(models[0].__proto__.constructor.name) as EntityDescirption;
        if (!desc) {
            throw new Error("desc not found:");
        }
        // var ret = [];
        var ret = await Promise.all((models as any[]).map(async model => {
            var changed = ObservingObject.getChanged(model);
            if (!changed || !changed.length) {
                return model;
            }
            if (changed.includes(desc.primary) || !(desc.primary in model)) {
                // let ret = this.getRepository(constructor).insert(model);
                let ret = await this.getConnection(desc.database).insert(model as Partial<T>, desc);
                ObservingObject.clearChanged(model);
                return ret;
            }
            else {
                var condition: any = {};
                condition[desc.primary] = model[desc.primary];
                var updateData: any = {};
                changed.forEach(change => {
                    updateData[change] = model[change];
                })
                await this.getConnection(desc.database).update(condition, updateData, desc);
                ObservingObject.clearChanged(model);
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
    async update(condition: string | number | WhereOption<U>, data: Partial<U>): Promise<Partial<U>> {
        var name = this.factory ? this.factory.name : '';
        var desc = EntityMap.get(name);
        if (!desc) {
            throw new Error("desc not found:" + name);
        }
        if (!(desc.primary in data)) {
            throw new Error("desc primary not found:" + name)
        }
        let _condition: any;
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
    async delete<T>(condition: WhereOption<U> | string | number | T | any[]): Promise<boolean> {
        // async delete<T>(entity: Entity<T>, condition: number): Promise<boolean>;
        // async delete<T>(entity: Entity<T>, condition: string): Promise<boolean>;
        // async delete(...args: any[]) {
        let desc: EntityDescirption | undefined;
        let option: WhereOption<U>;

        //非条件的情况
        if (!Array.isArray(condition)) {
            if (typeof condition === 'object') {
                desc = EntityMap.get(this.factory.name) as EntityDescirption;
                if (!desc) {
                    throw new Error("desc not found");
                }
                return this.getConnection(desc.database).delete(condition, desc);
            }
            //单一主键删除
            condition = [condition];
        }

        //此时condition必然为数组
        condition = condition as any[];
        var ids = condition.map((item: any) => {
            if (typeof item == 'object') {
                desc = desc || EntityMap.get(item.__proto__.constructor.name) as EntityDescirption;
                return item[desc.primary];
            }
            else {
                desc = desc || EntityMap.get(this.factory.name) as EntityDescirption;
                return item;
            }
        });
        option = {};
        if (!desc) {
            throw new Error("desc not found");
        }
        (option as any)[desc.primary] = ids.filter((item: any) => {
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

    /**
     * 万能查询函数，对于不想声明的entity可以直接使用sql语句查询
     * @param connectionName 
     * @param sql 
     */
    query(connectionName: string, sql: string): Promise<object[]>;
    query(sql: string): Promise<object[]>;
    query(...args: string[]): Promise<object[]> {
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
    async find(option?: FindOption<U> | number | string | any[],onlyOne = false): Promise<U[]> {
        let condition: FindOption<U>;
        var name = this.factory ? this.factory.name : '';
        const desc = EntityMap.get(name);
        if (!desc) {
            throw new Error("desc not found");
        }

        do {
            if(!option){
                condition = {};
                break;
            }

            if (!Array.isArray(option)) {
                //直接输入条件的情况
                if (typeof option == 'object') {
                    condition = option;
                    break;
                }
                //主键查询的情况
                else {
                    option = [option];
                }
            }

            option = option as any[];
            if (!option.length) {
                return [];
            }
            //构造主键查询
            condition = { where: {} };
            (condition.where as any)[desc.primary] = ['in', option];
        } while (0);

        if (!condition) {
            return [];
        }
        if(onlyOne){
            condition.limit = 1;
        }

        var result = await this.getConnection(desc.database).find<U>(condition, desc);
        // }
        var ret: any[] = [];
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
            var observed = ObservingObject.addObserveObject(item);
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
            await Promise.all(addons.map(async key => {
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
    async findOne(option?: FindOption<U> | number | string | any[]): Promise<U | any> {
        var result = await this.find(option,true);
        if (result.length) {
            return result[0];
        }
        return null;
    }


    async makeAddon<T>(entity: T[], key?: string | string[]): Promise<void>;
    async makeAddon<T>(entity: T, key?: string | string[]): Promise<void>;
    async makeAddon<T>(entity: T | T[], key?: any): Promise<void> {
        if (!Array.isArray(entity)) {
            entity = [entity];
        }
        if (!entity.length) {
            return;
        }

        let desc = EntityMap.get((entity[0] as any).__proto__.constructor.name); if (!desc) {
            throw new Error("desc not found");
        }

        //如果没有传递key这个参数，那么默认生成所有的连接关系
        if (!key) {
            var keys = Object.keys(desc.external);
            if (!keys.length) {
                return;
            }
            await Promise.all(keys.map(async key => await this.makeAddon(entity, key)));
            return;
        }
        if (!Array.isArray(key)) {
            key = [key];
        }

        //真正的查询从这里开始
        for (const k of key) {
            var addon = (desc as any).external[k];
            var cVals = entity.map(item => {
                return (item as any)[addon.fromKey];
            })
            var condition: any = {};
            condition[addon.toKey] = ['in', cVals];
            var targetEntity = EntityMap.get(addon.entity);
            if (!targetEntity) {
                continue;
            }
            let result = await this.of(targetEntity.entity as any).find({
                where: condition
            });
            //按指定条件分组                
            var groups: any = {};
            result.forEach(item => {
                var k = (item as any)[addon.toKey];
                groups[k] = groups[k] || [];
                groups[k].push(item);
            });
            if (addon.type == '1vn') {
                for (var item of entity) {
                    var target = groups[(item as any)[addon.fromKey]];
                    if (target) {
                        (item as any)[addon.field] = groups[(item as any)[addon.fromKey]];
                    }
                    else {
                        (item as any)[addon.field] = [];
                    }
                }
            }
            //只针对一个的情况
            else {
                for (var item of entity) {
                    var target = groups[(item as any)[addon.fromKey]]
                    if (target && target.length) {
                        (item as any)[addon.field] = target[0];
                    }
                }
            }
        }
    }


    /**
     * 启动函数，只有调用了这个并且传入对应的数据库连接配置，XORM才会生效
     * @param configs 
     */
    async start(configs: XOrmConfig[] | XOrmConfig): Promise<IDriverBase[]> {
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
        ObservingObject.start();

        //开始启动连接池
        var promises: Promise<any>[] = [];
        configs.forEach(config => {
            let manager: IDriverBase;
            switch (config.type) {
                case 'mysql':
                    manager = new MysqlConnectionManager(config);
                    break;

                default:
                    throw new Error("未被识别的数据库驱动：" + config.type);

            }
            ORMCONFIG.CONFIGS[config.name] = config;

            promises.push(new Promise(async function (resolve, reject) {
                await manager.start();
                ORMCONFIG.CONNECTION_MANAGER[config.name] = manager;
                resolve(manager);
            }))
        });

        //返回对应的连接实例
        return Promise.all(promises);
    }


    async transition(
        command: (x: XEntityManager<any>) => Promise<any>
    ): Promise<any> {

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

    getRepository<T>(model: Entity<T>) {
        // return new Repository(model);
        //让单例见鸡儿去吧
        var resp = this.repoInstance.get(model.name) || (() => {
            var resp = new Repository(model)
            this.repoInstance.set(model.name, resp);
            return resp;
        })();
        return resp as Repository<T>;
    }


    /**
    * 得到一个连接
    */
    getConnection(type = 'default'): IDriverBase {
        return this.hasConnection(type) ? ORMCONFIG.CONNECTION_MANAGER[type] : undefined;
    }

    /**
     * 判断是否存在这个数据库连接
     * @param type 
     */
    hasConnection(type = 'default'): boolean {
        return ORMCONFIG.CONNECTION_MANAGER[type];
    }


    /**
     * 封装一些常用的引用，使之只需要导入一个X就可以
     */
    get Entity() {
        return XEntity;
    }

    get OneToOne() {
        return OneToOne;
    }

    get ManyToOne() {
        return ManyToOne;
    }

    get PrimaryColumn() {
        return PrimaryColumn;
    }

    get PrimaryGeneratedColumn() {
        return PrimaryGeneratedColumn;
    }

    /**
     * 封装一些不依赖装饰器的行为
     */
    /**
     * 注册一个控制器
     */
    registerEntity<T>(
        entity : Entity<T>,
        primary : (c : T) => any,
        fromDb : string = 'default',
    ){
        if(EntityMap.has(entity.name)){
            return;
        }

        var newEntity = XEntity(fromDb)(entity) as Function;
        // Xen  
        PrimaryColumn()(newEntity.prototype,makeFactory(primary));
    }

    addManyToOneLink<T,K>(
        from : Entity<T>,
        to : Entity<K>,
        option : LinkOptionEX<T,K>
    ){
        ManyToOne(to,option)(from.prototype,makeFactory(option.from));
    }

    addOneToOneLink<T,K>(
        from : Entity<T>,
        to : Entity<K>,
        option : LinkOptionEX<T,K>
    ){
        OneToOne(to,option)(from.prototype,makeFactory(option.from));
    }
    
}

export const X = new XEntityManager;

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

