"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var x_1 = require("./x");
//对外封装常用的方法
/**
 * 得到一个连接
 */
function getConnection(type) {
    if (type === void 0) { type = 'default'; }
    return x_1.X.getConnection(type);
}
exports.getConnection = getConnection;
/**
 * 判断是否存在这个数据库连接
 * @param type
 */
function hasConnection(type) {
    if (type === void 0) { type = 'default'; }
    return x_1.X.hasConnection(type);
}
exports.hasConnection = hasConnection;
function getEntityManager() {
    return x_1.X;
}
exports.getEntityManager = getEntityManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSx5QkFBd0I7QUFFeEIsV0FBVztBQUdYOztHQUVHO0FBQ0gsdUJBQThCLElBQWdCO0lBQWhCLHFCQUFBLEVBQUEsZ0JBQWdCO0lBQzFDLE1BQU0sQ0FBQyxLQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFGRCxzQ0FFQztBQUVEOzs7R0FHRztBQUNILHVCQUE4QixJQUFnQjtJQUFoQixxQkFBQSxFQUFBLGdCQUFnQjtJQUMxQyxNQUFNLENBQUMsS0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRkQsc0NBRUM7QUFFRDtJQUNJLE1BQU0sQ0FBQyxLQUFDLENBQUM7QUFDYixDQUFDO0FBRkQsNENBRUMifQ==