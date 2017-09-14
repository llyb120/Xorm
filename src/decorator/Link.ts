import { Entity, EntityDescirption, EntityMap, InitEntityDescirption } from './XEntity';

// export function OneToMany(proto : Object,key : string) : void;
/**
 * 声明该元素关联的节点
 * @param entity 
 */
export function OneToMany<T>(entity: Entity<T>, linkKey: string): Function {
    return function (proto: Object, key: string) {
        var info: EntityDescirption = EntityMap.get(proto.constructor.name) || InitEntityDescirption();
        info.external[key] = {
            entity: entity,
            key: linkKey,
            type: "1vn"
        };
    }
}

export function ManyToOne<T>(entity: Entity<T>, linkKey: string): Function {
    return function (proto: Object, key: string) {
        var info: EntityDescirption = EntityMap.get(proto.constructor.name) || InitEntityDescirption();
        info.external[key] = {
            entity: entity,
            key: linkKey,
            type: "nv1"
        };
    }
}

export function OneToOne<T>(entity: Entity<T>, linkKey: string): Function {
    return function (proto: Object, key: string) {
        var info: EntityDescirption = EntityMap.get(proto.constructor.name) || InitEntityDescirption();
        info.external[key] = {
            entity: entity,
            key: linkKey,
            type: "1v1"
        };
    }
}