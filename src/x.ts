import { EntityMap, Entity, XEntity, EntityWatchingMap, IWatchedModel, ObserveObjectChanged } from './decorator/XEntity';
import { ObjectType } from "./header/ObjectType";
import { XOrmConfig } from "./header/config";
import { IDriverBase } from "./driver/driver";
import { MysqlConnectionManager } from "./driver/mysql/manager";
import { ORMCONFIG } from "./constant";
import { FindOption, Repository } from './repository';




/**
 * 得到一个模型对象的实例，需要放入监视对象中
 * @param model 
 */
// function X<Model>(model: { new(): Model }): Model {
//     var ins = new model;
//     var watching = {
//         changed: new Set<string>()
//     }
//     var proxy = new Proxy(ins, {
//         set: (obj: any, key: any, val: any) => {
//             watching.changed.add(key);
//             return obj[key] = val;
//         }
//     });
//     watchMap.set(proxy, watching);
//     return proxy;
// }
// var respInstance = new Map<any, Repository<any>>()

export class XEntityManager {

    private repoInstance = new Map<any, Repository<any>>();

    /**
     * 是否属于transition，当transition开启的时候，所有数据库操作均使用一条新开的事务，其间发生任何事，都进行回滚
     * 此时需要一个新的EntiyManager实例
     */
    private connection: any;

    /**
     * 保存多个实例
     * @param models 
     */
    save<T>(models: T[]): T[];
    /**
     * 保存单个实例
     * @param model 
     */
    save<T>(model: T): T;
    save<T>(models: any): any {
        if (Array.isArray(models)) {
            models = models as T[];
            var ret = [];
            for (let model of models) {
                ret.push(this.save(model));
            }
            return ret;
        }
        else {
            var model = <T>models;
            var changed = this.getChanged(model);
            //查找描述信息
            var desc = EntityMap.get((model as any).__proto__.constructor.name);
            if (!desc) {
                return model;
            }
            //没有发生任何改变的情况
            if (!changed || !changed.length) {
                return model;
            }
            //查询主键，如果没有的情况，默认为“ID"
            var constructor = (model as any).__proto__.constructor as {
                new(): any
            }
            //删除对changed的引用
            var _changed = EntityWatchingMap.get((model as any).__proto__.constructor.name)
            if (_changed) {
                _changed.changed = new Set<string>();
            }
            if (changed.includes(desc.primary) || !(desc.primary in model)) {
                let ret = getEntityManager().getRepository(constructor).insert(model);
                return ret;
            }
            else {
                if (!(desc.primary in model)) {
                    return model;
                }
                getEntityManager().getRepository(constructor).updateById((model as any)[desc.primary], model)
            }
        }
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
    async find<T>(entity: Entity<T>, option: FindOption<T>, observable = false): Promise<T[]> {
        var result = await this.getRepository(entity).find(option);
        if (observable) {
            var ret = [];
            for (var item of result) {
                var observed = ObserveObjectChanged(item);
                //劫持API，这才是你的亲爹
                observed.__proto__ = entity.prototype;
                ret.push(observed);
            }
            return ret;
        }
        return result;

    }

    /**
     * findOne默认追加observable
     * 可以检测到该元素内部的变动
     * @param entity 
     * @param option 
     */
    async findOne<T>(entity: Entity<T>, option: FindOption<T>): Promise<T> {
        var result = await this.getRepository(entity).findOne(option);
        if (result) {
            var observed = ObserveObjectChanged(result);
            //劫持API，这才是你的亲爹
            observed.__proto__ = entity.prototype;
            return observed;
        }
        return result;
    }


    /**
     * 得到一个模型中发生了改变的东西，便于以后注册钩子函数
     * @param model 
     */
    getChanged(model: Object): string[] {
        if (!model) {
            return [];
        }
        var changed = (EntityWatchingMap.get(model) as IWatchedModel).changed;
        var ret = [];
        for (const val of changed.values()) {
            if (val == '__proto__') continue;
            ret.push(val);
        }
        return ret;
    }




    /**
     * 启动函数，只有调用了这个并且传入对应的数据库连接配置，XORM才会生效
     * @param configs 
     */
    start(configs: XOrmConfig[] | XOrmConfig): Promise<IDriverBase[]> {
        if (!configs) {
            throw new Error("Xorm 配置文件错误");
        }
        if (!Array.isArray(configs)) {
            configs = [configs];
        }
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
        command: (x: XEntityManager) => Promise<any>
    ): Promise<any> {

        return null;
    }

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
}

export const X = new XEntityManager;

