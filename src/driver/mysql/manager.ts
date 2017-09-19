import { ORMCONFIG } from './../../constant';
import { XOrmConfig } from '../../config';
import * as mysql from "mysql";
import { IPool } from "mysql";
import { IDriverBase } from '../driver';
import { EntityDescirption } from "../../decorator/XEntity";
import { FindOption, WhereOption } from '../../repository';
// import { QueryBuilder } from '../../querybuilder';

export class MysqlConnectionManager implements IDriverBase {
    async delete<T>(condition: WhereOption<T>, desc: EntityDescirption): Promise<boolean> {
        var str = this.buildWhere(condition, desc, false);
        var sql = `
            delete from \`${this.config.database}\`.\`${this.config.tablesPrefix + desc.tableName}\`
        `;
        if (str != '') {
            sql += ' where ' + str;
        }
        return await this.query(sql) ? true : false;
    }

    async update<T>(condition: WhereOption<T>, data: T, desc: EntityDescirption): Promise<any> {
        var str = this.buildWhere(condition, desc, false);
        var sql = `
            update \`${this.config.database}\`.\`${this.config.tablesPrefix + desc.tableName}\`
            set ${(() => {
                var buf = [];
                for (const [key, val] of Object.entries(data)) {
                    var fieldName = '`' + key + '`';
                    if (val == null) {
                        buf.push(`${fieldName} = null`);
                    }
                    else {
                        buf.push(`${fieldName} = '${val}'`);
                    }
                }
                return buf.join(",");
            })()}
        `;
        if (str != '') {
            sql += ' where ' + str;
        }
        console.log(sql)
        return this.query(sql);
    }

    private buildWhere<T>(whereOption: WhereOption<T>, desc: EntityDescirption, addPrefix = true) {
        var buffer: string[] = [];
        //build and
        if (whereOption.and) {
            var str = this.buildWhere(whereOption.and, desc);
            if (str != '') {
                buffer.push(' and (' + str + ')');
            }
            delete whereOption.and;
        }
        //build or
        if (whereOption.or) {
            var str = this.buildWhere(whereOption.or, desc);
            if (str != '') {
                buffer.push(' or ( ' + str + ')');
            }
            delete whereOption.or;
        }

        for (var name in whereOption) {
            var val = (whereOption as any)[name];
            //添加前缀，防止占用关键字
            var fieldName = (addPrefix ? 't_' + desc.tableName + '.' : "") + name; ``
            if (Array.isArray(val)) {
                if (val[0] == 'like') {
                    buffer.push(` and ${fieldName} like '${val[1]}'`);
                }
                else if (val[0] == 'in') {
                    buffer.push(` and ${fieldName} in ( ${val[1].map((item: string) => `'${item}'`).join(',')} )`);
                }
            }
            else {
                if (val == null) {
                    buffer.push(` and ${fieldName} is null`);
                }
                else {
                    buffer.push(` and ${fieldName} = '${val}'`);
                }
            }
        }
        return buffer.join(" ").replace(/^\s*(and|or)/, "").trim();
    }


    public buildSql<T>(findOption: FindOption<T>, desc: EntityDescirption): string {
        var where;
        var group = '';

        var sql = `
            select * from \`${this.config.database}\`.\`${this.config.tablesPrefix + desc.tableName}\` as t_${desc.tableName}
        `;
        if (findOption.where) {
            var str = this.buildWhere(findOption.where, desc);
            if (str != '') {
                sql += ' where ' + str;
            }
        }
        if (findOption.group) {
            sql += ' group by ' + `t_${desc.tableName}.${findOption.group}`;
        }
        if (findOption.order) {
            var buf = [];
            for (const name in findOption.order) {
                buf.push(`t_${desc.tableName}.${name} ${findOption.order[name]}`);
            }
            sql += " order by " + buf.join(",");
        }
        if (findOption.limit) {
            if (Array.isArray(findOption.limit)) {
                sql += ' limit ' + findOption.limit[0] + ' , ' + findOption.limit[1];
            }
            else {
                sql += ' limit ' + findOption.limit;
            }
        }
        console.log(sql)
        return sql;
    }

    async find<T>(findOption: FindOption<T>, desc: EntityDescirption): Promise<T[]> {
        const sql = this.buildSql(findOption, desc);
        var ret;
        ret = await this.query(sql);
        return (ret as T[]) || [];
    }

    async insert<T>(data: T, desc: EntityDescirption): Promise<T> {
        var fields = [],
            values = [];
        for (const [key, val] of Object.entries(data)) {
            if (typeof val == 'function') continue;
            fields.push(`\`${key}\``);
            if (val == null) {
                values.push('null');
            }
            else {
                values.push(`'${val}'`);
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
        var ret = await this.query(sql);
        (data as any)[desc.primary] = (ret as any).insertId;
        return data;

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