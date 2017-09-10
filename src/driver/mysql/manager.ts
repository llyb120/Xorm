import { ORMCONFIG } from './../../constant';
import { XOrmConfig } from '../../header/config';
import * as mysql from "mysql";
import { IPool } from "mysql";
import { IDriverBase } from '../driver';
import { EntityDescirption } from "../../decorator/XEntity";

export class MysqlConnectionManager implements IDriverBase {

    async insert<T>(data: T, desc: EntityDescirption): Promise<T> {
        var fields = [],
            values = [];
        for (const key in data) {
            if (typeof data[key] == 'function') continue;
            fields.push(`\`${key}\``);
            if (data[key] == null) {
                values.push('null');
            }
            else {
                values.push(`'${data[key]}'`);
            }
        }
        var dbname = this.config.database;

        var sql = `
            insert into \`${dbname}\`.\`${this.config.tablesPrefix + desc.tableName}\`
                (
                    ${fields.join(",")}
                )
                values
                (
                    ${values.join(",")}
                );
        `;
        try {
            console.log('start to insert')
            var ret = await this.query(sql);
            // var primaryVal = ret.insertId;
            data[desc.primary] = ret.insertId;
            // console.log(ret)
        }
        catch (e) {
            console.error(e);
        }
        // console.log("cubi")
        return data;
        // return;
        // return new Promise((resolve,reject) => {
        //     console.log(sql)
        //     this.query(sql).then((ret) => {
        //         console.log(ret)
        //     }).catch(e => {
        //         console.log(e)
        //     });
        // });
        // console.log(sql);
    }

    public pool: IPool;

    constructor(public config: MysqlConfig) {
    }

    /**
     * 创建对应的连接池
     */
    start() {
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
                if (err) {
                    reject(err);
                    return;
                }
                connection.query(sql, (err, vals, fields) => {
                    if (err) {
                        reject(err)
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