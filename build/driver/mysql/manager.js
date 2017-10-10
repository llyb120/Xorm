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
    async delete(condition, desc, context) {
        var str = this.buildWhere(condition, desc, false);
        var sql = `
            delete from \`${this.config.database}\`.\`${this.config.tablesPrefix + desc.tableName}\`
        `;
        if (str != '') {
            sql += ' where ' + str;
        }
        return await this.query(sql, context, desc.database) ? true : false;
    }
    async update(condition, data, desc, context) {
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
        return this.query(sql, context, desc.database);
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
                else if (val[0] == 'notlike') {
                    buffer.push(` and ${fieldName} not like '${val[1]}'`);
                }
                else if (val[0] == 'notin') {
                    if (!Array.isArray(val[1]) || !val[1].length) {
                        buffer.push(` and ${fieldName} not in ( -10086 )`);
                    }
                    else {
                        buffer.push(` and ${fieldName} not in ( ${val[1].map((item) => `'${item}'`).join(',')} )`);
                    }
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
                        case 'notlike':
                            conditionBuf.push(`${fieldName} not like '${val[key]}'`);
                            break;
                        case 'notin':
                            if (!Array.isArray(val[key]) || !val[key].length) {
                                buffer.push(` and ${fieldName} not in ( -10086 )`);
                            }
                            else {
                                buffer.push(` and ${fieldName} not in ( ${val[key].map((item) => `'${item}'`).join(',')} )`);
                            }
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
        /**
         * 追加的字段
         */
        let fieldsBuffer = [];
        if (findOption.extFields) {
            for (const key in findOption.extFields) {
                switch (key) {
                    case 'sum':
                    case 'count':
                    case 'avg':
                        if (!findOption.extFields[key]) {
                            break;
                        }
                        for (const fieldName in findOption.extFields[key]) {
                            fieldsBuffer.push(`ifnull(${key}(t_${desc.tableName}.${fieldName}),0) as ${findOption.extFields[key][fieldName]}`);
                        }
                        break;
                }
            }
        }
        var sql = `
            select ${useCount ? 'count(*)' : "*"} ${fieldsBuffer.length ? "," + fieldsBuffer.join(",") : ""} from \`${this.config.database}\`.\`${this.config.tablesPrefix + desc.tableName}\` as t_${desc.tableName}
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
    async insert(data, desc, context) {
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
        var ret = await this.query(sql, context, desc.database);
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
    getConnection() {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                // connection.beginTransaction(())
                if (err) {
                    reject(err);
                    return;
                }
                resolve(connection);
            });
        });
    }
    query(sql, context, database) {
        return new Promise(async (resolve, reject) => {
            /**
             * 事务
             */
            let connection;
            let query = function (connection) {
                connection.query(sql, (err, vals, fields) => {
                    if (!context || !context.inTransition) {
                        connection.release();
                    }
                    else {
                    }
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(vals);
                });
            };
            if (context && context.inTransition && database) {
                if (!context._transitionStroage[database]) {
                    connection = await this.getConnection();
                    context._transitionStroage[database] = connection;
                    //开启事务
                    connection.beginTransaction(err => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        query(connection);
                    });
                }
                else {
                    connection = context._transitionStroage[database];
                    query(connection);
                }
            }
            else {
                connection = await this.getConnection();
                query(connection);
            }
            // this.pool.getConnection((err, connection) => {
            //     if (err) {
            //         connection.release();
            //         reject(err);
            //         return;
            //     }
            //     connection.query(sql, (err, vals, fields) => {
            //         if (err) {
            //             connection.release();
            //             reject(err)
            //             return;
            //         }
            //         connection.release();
            //         resolve(vals);
            //     })
            // });
        });
    }
    roolback(connection) {
        return new Promise((resolve, reject) => {
            connection.rollback(() => {
                connection.release();
                resolve();
            });
        });
    }
    commit(connection) {
        return new Promise((resolve, reject) => {
            connection.commit(() => {
                connection.release();
                resolve();
            });
        });
    }
}
exports.MysqlConnectionManager = MysqlConnectionManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcml2ZXIvbXlzcWwvbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLCtCQUErQjtBQUsvQixxREFBcUQ7QUFFckQ7SUFzU0ksWUFBbUIsTUFBbUI7UUFBbkIsV0FBTSxHQUFOLE1BQU0sQ0FBYTtJQUN0QyxDQUFDO0lBcFNPLEdBQUcsQ0FBQyxHQUFHLElBQVc7UUFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLLENBQUksU0FBd0IsRUFBRSxJQUF1QjtRQUM1RCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLEdBQVksQ0FBQyxDQUFDLENBQUM7WUFDOUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBSSxTQUF5QixFQUFFLElBQXVCLEVBQUUsT0FBcUI7UUFDckYsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FB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