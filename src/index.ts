import { XOrmConfig } from './header/config';
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