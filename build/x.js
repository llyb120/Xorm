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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBV0EsSUFBSSxRQUFRLEdBQStDLElBQUksT0FBTyxFQUFFLENBQUM7QUFFekU7OztHQUdHO0FBQ0gsV0FBeUIsS0FBdUI7SUFDNUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUM7SUFDcEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFDO1FBQ3RCLEdBQUcsRUFBRyxVQUFDLEdBQVMsRUFBQyxHQUFTLEVBQUMsR0FBUztZQUNoQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDeEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNuQixDQUFDO0tBQ0osQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUM7UUFDZixPQUFPLEVBQUcsRUFDVDtLQUNKLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQWJELGNBYUMifQ==