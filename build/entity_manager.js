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
//# sourceMappingURL=entity_manager.js.map