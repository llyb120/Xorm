"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
// import { QueryBuilder } from '../../querybuilder';
class MysqlConnectionManager {
    constructor(config) {
        this.config = config;
        if (!this.config.tablesPrefix) {
            this.config.tablesPrefix = '';
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcml2ZXIvbXlzcWwvbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLCtCQUErQjtBQUsvQixxREFBcUQ7QUFFckQ7SUFzU0ksWUFBbUIsTUFBbUI7UUFBbkIsV0FBTSxHQUFOLE1BQU0sQ0FBYTtRQUNsQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDbEMsQ0FBQztJQUNMLENBQUM7SUF2U08sR0FBRyxDQUFDLEdBQUcsSUFBVztRQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQUssQ0FBSSxTQUF3QixFQUFFLElBQXVCO1FBQzVELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksR0FBWSxDQUFDLENBQUMsQ0FBQztZQUM5QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxLQUFL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