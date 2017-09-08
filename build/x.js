"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var watchMap = new WeakMap();
/**
 * 得到一个模型对象的实例，需要放入监视对象中
 * @param model
 */
function X(model) {
    var ins = new model;
    var proxy = new Proxy(ins, {
        set: function (obj, key, val) {
            watchMap.get(proxy).changed[key] = true;
            obj[key] = val;
        }
    });
    watchMap.set(proxy, {
        changed: {}
    });
    return proxy;
}
exports.X = X;
//# sourceMappingURL=x.js.map