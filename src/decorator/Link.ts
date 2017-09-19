import { Entity, EntityDescirption, EntityMap, InitEntityDescirption } from './XEntity';

export interface LinkOption<T, K> {
    from?: { (item: T): any } | string,
    to: { (item: K): any } | string,
    reverse?: { (item: K): any } | string;
}


var factory: any = null;

export function makeFactory(callback: Function | undefined) {
    if (!callback) {
        return null;
    }
    factory = factory || new Proxy({}, {
        get: (obj, key) => {
            return key;
        }
    });
    return callback(factory);
}

export function ManyToOne<T, K>(
    fromEntity: { new(): T },
    toEntity: { new(): K },
    option: LinkOption<T, K>,
    many = true
): Function {
    return function (proto: Object, key: string) {
        console.log(option)
        var fromKey = (typeof option.from == 'function' ? makeFactory(option.from) : option.from) || key;
        var toKey = (typeof option.to == 'function' ? makeFactory(option.to) : option.to)
        if (!toKey) {
            throw new Error("没有找到to");
        }
        var info: EntityDescirption = EntityMap.get(proto.constructor.name) || InitEntityDescirption();
        info.external[key] = {
            entity: toEntity.name,
            fromKey: fromKey,
            toKey: toKey,
            field: key,
            // key: linkKey,
            type: many ? "nv1" : '1v1',
        };
        EntityMap.set(proto.constructor.name, info);
        //如果有反向关联，给反向表追加连接
        if (option.reverse) {
            var reverse = typeof option.reverse == 'function' ? makeFactory(option.reverse) : option.reverse;
            var info: EntityDescirption = EntityMap.get(toEntity.name) || InitEntityDescirption();
            info.external[reverse] = {
                entity: proto.constructor.name,
                fromKey: toKey,
                toKey: fromKey,
                field: reverse,
                // key: linkKey,
                type: many ? "1vn" : '1v1',
            };
            EntityMap.set(toEntity.name, info);
        }
    }

}


export function OneToOne<T, K>(
    fromEntity: { new(): T },
    toEntity: { new(): K },
    option: LinkOption<T, K>,
): Function {
    return ManyToOne(fromEntity, toEntity, option, true);
    

}
