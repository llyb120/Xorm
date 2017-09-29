import { EntityDescirption } from './../decorator/XEntity';
import { MysqlConnectionManager } from './mysql/manager';
import { FindOption, WhereOption } from '../repository';
// import { QueryBuilder } from '../querybuilder';

export interface IDriverBase {
    start(): Promise<any> | void;
    query(sql?: string): Promise<any>;
    insert(data : object, desc: EntityDescirption): Promise<any>;

    find<T>(findOption : FindOption<T>,desc : EntityDescirption) : Promise<T[]>;

    update<T>(condition : WhereOption<T>,data : Partial<T>,desc : EntityDescirption) : Promise<any>;

    delete<T>(condition : WhereOption<T>,desc : EntityDescirption) : Promise<boolean>;

    count<T>(condition : FindOption<T>,desc : EntityDescirption) : Promise<number>;
}



