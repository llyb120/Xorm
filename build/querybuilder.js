"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * 为了兼容typeorm而写，实际可以抛弃这个做查询
 */
var QueryBuilder = (function () {
    function QueryBuilder(factory, alias) {
        this.factory = factory;
        this.alias = alias;
    }
    QueryBuilder.prototype.andWhere = function (condition, replacement) {
        return this;
    };
    QueryBuilder.prototype.orWhere = function (condition, replacement) {
        return this;
    };
    QueryBuilder.prototype.where = function (condition, replacement) {
        return this;
    };
    QueryBuilder.prototype.getCount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    QueryBuilder.prototype.getMany = function () {
    };
    QueryBuilder.prototype.getManyAndCount = function () {
    };
    QueryBuilder.prototype.getOne = function () {
    };
    QueryBuilder.prototype.getSql = function () {
    };
    return QueryBuilder;
}());
exports.QueryBuilder = QueryBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlidWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3F1ZXJ5YnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTs7R0FFRztBQUNIO0lBQ0ksc0JBQ1ksT0FBcUIsRUFDckIsS0FBYTtRQURiLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUd6QixDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLFNBQWlCLEVBQUUsV0FBbUI7UUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFRLFNBQWlCLEVBQUUsV0FBbUI7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsNEJBQUssR0FBTCxVQUFNLFNBQWlCLEVBQUUsV0FBbUI7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUssK0JBQVEsR0FBZDs7Ozs7O0tBRUM7SUFFRCw4QkFBTyxHQUFQO0lBRUEsQ0FBQztJQUVELHNDQUFlLEdBQWY7SUFFQSxDQUFDO0lBRUQsNkJBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCw2QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQztBQXZDWSxvQ0FBWSJ9