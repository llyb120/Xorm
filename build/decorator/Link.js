"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XEntity_1 = require("./XEntity");
// export function OneToMany(proto : Object,key : string) : void;
/**
 * 因为反向链接存在的缘故，这个方法没用了
 * 声明该元素关联的节点
 * @param entity
 */
function OneToMany(entity, targetKey, fromKey) {
    console.log(arguments);
    return function (proto, key) {
        console.log(123);
        var info = XEntity_1.EntityMap.get(proto.constructor.name) || XEntity_1.InitEntityDescirption();
        var sp = targetKey.split(".").map(item => item.trim());
        info.external[key] = {
            entity: sp[0],
            fromKey: fromKey || key,
            toKey: sp[1],
            type: "1vn",
            field: key
        };
        XEntity_1.EntityMap.set(proto.constructor.name, info);
    };
}
exports.OneToMany = OneToMany;
function makeFactory(callback) {
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
function ManyToOne(entity, 
    // link : (item : T) => any
    option
    // fromKey : (item : T) => any,
    // toKey : (item : T) => any,
    // rLink : (item : T) => any
    // targetKey: string, fromKey: string
) {
    return function (proto, key) {
        console.log(option);
        var fromKey = makeFactory(option.from) || key;
        var toKey = makeFactory(option.to);
        if (!toKey) {
            throw new Error("没有找到to");
        }
        var info = XEntity_1.EntityMap.get(proto.constructor.name) || XEntity_1.InitEntityDescirption();
        info.external[key] = {
            entity: entity.name,
            fromKey: fromKey,
            toKey: toKey,
            field: key,
            // key: linkKey,
            type: "nv1",
        };
        XEntity_1.EntityMap.set(proto.constructor.name, info);
        //如果有反向关联，给反向表追加连接
        var reverse = makeFactory(option.reverse);
        if (reverse) {
            var info = XEntity_1.EntityMap.get(entity.name) || XEntity_1.InitEntityDescirption();
            info.external[reverse] = {
                entity: proto.constructor.name,
                fromKey: toKey,
                toKey: fromKey,
                field: reverse,
                // key: linkKey,
                type: "1vn",
            };
            XEntity_1.EntityMap.set(entity.name, info);
        }
    };
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
exports.ManyToOne = ManyToOne;
function OneToOne(entity, 
    // link : (item : T) => any
    option
    // fromKey : (item : T) => any,
    // toKey : (item : T) => any,
    // rLink : (item : T) => any
    // targetKey: string, fromKey: string
) {
    return function (proto, key) {
        console.log(option);
        var fromKey = makeFactory(option.from) || key;
        var toKey = makeFactory(option.to);
        if (!toKey) {
            throw new Error("没有找到to");
        }
        var info = XEntity_1.EntityMap.get(proto.constructor.name) || XEntity_1.InitEntityDescirption();
        info.external[key] = {
            entity: entity.name,
            fromKey: fromKey,
            toKey: toKey,
            field: key,
            // key: linkKey,
            type: "1v1",
        };
        XEntity_1.EntityMap.set(proto.constructor.name, info);
        //如果有反向关联，给反向表追加连接
        var reverse = makeFactory(option.reverse);
        if (reverse) {
            var info = XEntity_1.EntityMap.get(entity.name) || XEntity_1.InitEntityDescirption();
            info.external[reverse] = {
                entity: proto.constructor.name,
                fromKey: toKey,
                toKey: fromKey,
                field: reverse,
                // key: linkKey,
                type: "1v1",
            };
            XEntity_1.EntityMap.set(entity.name, info);
        }
    };
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
exports.OneToOne = OneToOne;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNvcmF0b3IvTGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUF3RjtBQU94RixpRUFBaUU7QUFDakU7Ozs7R0FJRztBQUNILG1CQUNJLE1BQWlCLEVBRWpCLFNBQWlCLEVBQ2pCLE9BQWdCO0lBR2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkIsTUFBTSxDQUFDLFVBQVUsS0FBYSxFQUFFLEdBQVc7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQixJQUFJLElBQUksR0FBc0IsbUJBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBcUIsRUFBRSxDQUFDO1FBQy9GLElBQUksRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHO1lBQ2pCLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2IsT0FBTyxFQUFFLE9BQU8sSUFBSSxHQUFHO1lBQ3ZCLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsR0FBRztTQUNiLENBQUM7UUFDRixtQkFBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUE7QUFDTCxDQUFDO0FBckJELDhCQXFCQztBQUVELHFCQUFxQixRQUE4QjtJQUMvQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDWixNQUFNLENBQUMsSUFBSSxD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