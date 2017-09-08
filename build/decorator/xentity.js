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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNvcmF0b3IveGVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHdDQUF3QztBQWV4QyxpQkFBd0IsS0FBMEM7SUFDOUQsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ3JCLElBQUksS0FBSyxHQUFHLFVBQVMsTUFBaUI7UUFDbEMsb0JBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsb0JBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RELG9CQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUE7SUFDRCxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO1FBQ04sRUFBRSxDQUFBLENBQUMsT0FBTyxLQUFLLElBQUksVUFBVSxDQUFDLENBQUEsQ0FBQztZQUUzQixNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNiLCtCQUErQjtJQUMzQixvQ0FBb0M7SUFDeEMsSUFBSTtBQUNSLENBQUM7QUFuQkQsMEJBbUJDIn0=