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
/**
 * 兼容typeorm
 */
function getEntityManager() {
}
exports.getEntityManager = getEntityManager;
//# sourceMappingURL=index.js.map