"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mysql = require("mysql");
var MysqlConnectionManager = (function () {
    function MysqlConnectionManager(config) {
        this.config = config;
    }
    MysqlConnectionManager.prototype.buildWhere = function (whereOption, desc) {
        var buffer = [];
        //build and
        if (whereOption.and) {
            var str = this.buildWhere(whereOption.and, desc).trim();
            if (str != '') {
                buffer.push(' and (' + str + ')');
            }
            delete whereOption.and;
        }
        //build or
        if (whereOption.or) {
            var str = this.buildWhere(whereOption.or, desc);
            if (str.trim() != '') {
                buffer.push(' or ( ' + str + ')');
            }
            delete whereOption.or;
        }
        for (var name in whereOption) {
            var val = whereOption[name];
            var fieldName = desc.tableName + '.' + name;
            "";
            if (Array.isArray(val)) {
                if (val[0] == 'like') {
                    buffer.push(" and " + fieldName + " like '" + val[1] + "'");
                }
                else if (val[0] == 'in') {
                    buffer.push(" and " + fieldName + " in ( " + val[1].map(function (item) { return "'" + item + "'"; }).join(',') + " )");
                }
            }
            else {
                if (val == null) {
                    buffer.push(" and " + fieldName + " is null");
                }
                else {
                    buffer.push(" and " + fieldName + " = '" + val + "'");
                }
            }
        }
        return buffer.join(" ").replace(/^\s*(and|or)/, "");
    };
    MysqlConnectionManager.prototype.buildSql = function (findOption, desc) {
        var where;
        var group = '';
        var sql = "\n            select * from `" + this.config.database + "`.`" + (this.config.tablesPrefix + desc.tableName) + "` as " + desc.tableName + "\n        ";
        if (findOption.where) {
            var str = this.buildWhere(findOption.where, desc);
            if (str != '') {
                sql += ' where ' + str;
            }
        }
        if (findOption.group) {
            sql += ' group by ' + (desc.tableName + "." + findOption.group);
        }
        if (findOption.order) {
            var buf = [];
            for (var name in findOption.order) {
                buf.push(desc.tableName + "." + name + " " + findOption.order[name]);
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
        return sql;
    };
    MysqlConnectionManager.prototype.find = function (findOption, desc) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var sql, ret;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = this.buildSql(findOption, desc);
                        return [4 /*yield*/, this.query(sql)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret || []];
                }
            });
        });
    };
    MysqlConnectionManager.prototype.insert = function (data, desc) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var fields, values, key, dbname, sql, ret;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fields = [], values = [];
                        for (key in data) {
                            if (typeof data[key] == 'function')
                                continue;
                            fields.push("`" + key + "`");
                            if (data[key] == null) {
                                values.push('null');
                            }
                            else {
                                values.push("'" + data[key] + "'");
                            }
                        }
                        dbname = this.config.database;
                        sql = "\n            insert into `" + dbname + "`.`" + (this.config.tablesPrefix + desc.tableName) + "`\n                (\n                    " + fields.join(",") + "\n                )\n                values\n                (\n                    " + values.join(",") + "\n                );\n        ";
                        return [4 /*yield*/, this.query(sql)];
                    case 1:
                        ret = _a.sent();
                        data[desc.primary] = ret.insertId;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * 创建对应的连接池
     */
    MysqlConnectionManager.prototype.start = function () {
        this.pool = mysql.createPool({
            host: this.config.host,
            user: this.config.username,
            password: this.config.password,
            database: this.config.database,
            port: this.config.port,
        });
    };
    MysqlConnectionManager.prototype.query = function (sql) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                    return;
                }
                connection.query(sql, function (err, vals, fields) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(vals);
                });
            });
        });
    };
    return MysqlConnectionManager;
}());
exports.MysqlConnectionManager = MysqlConnectionManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcml2ZXIvbXlzcWwvbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSw2QkFBK0I7QUFPL0I7SUF1SEksZ0NBQW1CLE1BQW1CO1FBQW5CLFdBQU0sR0FBTixNQUFNLENBQWE7SUFDdEMsQ0FBQztJQXRITywyQ0FBVSxHQUFsQixVQUFzQixXQUEyQixFQUFFLElBQXVCO1FBQ3RFLElBQUksTUFBTSxHQUFhLEVBQUUsQ0FBQztRQUMxQixXQUFXO1FBQ1gsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hELEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBQ0QsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDO1FBQzNCLENBQUM7UUFDRCxVQUFVO1FBQ1YsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDdEMsQ0FBQztZQUNELE9BQU8sV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUMxQixD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