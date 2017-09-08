import { MysqlConnectionManager } from './mysql/manager';

export interface IDriverBase{
    start() : Promise<any> | void;
    query(sql? : string) : Promise<any>; 
}


