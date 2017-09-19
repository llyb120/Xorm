"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
// import { QueryBuilder } from '../../querybuilder';
class MysqlConnectionManager {
    constructor(config) {
        this.config = config;
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
        console.log(sql);
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
                    buffer.push(` and ${fieldName} in ( ${val[1].map((item) => `'${item}'`).join(',')} )`);
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
    buildSql(findOption, desc) {
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
        console.log(sql);
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
                    reject(err);
                    return;
                }
                connection.query(sql, (err, vals, fields) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(vals);
                });
            });
        });
    }
}
exports.MysqlConnectionManager = MysqlConnectionManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcml2ZXIvbXlzcWwvbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLCtCQUErQjtBQUsvQixxREFBcUQ7QUFFckQ7SUE0SkksWUFBbUIsTUFBbUI7UUFBbkIsV0FBTSxHQUFOLE1BQU0sQ0FBYTtJQUN0QyxDQUFDO0lBNUpELEtBQUssQ0FBQyxNQUFNLENBQUksU0FBeUIsRUFBRSxJQUF1QjtRQUM5RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxHQUFHLEdBQUc7NEJBQ1UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVM7U0FDeEYsQ0FBQztRQUNGLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1osR0FBRyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDM0IsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNoRCxDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBSSxTQUF5QixFQUFFLElBQU8sRUFBRSxJQUF1QjtRQUN2RSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxHQUFHLEdBQUc7dUJBQ0ssSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVM7a0JBQzFFLENBQUM7WUFDSCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFD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