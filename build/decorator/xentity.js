"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = require("../constant");
function XEntity(first) {
    var type = 'default';
    var final = function (target) {
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
//# sourceMappingURL=xentity.js.map