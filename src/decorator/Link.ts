import { Entity, EntityDescirption, EntityMap, InitEntityDescirption } from './XEntity';

export class test<T>{
    static cubi<T>(a : new() => T,b : A<T>) : void {

    }

}


// export function OneToMany(proto : Object,key : string) : void;
/**
 * 声明该元素关联的节点
 * @param entity 
 */
export function OneToMany<T>(
    entity: Entity<T>,
    targetKey: string,
    fromKey?: string,
    // toKey: string
): Function {
    console.log(arguments); 
    return function (proto: Object, key: string) {
        console.log(123)
        var info: EntityDescirption = EntityMap.get(proto.constructor.name) || InitEntityDescirption();
        var sp = targetKey.split(".").map(item => item.trim());
        info.external[key] = {
            entity: sp[0],
            fromKey: fromKey || key,
            toKey: sp[1],
            type: "1vn",
            field: key
        };
        EntityMap.set(proto.constructor.name, info);
    }
}

export function ManyToOne<T>(
    entity: (type?:any) => (new() => T), 
    fromKey : (item : T) => any,
    toKey : (item : T) => any,
    // rLink : (item : T) => any
    // targetKey: string, fromKey: string
): Function {
    return function(){

    }
    // console.log(arguments);
    // return function (proto: Object, key: string) {
    //     var info: EntityDescirption = EntityMap.get(proto.constructor.name) || InitEntityDescirption();
    //     var sp = targetKey.split(".").map(item => item.trim());
    //     info.external[key] = {
    //         entity: sp[0],
    //         fromKey: fromKey,
    //         toKey: sp[1],
    //         field: key,
    //         // key: linkKey,
    //         type: "nv1"
    //     };
    //     EntityMap.set(proto.constructor.name, info);
    // }
}

export function OneToOne<T>(
    entity: Entity<T>,
    targetKey: string,
    fromKey: string
    // toKey: string
): Function {
    console.log(arguments);
    return function (proto: Object, key: string) {
        var info: EntityDescirption = EntityMap.get(proto.constructor.name) || InitEntityDescirption();
        var sp = targetKey.split(".").map(item => item.trim());
        info.external[key] = {
            entity: sp[0],
            fromKey: fromKey,
            toKey: sp[1],
            field: key,
            // key: linkKey,
            type: "1v1"
        };
        EntityMap.set(proto.constructor.name, info);
    }
}