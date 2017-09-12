"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * 垃圾回收器，负责回收被监视的对象
 * 回收逻辑
 *  1.当对象被监视的时候，对象被放入a容器，
 *  2.30秒后，被标记的对象被放入b容器，待清除
 *  3.此时如果b容器发生变动，对象仍旧回a容器
 *  4.30秒后，如果b容器内的元素不再发生任何变动，则清除b容器内所有的引用，回收系统资源
 */
var GC_STEP_TIME = 30000;
var GC = (function () {
    function GC() {
        this.boxA = new Map();
        this.boxB = new Map();
    }
    GC.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            try {
                //清空所有B容器的元素
                for (var _a = tslib_1.__values(_this.boxB), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var _c = tslib_1.__read(_b.value, 2), key = _c[0], val = _c[1];
                    _this.boxB.delete(key);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
            //将容器A的东西全部放入容器B
            _this.boxB = _this.boxA;
            _this.boxA = new Map();
            console.log("容器A大小", _this.boxA.size);
            console.log("容器B大小", _this.boxB.size);
            var e_1, _d;
        }, GC_STEP_TIME);
    };
    GC.prototype.addObserveObject = function (obj) {
        var _this = this;
        var watching = {
            changed: {}
        };
        var proxy = new Proxy(obj, {
            set: function (obj, key, val) {
                watching.changed[key] = true;
                //如果这时候元素在B容器，那么放回A容器
                if (_this.boxB.has(proxy)) {
                    _this.boxB.delete(proxy);
                    _this.boxA.set(proxy, watching);
                }
                else if (!_this.boxA.has(proxy)) {
                    _this.boxA.set(proxy, watching);
                }
                return obj[key] = val;
            }
        });
        //首先放入容器A
        this.boxA.set(proxy, watching);
        return proxy;
    };
    GC.prototype.getChanged = function (obj) {
        var val = this.boxA.get(obj) || this.boxB.get(obj);
        if (!val) {
            return [];
        }
        return Object.keys(val.changed);
    };
    return GC;
}());
exports.ObservingObject = new GC;
/**
 * 开启
 */
exports.ObservingObject.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7R0FPRztBQUNILElBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQztBQUUzQjtJQUFBO1FBQ1csU0FBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDakIsU0FBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFpRDVCLENBQUM7SUEvQ0csa0JBQUssR0FBTDtRQUFBLGlCQWNDO1FBYkcsV0FBVyxDQUFDOztnQkFDUixZQUFZO2dCQUNaLEdBQUcsQ0FBQyxDQUFxQixJQUFBLEtBQUEsaUJBQUEsS0FBSSxDQUFDLElBQUksQ0FBQSxnQkFBQTtvQkFBdkIsSUFBQSxnQ0FBVSxFQUFULFdBQUcsRUFBRSxXQUFHO29CQUNoQixLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDekI7Ozs7Ozs7OztZQUNELGdCQUFnQjtZQUNoQixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUM7WUFDdEIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFFekMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCw2QkFBZ0IsR0FBaEIsVUFBaUIsR0FBVztRQUE1QixpQkFzQkM7UUFyQkcsSUFBSSxRQUFRLEdBQUc7WUFDWCxPQUFPLEVBQUUsRUFDUjtTQUNKLENBQUE7UUFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFVLEVBQUU7WUFDOUIsR0FBRyxFQUFFLFVBQUMsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRO2dCQUM3QixRQUFRLENBQUMsT0FBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDdEMscUJBQXFCO2dCQUNyQixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUMzQixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDMUIsQ0FBQztTQUNKLENBQUMsQ0FBQztRQUNILFNBQVM7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsdUJBQVUsR0FBVixVQUFXLEdBQVc7UUFDbEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDO1lBQ0wsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNMLFNBQUM7QUFBRCxDQUFDLEFBbkRELElBbURDO0FBR1ksUUFBQSxlQUFlLEdBQUcsSUFBSSxFQUFFLENBQUM7QUFFdEM7O0dBRUc7QUFDSCx1QkFBZSxDQUFDLEtBQUssRUFBRSxDQUFDIn0=