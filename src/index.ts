import { XOrmConfig } from './config';
import { MysqlConnectionManager } from './driver/mysql/manager';
import { IDriverBase } from './driver/driver';
import { ORMCONFIG } from './constant';
import { X } from './x';
//对外封装常用的方法


/**
 * 得到一个连接
 */
export function getConnection(type = 'default'): IDriverBase {
    return X.getConnection(type);
}

/**
 * 判断是否存在这个数据库连接
 * @param type 
 */
export function hasConnection(type = 'default'): boolean {
    return X.hasConnection(type);
}

export function getEntityManager() {
    return X;
}

export * from "./constant";
export * from "./gc";
export * from "./repository";
// export * from "./querybuilder";
export * from "./x";

export * from "./config";
export * from "./driver/driver";
export * from "./driver/mysql/manager";
// export * from "./decorator/XEntity";
// export * from "./decorator/PrimaryColumn";
export * from "./decorator/XEntity";
export {LinkOption} from "./decorator/Link"
