"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
// import { QueryBuilder } from '../../querybuilder';
class MysqlConnectionManager {
    constructor(config) {
        this.config = config;
    }
    log(...args) {
        if (this.config.debug) {
            console.log.call(null, args);
        }
    }
    async count(condition, desc) {
        const sql = this.buildSql(condition, desc, true);
        const res = await this.query(sql);
        for (const item of res) {
            for (let i in item) {
                return item[i];
            }
        }
        return 0;
    }
    async delete(condition, desc) {
        var str = this.buildWhere(condition, desc, false);
        var sql = `
            delete from \`${this.config.database}\`.\`${this.config.tablesPrefix + desc.tableName}\`
        `;
        if (str != '') {
            sql += ' where ' + str;
        }
        return await this.query(sql) ? true : false;
    }
    async update(condition, data, desc) {
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
        this.log(sql);
        return this.query(sql);
    }
    buildWhere(whereOption, desc, addPrefix = true) {
        var buffer = [];
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
            var val = whereOption[name];
            //添加前缀，防止占用关键字
            var fieldName = (addPrefix ? 't_' + desc.tableName + '.' : "") + name;
            ``;
            if (Array.isArray(val)) {
                if (val[0] == 'like') {
                    buffer.push(` and ${fieldName} like '${val[1]}'`);
                }
                else if (val[0] == 'in') {
                    if (!Array.isArray(val[1]) || !val[1].length) {
                        buffer.push(` and ${fieldName} in ( -10086 )`);
                    }
                    else {
                        buffer.push(` and ${fieldName} in ( ${val[1].map((item) => `'${item}'`).join(',')} )`);
                    }
                }
                else if (val[0] == 'between') {
                    buffer.push(`and ${fieldName} between '${val[1]}' and '${val[2]}'`);
                }
            }
            else if (Object.prototype.isPrototypeOf(val)) {
                const conditionBuf = [];
                for (var key in val) {
                    let op;
                    switch (key) {
                        case 'lt':
                            conditionBuf.push(`${fieldName} < '${val[key]}'`);
                            break;
                        case 'gt':
                            conditionBuf.push(`${fieldName} > '${val[key]}'`);
                            break;
                        case 'let':
                            conditionBuf.push(`${fieldName} <= '${val[key]}'`);
                            break;
                        case 'get':
                            conditionBuf.push(`${fieldName} >= '${val[key]}'`);
                            break;
                        case 'eq':
                            if (val[key] === null || val[key] === undefined) {
                                conditionBuf.push(`${fieldName} is null`);
                            }
                            else {
                                conditionBuf.push(`${fieldName} = '${val[key]}'`);
                            }
                            break;
                        case 'neq':
                            if (val[key] === null || val[key] === undefined) {
                                conditionBuf.push(`${fieldName} is not null`);
                            }
                            else {
                                conditionBuf.push(`${fieldName} <> '${val[key]}'`);
                            }
                            break;
                        case 'like':
                            conditionBuf.push(`${fieldName} like '${val[key]}'`);
                            break;
                        case 'slike':
                            conditionBuf.push(`${fieldName} like '%${val[key]}%'`);
                            break;
                        case 'in':
                            if (!Array.isArray(val[key]) || !val[key].length) {
                                buffer.push(` and ${fieldName} in ( -10086 )`);
                            }
                            else {
                                buffer.push(` and ${fieldName} in ( ${val[key].map((item) => `'${item}'`).join(',')} )`);
                            }
                            break;
                        case 'between':
                            buffer.push(`and ${fieldName} between '${val[key][0]}' and '${val[key][1]}'`);
                            break;
                    }
                }
                if (conditionBuf.length) {
                    buffer.push(' and ' + conditionBuf.join(" and "));
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
    buildSql(findOption, desc, useCount = false) {
        var where;
        var group = '';
        var sql = `
            select ${useCount ? 'count(*)' : "*"} from \`${this.config.database}\`.\`${this.config.tablesPrefix + desc.tableName}\` as t_${desc.tableName}
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
        this.log(sql);
        return sql;
    }
    async find(findOption, desc) {
        const sql = this.buildSql(findOption, desc);
        var ret;
        ret = await this.query(sql);
        return ret || [];
    }
    async insert(data, desc) {
        var fields = [], values = [];
        for (const [key, val] of Object.entries(data)) {
            if (typeof val == 'function')
                continue;
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
        data[desc.primary] = ret.insertId;
        return data;
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
        });
    }
    query(sql) {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                if (err) {
                    connection.release();
                    reject(err);
                    return;
                }
                connection.query(sql, (err, vals, fields) => {
                    if (err) {
                        connection.release();
                        reject(err);
                        return;
                    }
                    connection.release();
                    resolve(vals);
                });
            });
        });
    }
}
exports.MysqlConnectionManager = MysqlConnectionManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcml2ZXIvbXlzcWwvbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLCtCQUErQjtBQUsvQixxREFBcUQ7QUFFckQ7SUF5UEksWUFBbUIsTUFBbUI7UUFBbkIsV0FBTSxHQUFOLE1BQU0sQ0FBYTtJQUN0QyxDQUFDO0lBdlBPLEdBQUcsQ0FBQyxHQUFHLElBQVc7UUFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLLENBQUksU0FBd0IsRUFBRSxJQUF1QjtRQUM1RCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLEdBQVksQ0FBQyxDQUFDLENBQUM7WUFDOUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBSSxTQUF5QixFQUFFLElBQXVCO1FBQzlELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLEdB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