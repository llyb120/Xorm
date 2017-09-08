
import { ObjectType } from "./header/ObjectType";


export interface IWatchedModel{
    changed : {
        [key in keyof any]? : boolean;
    }
}


var watchMap : WeakMap<{new() : Function},IWatchedModel> = new WeakMap();

/**
 * 得到一个模型对象的实例，需要放入监视对象中
 * @param model 
 */
export function X<Model>(model : {new() : Model}) : Model{
    var ins = new model;
    var proxy = new Proxy(ins,{
        set : (obj : any,key : any,val : any) => {
            watchMap.get(proxy).changed[key] = true;
            obj[key] = val;
        } 
    });
    watchMap.set(proxy,{
        changed : {
        }
    });
    return proxy;
}


namespace X{

}