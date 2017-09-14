import { XEntityConfig } from '../header/config';
import { ORMCONFIG } from '../constant';
import { ObjectType } from "../header/ObjectType";
import { ObservingObject } from '../gc';


export var EntityMap = new Map<string, EntityDescirption>();

/**
 * 默认的
 * @param target 
 */
export function XEntity(target: Function): void;
/**
 * 归属于哪个数据库，默认为default
 * @param from 
 */
export function XEntity(from?: string): Function;

export function XEntity(config?: XEntityConfig): Function;

export function XEntity(first?: Function | string | XEntityConfig): any {
    var type = 'default';
    var final = function (target: Function) {
        var info: EntityDescirption;
        if (!EntityMap.has(target.name)) {
            info = InitEntityDescirption();
            EntityMap.set(target.name, info);
        }
        else {
            info = EntityMap.get(target.name) as EntityDescirption;
        }
        info.entity = target;
        info.database = type;
        info.tableName = target.name.replace(/^[A-Z]/, function (a) {
            return a.toLowerCase();
        }).replace(/[A-Z][a-z]/g, function (a) {
            return '_' + a.toLowerCase();
        });

        //大概会用到吧
        ORMCONFIG.MODELS[type] = ORMCONFIG.MODELS[type] || [];
        ORMCONFIG.MODELS[type].push(target);

        // var newClass =  class extends target.prototype.constructor {
        //     constructor() {
        //         super();
        //         return ObservingObject.addObserveObject(this);
        //     }
        // }
        // //更改名字，偷天换日
        // Object.defineProperty(newClass,'name',{
        //     value : target.name
        // });
        // return newClass;
        // newClass.name = target.name;
        // console.log(newClass)

        // return function(){
        //    
        // }
    }
    if (first) {
        if (typeof first == 'function') {
            return final(first);
        }
        else {
            return final;
        }
    }
    return final;
}


export interface IWatchedModel {
    changed: Set<string>
}

export var EntityWatchingMap = new WeakMap<Object, IWatchedModel>();


export interface EntityDescirption {
    entity: Function,
    fields: any[],
    primary: string,
    database: string;
    tableName: string;
    external: {
        [key: string]: {
            entity: string,
            field: string,
            fromKey: string,
            toKey: string,
            type: "1v1" | "1vn" | "nv1"
        }
    }
}

export function InitEntityDescirption(): EntityDescirption {
    return {
        entity: () => null,
        fields: [],
        primary: 'id',
        database: 'default',
        tableName: '',
        external: {}
    }
}

// export function ObserveObjectChanged(obj : any){
//     var watching = {
//         changed: new Set<string>()
//     }
//     var proxy = new Proxy(obj as any, {
//         set: (obj: any, key: any, val: any) => {
//             watching.changed.add(key);
//             return obj[key] = val;
//         }
//     });
//     EntityWatchingMap.set(proxy, watching);
//     return proxy;
// }

export type Entity<T> = { new(): T };

