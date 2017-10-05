import { XManager } from './../x';
import { EntityDescirption } from './../decorator/XEntity';
import { MysqlConnectionManager } from './mysql/manager';
import { FindOption, WhereOption } from '../repository';
// import { QueryBuilder } from '../querybuilder';

export interface IDriverBase {
    start(): Promise<any> | void;
    query(sql?: string,context? : XManager<any>,database?: string): Promise<any>;
    insert(data : object, desc: EntityDescirption,context? : XManager<any>): Promise<any>;

    find<T>(findOption : FindOption<T>,desc : EntityDescirption) : Promise<T[]>;

    update<T>(condition : WhereOption<T>,data : Partial<T>,desc : EntityDescirption,context? : XManager<T>) : Promise<any>;

    delete<T>(condition : WhereOption<T>,desc : EntityDescirption,context? : XManager<T>) : Promise<boolean>;

    count<T>(condition : FindOption<T>,desc : EntityDescirption) : Promise<number>;

    roolback(connection : any) : any;
    commit(connection : any) : any;
}



