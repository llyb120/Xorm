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
    private boxA = new Map();
    private boxB = new Map();

    start() {
        setInterval(() => {
            //清空所有B容器的元素
            for (const [key, val] of this.boxB) {
                this.boxB.delete(key);
            }
            //将容器A的东西全部放入容器B
            this.boxB = this.boxA;
            this.boxA = new Map();

            // console.log("容器A大小", this.boxA.size);
            // console.log("容器B大小", this.boxB.size);
            // console.log(this.boxB)
 
        }, GC_STEP_TIME);
    }

    addObserveObject(obj: Object) {
        var watching = {
            changed: {
            }
        }
        var proxy = new Proxy(obj as any, {
            set: (obj: any, key: any, val: any) => {
                (watching.changed as any)[key] = true;
                //如果这时候元素在B容器，那么放回A容器
                if (this.boxB.has(proxy)) {
                    this.boxB.delete(proxy);
                    this.boxA.set(proxy, watching);
                }
                else if(!this.boxA.has(proxy)){
                    this.boxA.set(proxy,watching);
                }
                return obj[key] = val;
            }
        });
        //首先放入容器A
        this.boxA.set(proxy, watching);
        return proxy;
    }

    getChanged(obj: Object) {
        var val = this.boxA.get(obj) || this.boxB.get(obj);
        if(!val){
            return null;
        }
        return Object.keys(val.changed);
    }

    clearChanged(obj : Object){
        var val = this.boxA.get(obj) || this.boxB.get(obj);
        if(!val){
            return false;
        }
        val.changed = {};
    }
}


export const ObservingObject = new GC;

/**
 * 开启
 */
// ObservingObject.start();