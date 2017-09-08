"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 备注：
 *  该类存在只为了兼容旧项目中的typeorm，除此之外没有任何意义
 */
var EntityManager = (function () {
    function EntityManager() {
    }
    EntityManager.getRepository = function () {
    };
    EntityManager.getInstance = function (name) {
        if (name === void 0) { name = 'default'; }
        if (!EntityManager.instance[name]) {
            return undefined;
        }
        return EntityManager.instance[name];
    };
    return EntityManager;
}());
exports.EntityManager = EntityManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5X21hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZW50aXR5X21hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7O0dBR0c7QUFDSDtJQUFBO0lBZ0JBLENBQUM7SUFYVSwyQkFBYSxHQUFwQjtJQUVBLENBQUM7SUFHTSx5QkFBVyxHQUFsQixVQUFtQixJQUFnQjtRQUFoQixxQkFBQSxFQUFBLGdCQUFnQjtRQUMvQixFQUFFLENBQUEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDckIsQ0FBQztRQUNELE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksc0NBQWEifQ==