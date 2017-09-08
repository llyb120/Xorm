import { XOrmConfig } from '../../header/config';
import * as mysql from "mysql";
import { IPool } from "mysql";
import { IDriverBase } from '../driver';

export class MysqlConnectionManager implements IDriverBase{
    public pool: IPool;

    constructor(public config: MysqlConfig) {
    }

    /**
     * 创建对应的连接池
     */
    start(){
        this.pool = mysql.createPool({
            host: this.config.host,
            user: this.config.username,
            password: this.config.password,
            database: this.config.database,
            port: this.config.port,
            //connectionLimit:100 //最大连接数 
        });
    }

    query(sql: string) {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                if(err){
                    reject();
                    return;
                }
                connection.query(sql,(err,vals,fields) => {
                    if(err){
                        reject()
                        return;
                    }
                    resolve(vals);
                })
            });
        })
    }
}

export interface MysqlConfig {
    type: 'mysql',
    name: "default" | string,
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    tablesPrefix?: string
}