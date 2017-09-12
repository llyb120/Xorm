import { EntityDescirption } from './../decorator/XEntity';
import { MysqlConnectionManager } from './mysql/manager';
import { FindOption } from '../repository';

export interface IDriverBase {
    start(): Promise<any> | void;
    query(sql?: string): Promise<any>;
    insert(data : object, desc: EntityDescirption): Promise<any>;

    find<T>(findOption : FindOption<T>,desc : EntityDescirption) : Promise<T[]>;
}


