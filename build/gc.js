"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 垃圾回收器，负责回收被监视的对象
 * 回收逻辑
 *  1.当对象被监视的时候，对象被放入a容器，
 *  2.30秒后，被标记的对象被放入b容器，待清除
 *  3.此时如果b容器发生变动，对象仍旧回a容器
 *  4.30秒后，如果b容器内的元素不再发生任何变动，则清除b容器内所有的引用，回收系统资源
 */
const GC_STEP_TIME = 5000;
class GC {
    constructor() {
        this.boxA = new WeakMap();
        this.boxB = new WeakMap();
    }
    start() {
        setInterval(() => {
            //清空所有B容器的元素
            // this.boxB = new WeakMap();
            // for (const [key, val] of this.boxB) {
            // this.boxB.delete(key);
            // }
            //将容器A的东西全部放入容器B
            this.boxB = this.boxA;
            this.boxA = new WeakMap();
            // console.log("容器A大小", this.boxA.size);
            // console.log("容器B大小", this.boxB.size);
            // console.log(this.boxB)
        }, GC_STEP_TIME);
    }
    addObserveObject(obj) {
        var watching = {
            changed: {}
        };
        var proxy = new Proxy(obj, {
            set: (obj, key, val) => {
                watching.changed[key] = true;
                //如果这时候元素在B容器，那么放回A容器
                if (this.boxB.has(proxy)) {
                    this.boxB.delete(proxy);
                    this.boxA.set(proxy, watching);
                }
                else if (!this.boxA.has(proxy)) {
                    this.boxA.set(proxy, watching);
                }
                return obj[key] = val;
            }
        });
        //首先放入容器A
        this.boxA.set(proxy, watching);
        return proxy;
    }
    getChanged(obj) {
        var val = this.boxA.get(obj) || this.boxB.get(obj);
        if (!val) {
            return null;
        }
        return Object.keys(val.changed);
    }
    clearChanged(obj) {
        var val = this.boxA.get(obj) || this.boxB.get(obj);
        if (!val) {
            return false;
        }
        val.changed = {};
    }
}
exports.ObservingObject = new GC;
/**
 * 开启
 */
// ObservingObject.start(); 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBRTFCO0lBQUE7UUFDWSxTQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNyQixTQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQTJEakMsQ0FBQztJQXpERyxLQUFLO1FBQ0QsV0FBVyxDQUFDO1lBQ1IsWUFBWTtZQUNaLDZCQUE2QjtZQUM3Qix3Q0FBd0M7WUFDeEMseUJBQXlCO1lBQ3pCLElBQUk7WUFDSixnQkFBZ0I7WUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUUxQix3Q0FBd0M7WUFDeEMsd0NBQXdDO1lBQ3hDLHlCQUF5QjtRQUU3QixDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEdBQVc7UUFDeEIsSUFBSSxRQUFRLEdBQUc7WUFDWCxPQUFPLEVBQUUsRUFDUjtTQUNKLENBQUE7UUFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFVLEVBQUU7WUFDOUIsR0FBRyxFQUFFLENBQUMsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRO2dCQUM3QixRQUFRLENBQUMsT0FBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDdEMscUJBQXFCO2dCQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDMUIsQ0FBQztTQUNKLENBQUMsQ0FBQztRQUNILFNBQVM7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQVc7UUFDbEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBVztRQUNwQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFDRCxHQUFHLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFHWSxRQUFBLGVBQWUsR0FBRyxJQUFJLEVBQUUsQ0FBQztBQUV0Qzs7R0FFRztBQUNILDJCQUEyQiJ9