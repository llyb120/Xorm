import { EntityMap } from './decorator/XEntity';
import { ObjectType } from "./header/ObjectType";
import { getEntityManager } from "./entity_manager";


export interface IWatchedModel {
    changed: Set<string>
}


var watchMap = new WeakMap<Object, IWatchedModel>();

/**
 * 得到一个模型对象的实例，需要放入监视对象中
 * @param model 
 */
function X<Model>(model: { new(): Model }): Model {
    var ins = new model;
    var watching = {
        changed: new Set<string>()
    }
    var proxy = new Proxy(ins, {
        set: (obj: any, key: any, val: any) => {
            watching.changed.add(key);
            return obj[key] = val;
        }
    });
    watchMap.set(proxy, watching);
    return proxy;
}


namespace X {
    export function query() {
        return null;
    }


    /**
     * 保存一个实例
     */
    type Model<T> = { new(): T };
    /**
     * 保存多个实例
     * @param models 
     */
    export function save<T>(models: T[]): T[];
    /**
     * 保存单个实例
     * @param model 
     */
    export function save<T>(model: T): T;
    export function save<T>(models: any): any{
        if (Array.isArray(models)) {
            models = models as T[];
            var ret = [];
            for (let model of models) {
                ret.push(save(model));
            }
            return ret;
        }
        else {
            var model = <T>models;
            var changed = X.getChanged(model);
            //查找描述信息
            var desc = EntityMap.get(model.__proto__ as Object);
            if(!desc){
                return model;
            }
            //没有发生任何改变的情况
            if(!changed || !changed.length){
                return model;
            }
            //查询主键，如果没有的情况，默认为“ID"
            var constructor = model.__proto__.constructor as {
                new() : any
            } 
            if(changed.includes(desc.primary) || !(desc.primary in model)){
                let ret = getEntityManager().getRepository(constructor).insert(model);
                return ret;
            }
            else{
                if(!(desc.primary in model)){
                    return model;
                }
                getEntityManager().getRepository(constructor).updateById(model[desc.primary],model)
            }
            // var primary = 'id';
            // var struct;
            // if(struct = EntityMap.get(model.__proto__)){
            //     if(struct.primary){
            //         primary = struct.primary;
            //     }
            // }
            // //如果主键改变了，视为新插入，否则视为更新
            // if(changed.includes(primary)){

            // }
        }
    }


    export function getChanged(model: Object): string[] {
        if (!model) {
            return [];
        }
        var changed = (watchMap.get(model) as IWatchedModel).changed;
        var ret = [];
        for (const val of changed.values()) {
            ret.push(val);
        }
        return ret;

    }
}

export { X };