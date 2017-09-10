(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("test/test.js", function(exports, require, module, __filename, __dirname){

"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var repository_1 = require("./../repository");
var entity_manager_1 = require("./../entity_manager");
var member_1 = require("./member");
var index_1 = require("../index");
var x_1 = require("../x");
index_1.XOrmStart({
    "name": "default",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "123",
    "database": "yoehi",
    // "autoSchemaSync": false,`
    // "entities": [
    // ],
    // "subscribers": [
    // 
    // ],
    // "migrations": [
    // 
    // ],
    "tablesPrefix": "ra_"
}).then(function (managers) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var c, a, b;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                c = x_1.X(member_1.Member);
                c.member_name = 'cubi';
                a = entity_manager_1.getEntityManager().getRepository(member_1.Member);
                a.findOne({
                    where: {
                        member_name: ['like', 'cubi'],
                        member_id: ['in', [10, 20, 30]],
                        member_add_time: ['>', new Date().getTime() / 1000],
                        and: {
                            member_id: 1,
                        },
                        or: {
                            member_name: "cubi"
                        }
                    },
                    order: {
                        member_id: "asc"
                    },
                    group: {
                        member_id: true
                    },
                    offset: 1,
                    limit: 10
                });
                return [2 /*return*/];
            case 1:
                _a.sent();
                console.log(c);
                return [2 /*return*/];
        }
    });
}); }).catch(function (e) {
    console.log(e);
    console.log("Fuck");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovd29yay9Yb3JtL3NyYy90ZXN0L3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQXFFQTs7O0FBckVBLDhDQUE2QztBQUM3QyxzREFBdUQ7QUFDdkQsbUNBQWtDO0FBQ2xDLGtDQUFvRDtBQUVwRCwwQkFBeUI7QUFFekIsaUJBQVMsQ0FDTDtJQUNJLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLE1BQU0sRUFBRSxPQUFPO0lBQ2YsTUFBTSxFQUFFLFdBQVc7SUFDbkIsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVLEVBQUUsTUFBTTtJQUNsQixVQUFVLEVBQUUsS0FBSztJQUNqQixVQUFVLEVBQUUsT0FBTztJQUNuQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLEtBQUs7SUFDTCxtQkFBbUI7SUFDbkIsR0FBRztJQUNILEtBQUs7SUFDTCxrQkFBa0I7SUFDbEIsR0FBRztJQUNILEtBQUs7SUFDTCxjQUFjLEVBQUUsS0FBSztDQUN4QixDQUNKLENBQUMsSUFBSSxDQUFDLFVBQU0sUUFBUTs7Ozs7Z0JBQ2IsQ0FBQyxHQUFHLEtBQUMsQ0FBQyxlQUFNLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7Z0JBQ25CLENBQUMsR0FBRyxpQ0FBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxlQUFNLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxDQUFDLE9BQU8sQ0FBQztvQkFDTixLQUFLLEVBQUU7d0JBQ0gsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQzt3QkFDN0IsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDL0IsZUFBZSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDO3dCQUNuRCxHQUFHLEVBQUU7NEJBQ0QsU0FBUyxFQUFFLENBQUM7eUJBRWY7d0JBQ0QsRUFBRSxFQUFFOzRCQUNBLFdBQVcsRUFBRSxNQUFNO3lCQUN0QjtxQkFDSjtvQkFDRCxLQUFLLEVBQUU7d0JBQ0gsU0FBUyxFQUFFLEtBQUs7cUJBQ25CO29CQUNELEtBQUssRUFBRTt3QkFDSCxTQUFTLEVBQUUsSUFBSTtxQkFDbEI7b0JBQ0QsTUFBTSxFQUFFLENBQUM7b0JBQ1QsS0FBSyxFQUFFLEVBQUU7aUJBQ1osQ0FBQyxDQUFBO2dCQUNGLHNCQUFPOztnQkFNUCxTQUFlLENBQUM7Z0JBRWhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7S0FDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUM7SUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN2QixDQUFDLENBQUMsQ0FBQSJ9
});
___scope___.file("repository.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var XEntity_1 = require("./decorator/XEntity");
var x_1 = require("./x");
var Repository = /** @class */ (function () {
    function Repository(factory) {
        this.factory = factory;
    }
    Repository.prototype.updateById = function (primaryKey, model) {
    };
    Repository.prototype.findOne = function (findOption) {
    };
    Repository.prototype.persist = function (entity) {
        return x_1.X.save(entity);
    };
    Repository.prototype.save = function (entity) {
        return x_1.X.save(entity);
    };
    /**
     * typeorm中没有这个方法
     */
    Repository.prototype.insert = function (data) {
        var desc = XEntity_1.EntityMap.get(this.factory.prototype);
        if (!desc) {
            return data;
        }
        return index_1.getConnection(desc.database).insert(data, desc);
    };
    return Repository;
}());
exports.Repository = Repository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovd29yay9Yb3JtL3NyYy9yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQXdDO0FBQ3hDLCtDQUFnRDtBQUNoRCx5QkFBd0I7QUFzQ3hCO0lBRUksb0JBQW1CLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7SUFFeEMsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBOEIsVUFBYSxFQUFFLEtBQVE7SUFFckQsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFDSSxVQUF5QjtJQUc3QixDQUFDO0lBSUQsNEJBQU8sR0FBUCxVQUFRLE1BQVc7UUFDZixNQUFNLENBQUMsS0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBSUQseUJBQUksR0FBSixVQUFLLE1BQVc7UUFDWixNQUFNLENBQUMsS0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCwyQkFBTSxHQUFOLFVBQU8sSUFBTztRQUNWLElBQUksSUFBSSxHQUFHLG1CQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsTUFBTSxDQUFDLHFCQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFTCxpQkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF2Q1ksZ0NBQVUifQ==
});
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var manager_1 = require("./driver/mysql/manager");
var constant_1 = require("./constant");
/**
 * 启动函数，调用该函数才会生效
 */
function XOrmStart(configs) {
    if (!configs) {
        throw new Error("Xorm 配置文件错误");
    }
    if (!Array.isArray(configs)) {
        configs = [configs];
    }
    //开始启动连接池
    var promises = [];
    configs.forEach(function (config) {
        var manager;
        switch (config.type) {
            case 'mysql':
                manager = new manager_1.MysqlConnectionManager(config);
                break;
            default:
                throw new Error("未被识别的数据库驱动：" + config.type);
        }
        constant_1.ORMCONFIG.CONFIGS[config.name] = config;
        promises.push(new Promise(function (resolve, reject) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, manager.start()];
                        case 1:
                            _a.sent();
                            constant_1.ORMCONFIG.CONNECTION_MANAGER[config.name] = manager;
                            resolve(manager);
                            return [2 /*return*/];
                    }
                });
            });
        }));
    });
    //返回对应的连接实例
    return Promise.all(promises);
}
exports.XOrmStart = XOrmStart;
/**
 * 得到一个连接
 */
function getConnection(type) {
    if (type === void 0) { type = 'default'; }
    return hasConnection(type) ? constant_1.ORMCONFIG.CONNECTION_MANAGER[type] : undefined;
}
exports.getConnection = getConnection;
/**
 * 判断是否存在这个数据库连接
 * @param type
 */
function hasConnection(type) {
    if (type === void 0) { type = 'default'; }
    return constant_1.ORMCONFIG.CONNECTION_MANAGER[type];
}
exports.hasConnection = hasConnection;
// /**
//  * 兼容typeorm
//  */
// export function getEntityManager(): EntityManager {
// } 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0U6L3dvcmsvWG9ybS9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0Esa0RBQWdFO0FBRWhFLHVDQUF1QztBQUd2Qzs7R0FFRztBQUVILG1CQUEwQixPQUFrQztJQUN4RCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQ3hCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxTQUFTO0lBQ1QsSUFBSSxRQUFRLEdBQW1CLEVBQUUsQ0FBQztJQUNsQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtRQUNsQixJQUFJLE9BQW9CLENBQUM7UUFDekIsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxPQUFPO2dCQUNSLE9BQU8sR0FBRyxJQUFJLGdDQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QyxLQUFLLENBQUM7WUFFVjtnQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckQsQ0FBQztRQUNELG9CQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7UUFFeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFnQixPQUFPLEVBQUUsTUFBTTs7OztnQ0FDckQscUJBQU0sT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFBOzs0QkFBckIsU0FBcUIsQ0FBQzs0QkFDdEIsb0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDOzRCQUNwRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7O1NBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDSCxXQUFXO0lBQ1gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsQ0FBQztBQTlCRCw4QkE4QkM7QUFFRDs7R0FFRztBQUNILHVCQUE4QixJQUFnQjtJQUFoQixxQkFBQSxFQUFBLGdCQUFnQjtJQUMxQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLG9CQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBQ2hGLENBQUM7QUFGRCxzQ0FFQztBQUVEOzs7R0FHRztBQUNILHVCQUE4QixJQUFnQjtJQUFoQixxQkFBQSxFQUFBLGdCQUFnQjtJQUMxQyxNQUFNLENBQUMsb0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRkQsc0NBRUM7QUFFRCxNQUFNO0FBQ04sZUFBZTtBQUNmLE1BQU07QUFDTixzREFBc0Q7QUFFdEQsSUFBSSJ9
});
___scope___.file("driver/mysql/manager.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mysql = require("mysql");
var MysqlConnectionManager = /** @class */ (function () {
    function MysqlConnectionManager(config) {
        this.config = config;
    }
    MysqlConnectionManager.prototype.insert = function (data, desc) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var fields, values, key, dbname, sql, ret, e_1;
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
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        console.log('start to insert');
                        return [4 /*yield*/, this.query(sql)];
                    case 2:
                        ret = _a.sent();
                        // var primaryVal = ret.insertId;
                        data[desc.primary] = ret.insertId;
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: 
                    // console.log("cubi")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovd29yay9Yb3JtL3NyYy9kcml2ZXIvbXlzcWwvbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSw2QkFBK0I7QUFLL0I7SUFxREksZ0NBQW1CLE1BQW1CO1FBQW5CLFdBQU0sR0FBTixNQUFNLENBQWE7SUFDdEMsQ0FBQztJQXBESyx1Q0FBTSxHQUFaLFVBQWdCLElBQU8sRUFBRSxJQUF1Qjs7Ozs7O3dCQUN4QyxNQUFNLEdBQUcsRUFBRSxFQUNYLE1BQU0sR0FBRyxFQUFFLENBQUM7d0JBQ2hCLEdBQUcsQ0FBQyxDQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNyQixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUM7Z0NBQUMsUUFBUSxDQUFDOzRCQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQUssR0FBRyxNQUFJLENBQUMsQ0FBQzs0QkFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0NBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ3hCLENBQUM7NEJBQ0QsSUFBSSxDQUFDLENBQUM7Z0NBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBRyxDQUFDLENBQUM7NEJBQ2xDLENBQUM7d0JBQ0wsQ0FBQzt3QkFDRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7d0JBRTlCLEdBQUcsR0FBRyxnQ0FDVSxNQUFNLFlBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsbURBRTdELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDRGQUloQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQ0FFN0IsQ0FBQzs7Ozt3QkFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7d0JBQ3BCLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUE7O3dCQUEzQixHQUFHLEdBQUcsU0FBcUI7d0JBQy9CLGlDQUFpQzt3QkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDOzs7O3dCQUlsQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDOzs7b0JBRXJCLHNCQUFzQjtvQkFDdEIsc0JBQU8sSUFBSSxFQUFDOzs7O0tBV2Y7SUFPRDs7T0FFRztJQUNILHNDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzFCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDOUIsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUM5QixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1NBRXpCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBSyxHQUFMLFVBQU0sR0FBVztRQUFqQixpQkFnQkM7UUFmRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixLQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFDLEdBQUcsRUFBRSxVQUFVO2dCQUNwQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDWixNQUFNLENBQUM7Z0JBQ1gsQ0FBQztnQkFDRCxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTTtvQkFDcEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7d0JBQ1gsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBdkZELElBdUZDO0FBdkZZLHdEQUFzQiJ9
});
___scope___.file("constant.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORMMODE;
(function (ORMMODE) {
    ORMMODE[ORMMODE["DESIGN"] = 0] = "DESIGN";
    ORMMODE[ORMMODE["PRODUCT"] = 1] = "PRODUCT";
})(ORMMODE = exports.ORMMODE || (exports.ORMMODE = {}));
exports.ORMCONFIG = {
    MODE: ORMMODE.DESIGN,
    MODELS: {},
    CONNECTION_MANAGER: {},
    CONFIGS: {}
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0U6L3dvcmsvWG9ybS9zcmMvY29uc3RhbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFZLE9BR1g7QUFIRCxXQUFZLE9BQU87SUFDZix5Q0FBTSxDQUFBO0lBQ04sMkNBQU8sQ0FBQTtBQUNYLENBQUMsRUFIVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFHbEI7QUFDVSxRQUFBLFNBQVMsR0FhcEI7SUFDSSxJQUFJLEVBQUcsT0FBTyxDQUFDLE1BQU07SUFDckIsTUFBTSxFQUFHLEVBQUU7SUFDWCxrQkFBa0IsRUFBRyxFQUVwQjtJQUNELE9BQU8sRUFBRyxFQUFFO0NBQ2YsQ0FBQSJ9
});
___scope___.file("decorator/XEntity.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = require("../constant");
exports.EntityMap = new Map();
function XEntity(first) {
    var type = 'default';
    var final = function (target) {
        var info;
        if (!exports.EntityMap.has(target.prototype)) {
            info = InitEntityDescirption();
            exports.EntityMap.set(target.prototype, info);
        }
        else {
            info = exports.EntityMap.get(target.prototype);
        }
        info.database = type;
        info.tableName = target.name.replace(/^[A-Z]/, function (a) {
            return a.toLowerCase();
        }).replace(/[A-Z][a-z]/g, function (a) {
            return '_' + a.toLowerCase();
        });
        console.log(123);
        console.log(exports.EntityMap);
        //大概会用到吧
        constant_1.ORMCONFIG.MODELS[type] = constant_1.ORMCONFIG.MODELS[type] || [];
        constant_1.ORMCONFIG.MODELS[type].push(target);
    };
    if (first) {
        if (typeof first == 'function') {
            return;
        }
        else {
            return final;
        }
    }
    return final;
    // function(target : Function){
    // ORMCONFIG[type] = ORMCONFIG[type]
    // }
}
exports.XEntity = XEntity;
function InitEntityDescirption() {
    return {
        fields: [],
        primary: 'id',
        database: 'default',
        tableName: ''
    };
}
exports.InitEntityDescirption = InitEntityDescirption;
// export type Entity<T> = ObjectType<T>; 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWEVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovd29yay9Yb3JtL3NyYy9kZWNvcmF0b3IvWEVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdDQUF3QztBQUk3QixRQUFBLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBNEIsQ0FBQztBQWUzRCxpQkFBd0IsS0FBMEM7SUFDOUQsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ3JCLElBQUksS0FBSyxHQUFHLFVBQVMsTUFBaUI7UUFDbEMsSUFBSSxJQUF3QixDQUFFO1FBQzlCLEVBQUUsQ0FBQSxDQUFDLENBQUMsaUJBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNqQyxJQUFJLEdBQUcscUJBQXFCLEVBQUUsQ0FBQztZQUMvQixpQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFDRCxJQUFJLENBQUEsQ0FBQztZQUNELElBQUksR0FBRyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFzQixDQUFDO1FBQ2hFLENBQUM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxVQUFTLENBQUM7WUFDcEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFDLFVBQVMsQ0FBQztZQUMvQixNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBUyxDQUFFLENBQUM7UUFFeEIsUUFBUTtRQUNSLG9CQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLG9CQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0RCxvQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFBO0lBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQztRQUNOLEVBQUUsQ0FBQSxDQUFDLE9BQU8sS0FBSyxJQUFJLFVBQVUsQ0FBQyxDQUFBLENBQUM7WUFFM0IsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDYiwrQkFBK0I7SUFDM0Isb0NBQW9DO0lBQ3hDLElBQUk7QUFDUixDQUFDO0FBckNELDBCQXFDQztBQVNEO0lBQ0ksTUFBTSxDQUFDO1FBQ0gsTUFBTSxFQUFHLEVBQUU7UUFDWCxPQUFPLEVBQUcsSUFBSTtRQUNkLFFBQVEsRUFBRyxTQUFTO1FBQ3BCLFNBQVMsRUFBRyxFQUFFO0tBQ2pCLENBQUE7QUFDTCxDQUFDO0FBUEQsc0RBT0M7QUFFRCx5Q0FBeUMifQ==
});
___scope___.file("x.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var XEntity_1 = require("./decorator/XEntity");
var entity_manager_1 = require("./entity_manager");
var watchMap = new WeakMap();
/**
 * 得到一个模型对象的实例，需要放入监视对象中
 * @param model
 */
function X(model) {
    var ins = new model;
    var watching = {
        changed: new Set()
    };
    var proxy = new Proxy(ins, {
        set: function (obj, key, val) {
            watching.changed.add(key);
            return obj[key] = val;
        }
    });
    watchMap.set(proxy, watching);
    return proxy;
}
exports.X = X;
(function (X) {
    function query() {
        return null;
    }
    X.query = query;
    function save(models) {
        if (Array.isArray(models)) {
            models = models;
            var ret = [];
            try {
                for (var models_1 = tslib_1.__values(models), models_1_1 = models_1.next(); !models_1_1.done; models_1_1 = models_1.next()) {
                    var model_1 = models_1_1.value;
                    ret.push(save(model_1));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (models_1_1 && !models_1_1.done && (_a = models_1.return)) _a.call(models_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return ret;
        }
        else {
            var model = models;
            var changed = X.getChanged(model);
            //查找描述信息
            var desc = XEntity_1.EntityMap.get(model.__proto__);
            if (!desc) {
                return model;
            }
            //没有发生任何改变的情况
            if (!changed || !changed.length) {
                return model;
            }
            //查询主键，如果没有的情况，默认为“ID"
            var constructor = model.__proto__.constructor;
            if (changed.includes(desc.primary) || !(desc.primary in model)) {
                var ret_1 = entity_manager_1.getEntityManager().getRepository(constructor).insert(model);
                return ret_1;
            }
            else {
                if (!(desc.primary in model)) {
                    return model;
                }
                entity_manager_1.getEntityManager().getRepository(constructor).updateById(model[desc.primary], model);
            }
            // var primary = 'id';
            // var struct;
            // if(struct = EntityMap.get(model.__proto__)){
            //     if(struct.primary){
            //         primary = struct.primary;
            //     }
            // }
            // //如果主键改变了，视为新插入，否则视为更新
            // if(changed.includes(primary)){
            // }
        }
        var e_1, _a;
    }
    X.save = save;
    function getChanged(model) {
        if (!model) {
            return [];
        }
        var changed = watchMap.get(model).changed;
        var ret = [];
        try {
            for (var _a = tslib_1.__values(changed.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var val = _b.value;
                ret.push(val);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return ret;
        var e_2, _c;
    }
    X.getChanged = getChanged;
})(X || (X = {}));
exports.X = X;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovd29yay9Yb3JtL3NyYy94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUFnRDtBQUVoRCxtREFBb0Q7QUFRcEQsSUFBSSxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQXlCLENBQUM7QUFFcEQ7OztHQUdHO0FBQ0gsV0FBa0IsS0FBdUI7SUFDckMsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUM7SUFDcEIsSUFBSSxRQUFRLEdBQUc7UUFDWCxPQUFPLEVBQUUsSUFBSSxHQUFHLEVBQVU7S0FDN0IsQ0FBQTtJQUNELElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUN2QixHQUFHLEVBQUUsVUFBQyxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVE7WUFDOUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDMUIsQ0FBQztLQUNKLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQXVGUSxjQUFDO0FBcEZWLFdBQVUsQ0FBQztJQUNQO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRmUsT0FBSyxRQUVwQixDQUFBO0lBaUJELGNBQXdCLE1BQVc7UUFDL0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxHQUFHLE1BQWEsQ0FBQztZQUN2QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7O2dCQUNiLEdBQUcsQ0FBQyxDQUFjLElBQUEsV0FBQSxpQkFBQSxNQUFNLENBQUEsOEJBQUE7b0JB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
});
___scope___.file("entity_manager.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var repository_1 = require("./repository");
/**
 * 备注：
 *  该类存在只为了兼容旧项目中的typeorm，除此之外没有任何意义
 */
// export class EntityManager {
//     static instance: {
//         [key: string]: EntityManager
//     };
//     static getRepository<T>(model: T) {
//     }
//     static getInstance(name = 'default'): EntityManager {
//         if (!EntityManager.instance[name]) {
//             return undefined;
//         }
//         return EntityManager.instance[name];
//     }
// }
var respInstance = new Map();
var funcs = {
    getRepository: function (model) {
        var resp = respInstance.get(model.prototype) || (function () {
            var resp = new repository_1.Repository(model);
            respInstance.set(model.prototype, resp);
            return resp;
        })();
        return resp;
    },
    getEntityManager: function () {
        return funcs;
    }
};
exports.default = funcs;
function getEntityManager() {
    return funcs;
}
exports.getEntityManager = getEntityManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5X21hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0U6L3dvcmsvWG9ybS9zcmMvZW50aXR5X21hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBMEM7QUFFMUM7OztHQUdHO0FBQ0gsK0JBQStCO0FBQy9CLHlCQUF5QjtBQUN6Qix1Q0FBdUM7QUFDdkMsU0FBUztBQUVULDBDQUEwQztBQUUxQyxRQUFRO0FBR1IsNERBQTREO0FBQzVELCtDQUErQztBQUMvQyxnQ0FBZ0M7QUFDaEMsWUFBWTtBQUNaLCtDQUErQztBQUMvQyxRQUFRO0FBQ1IsSUFBSTtBQUVKLElBQUksWUFBWSxHQUFHLElBQUksR0FBRyxFQUF1QixDQUFBO0FBRWpELElBQUksS0FBSyxHQUFHO0lBQ1IsYUFBYSxFQUFiLFVBQWlCLEtBQWtCO1FBQy9CLElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDN0MsSUFBSSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2hDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDTCxNQUFNLENBQUMsSUFBcUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0JBQWdCO1FBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBQ0osQ0FBQTtBQUVELGtCQUFlLEtBQUssQ0FBQztBQUVyQjtJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUZELDRDQUVDIn0=
});
___scope___.file("test/member.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var XEntity_1 = require("../decorator/XEntity");
var x_1 = require("../x");
var PrimaryColumn_1 = require("../decorator/PrimaryColumn");
var Member = /** @class */ (function () {
    function Member() {
    }
    Member.prototype.test = function () {
    };
    tslib_1.__decorate([
        PrimaryColumn_1.PrimaryColumn(),
        tslib_1.__metadata("design:type", Number)
    ], Member.prototype, "member_id", void 0);
    Member = tslib_1.__decorate([
        XEntity_1.XEntity()
    ], Member);
    return Member;
}());
exports.Member = Member;
var member = x_1.X(Member);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi93b3JrL1hvcm0vc3JjL3Rlc3QvbWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdEQUErQztBQUMvQywwQkFBeUI7QUFDekIsNERBQTJEO0FBRzNEO0lBQUE7SUFhQSxDQUFDO0lBSkcscUJBQUksR0FBSjtJQUVBLENBQUM7SUFSRDtRQURDLDZCQUFhLEVBQUU7OzZDQUNVO0lBSGpCLE1BQU07UUFEbEIsaUJBQU8sRUFBRTtPQUNHLE1BQU0sQ0FhbEI7SUFBRCxhQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksd0JBQU07QUFnQm5CLElBQUksTUFBTSxHQUFHLEtBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyJ9
});
___scope___.file("decorator/PrimaryColumn.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XEntity_1 = require("./XEntity");
function PrimaryColumn(column) {
    return function (target, key) {
        var info = XEntity_1.EntityMap.get(target) || XEntity_1.InitEntityDescirption();
        info.primary = key;
        XEntity_1.EntityMap.set(target, info);
    };
}
exports.PrimaryColumn = PrimaryColumn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbWFyeUNvbHVtbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovd29yay9Yb3JtL3NyYy9kZWNvcmF0b3IvUHJpbWFyeUNvbHVtbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFnRjtBQUVoRix1QkFBOEIsTUFBWTtJQUN0QyxNQUFNLENBQUMsVUFBVSxNQUFjLEVBQUUsR0FBVztRQUN4QyxJQUFJLElBQUksR0FBc0IsbUJBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksK0JBQXFCLEVBQUUsQ0FBQztRQUMvRSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixtQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQU5ELHNDQU1DIn0=
});
___scope___.file("connection.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Connection = /** @class */ (function () {
    function Connection() {
    }
    Connection.prototype.query = function (sql) {
    };
    return Connection;
}());
exports.Connection = Connection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovd29yay9Yb3JtL3NyYy9jb25uZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQU9BLENBQUM7SUFMRywwQkFBSyxHQUFMLFVBQU0sR0FBVztJQUVqQixDQUFDO0lBR0wsaUJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLGdDQUFVIn0=
});
___scope___.file("decorator/PrimaryGeneratedColumn.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrimaryColumn_1 = require("./PrimaryColumn");
function PrimaryGeneratedColumn(column) {
    return PrimaryColumn_1.PrimaryColumn(column);
}
exports.PrimaryGeneratedColumn = PrimaryGeneratedColumn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbWFyeUdlbmVyYXRlZENvbHVtbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovd29yay9Yb3JtL3NyYy9kZWNvcmF0b3IvUHJpbWFyeUdlbmVyYXRlZENvbHVtbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFnRDtBQUNoRCxnQ0FBdUMsTUFBWTtJQUMvQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRkQsd0RBRUMifQ==
});
___scope___.file("driver/driver.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi93b3JrL1hvcm0vc3JjL2RyaXZlci9kcml2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9
});
___scope___.file("header/config.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi93b3JrL1hvcm0vc3JjL2hlYWRlci9jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9
});
});
FuseBox.target = "universal"

FuseBox.import("default/test/test.js");
FuseBox.main("default/test/test.js");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((d||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(d){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!d&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=m[a];if(!s){if(d&&"electron"!==h.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),v=i(c),p=s.f[v];return!p&&v.indexOf("*")>-1&&(l=v),p||l||(v=t(c,"/","index.js"),p=s.f[v],p||(v=c+".js",p=s.f[v]),p||(p=s.f[c+".jsx"]),p||(v=c+"/index.jsx",p=s.f[v])),{file:p,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:v}}function s(e,r,n){if(void 0===n&&(n={}),!d)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);h.dynamic(a,o),r(h.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=g[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=m[t.pkgName];if(u){var p={};for(var g in u.f)a.test(g)&&(p[g]=c(t.pkgName+"/"+g));return p}}if(!i){var h="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return h?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var w=i.locals={},y=n(t.validPath);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return c(e,{pkg:_,path:y,v:t.versions})},d||!v.require.main?w.require.main={filename:"./",paths:[]}:w.require.main=v.require.main;var j=[w.module.exports,w.require,w.module,t.validPath,y,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),w.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof window&&window.navigator,v=d?window:global;d&&(v.global=window),e=d&&"undefined"==typeof __fbx__dnm__?e:module.exports;var p=d?window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};d||(v.require=require);var m=p.p=p.p||{},g=p.e=p.e||{},h=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){g[e]=g[e]||[],g[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=m[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=m.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(m[e])return n(m[e].s);var t=m[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=m,r.isBrowser=d,r.isServer=!d,r.plugins=[],r}();return d||(v.FuseBox=h),e.FuseBox=h}(this))