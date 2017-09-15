import { Entity, EntityDescirption, EntityMap, InitEntityDescirption } from './XEntity';

export class test<T>{
    static cubi<T>(a: new () => T, b: A<T>): void {

    }

}


interface LinkOption<T> {
    from?: (item: any) => any,
    to: (item: T) => any,
    reverse?: (item: T) => any
}
// export function OneToMany(proto : Object,key : string) : void;
/**
 * 因为反向链接存在的缘故，这个方法没用了
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

function makeFactory(callback: Function | undefined) {
    if (!callback) {
        return null;
    }
    var proxy = new Proxy({}, {
        get: (obj, key) => {
            return key;
        }
    });
    return callback(proxy);
}

export function ManyToOne<T>(
    entity: { new(): T },
    // link : (item : T) => any
    option: LinkOption<T>
    // fromKey : (item : T) => any,
    // toKey : (item : T) => any,
    // rLink : (item : T) => any
    // targetKey: string, fromKey: string
): Function {
    return function (proto: Object, key: string) {
        console.log(option)
        var fromKey = makeFactory(option.from) || key;
        var toKey = makeFactory(option.to);
        if (!toKey) {
            throw new Error("没有找到to");
        }
        var info: EntityDescirption = EntityMap.get(proto.constructor.name) || InitEntityDescirption();
        info.external[key] = {
            entity: entity.name,
            fromKey: fromKey,
            toKey: toKey,
            field: key,
            // key: linkKey,
            type: "nv1",
        };
        EntityMap.set(proto.constructor.name, info);
        //如果有反向关联，给反向表追加连接
        var reverse = makeFactory(option.reverse);
        if (reverse) {
            var info: EntityDescirption = EntityMap.get(entity.name) || InitEntityDescirption();
            info.external[reverse] = {
                entity: proto.constructor.name,
                fromKey: toKey,
                toKey: fromKey,
                field: reverse,
                // key: linkKey,
                type: "1vn",
            };
            EntityMap.set(entity.name, info);
        }
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