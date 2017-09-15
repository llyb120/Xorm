"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
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
__export(require("./constant"));
__export(require("./gc"));
__export(require("./repository"));
__export(require("./querybuilder"));
__export(require("./x"));
__export(require("./driver/mysql/manager"));
__export(require("./decorator/XEntity"));
__export(require("./decorator/PrimaryColumn"));
__export(require("./decorator/XEntity"));
__export(require("./decorator/Link"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSwyQkFBd0I7QUFFeEIsV0FBVztBQUdYOztHQUVHO0FBQ0gsdUJBQThCLElBQUksR0FBRyxTQUFTO0lBQzFDLE1BQU0sQ0FBQyxLQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFGRCxzQ0FFQztBQUVEOzs7R0FHRztBQUNILHVCQUE4QixJQUFJLEdBQUcsU0FBUztJQUMxQyxNQUFNLENBQUMsS0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRkQsc0NBRUM7QUFFRDtJQUNJLE1BQU0sQ0FBQyxLQUFDLENBQUM7QUFDYixDQUFDO0FBRkQsNENBRUM7QUFFRCxnQ0FBMkI7QUFDM0IsMEJBQXFCO0FBQ3JCLGtDQUE2QjtBQUM3QixvQ0FBK0I7QUFDL0IseUJBQW9CO0FBSXBCLDRDQUF1QztBQUN2Qyx5Q0FBb0M7QUFDcEMsK0NBQTBDO0FBQzFDLHlDQUFvQztBQUNwQyxzQ0FBZ0MifQ==