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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0Esa0RBQWdFO0FBRWhFLHVDQUF1QztBQUd2Qzs7R0FFRztBQUVILG1CQUEwQixPQUFrQztJQUN4RCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQ3hCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxTQUFTO0lBQ1QsSUFBSSxRQUFRLEdBQW1CLEVBQUUsQ0FBQztJQUNsQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtRQUNsQixJQUFJLE9BQW9CLENBQUM7UUFDekIsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxPQUFPO2dCQUNSLE9BQU8sR0FBRyxJQUFJLGdDQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QyxLQUFLLENBQUM7WUFFVjtnQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckQsQ0FBQztRQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBZ0IsT0FBTyxFQUFFLE1BQU07Ozs7Z0NBQ3JELHFCQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBQTs7NEJBQXJCLFNBQXFCLENBQUM7NEJBQ3RCLG9CQUFTLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQzs0QkFDcEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7OztTQUNwQixDQUFDLENBQUMsQ0FBQTtJQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0gsV0FBVztJQUNYLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUE3QkQsOEJBNkJDO0FBRUQ7O0dBRUc7QUFDSCx1QkFBOEIsSUFBZ0I7SUFBaEIscUJBQUEsRUFBQSxnQkFBZ0I7SUFDMUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxvQkFBUyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztBQUNoRixDQUFDO0FBRkQsc0NBRUM7QUFFRDs7O0dBR0c7QUFDSCx1QkFBOEIsSUFBZ0I7SUFBaEIscUJBQUEsRUFBQSxnQkFBZ0I7SUFDMUMsTUFBTSxDQUFDLG9CQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUZELHNDQUVDO0FBRUQ7O0dBRUc7QUFDSDtBQUVBLENBQUM7QUFGRCw0Q0FFQyJ9