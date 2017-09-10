import { Connection } from './connection';
import { EntityManager } from './entity_manager';
import { XOrmConfig } from './header/config';
import { MysqlConnectionManager } from './driver/mysql/manager';
import { IDriverBase } from './driver/driver';
import { ORMCONFIG } from './constant';


/**
 * 启动函数，调用该函数才会生效
 */

export function XOrmStart(configs: XOrmConfig[] | XOrmConfig): Promise<IDriverBase[]> {
    if (!configs) {
        throw new Error("Xorm 配置文件错误");
    }
    if(!Array.isArray(configs)){
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

/**
 * 得到一个连接
 */
export function getConnection(type = 'default'): IDriverBase {
    return hasConnection(type) ? ORMCONFIG.CONNECTION_MANAGER[type] : undefined;
}

/**
 * 判断是否存在这个数据库连接
 * @param type 
 */
export function hasConnection(type = 'default'): boolean {
    return ORMCONFIG.CONNECTION_MANAGER[type];
}

// /**
//  * 兼容typeorm
//  */
// export function getEntityManager(): EntityManager {

// }