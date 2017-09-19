"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const x_1 = require("./x");
//对外封装常用的方法
/**
 * 得到一个连接
 */
function getConnection(type = 'default') {
    return x_1.X.getConnection(type);
}
exports.getConnection = getConnection;
/**
 * 判断是否存在这个数据库连接
 * @param type
 */
function hasConnection(type = 'default') {
    return x_1.X.hasConnection(type);
}
exports.hasConnection = hasConnection;
function getEntityManager() {
    return x_1.X;
}
exports.getEntityManager = getEntityManager;
tslib_1.__exportStar(require("./constant"), exports);
tslib_1.__exportStar(require("./gc"), exports);
tslib_1.__exportStar(require("./repository"), exports);
// export * from "./querybuilder";
tslib_1.__exportStar(require("./x"), exports);
tslib_1.__exportStar(require("./driver/mysql/manager"), exports);
// export * from "./decorator/XEntity";
// export * from "./decorator/PrimaryColumn";
tslib_1.__exportStar(require("./decorator/XEntity"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsMkJBQXdCO0FBQ3hCLFdBQVc7QUFHWDs7R0FFRztBQUNILHVCQUE4QixJQUFJLEdBQUcsU0FBUztJQUMxQyxNQUFNLENBQUMsS0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRkQsc0NBRUM7QUFFRDs7O0dBR0c7QUFDSCx1QkFBOEIsSUFBSSxHQUFHLFNBQVM7SUFDMUMsTUFBTSxDQUFDLEtBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUZELHNDQUVDO0FBRUQ7SUFDSSxNQUFNLENBQUMsS0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUZELDRDQUVDO0FBRUQscURBQTJCO0FBQzNCLCtDQUFxQjtBQUNyQix1REFBNkI7QUFDN0Isa0NBQWtDO0FBQ2xDLDhDQUFvQjtBQUlwQixpRUFBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLDZDQUE2QztBQUM3Qyw4REFBb0MifQ==