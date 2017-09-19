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
var factory = null;
function makeFactory(callback) {
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
exports.makeFactory = makeFactory;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNvcmF0b3IvTGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUF3RjtBQWF4RixpRUFBaUU7QUFDakU7Ozs7R0FJRztBQUNILG1CQUNJLE1BQWlCLEVBRWpCLFNBQWlCLEVBQ2pCLE9BQWdCO0lBR2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkIsTUFBTSxDQUFDLFVBQVUsS0FBYSxFQUFFLEdBQVc7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNoQixJQUFJLElBQUksR0FBc0IsbUJBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBcUIsRUFBRSxDQUFDO1FBQy9GLElBQUksRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHO1lBQ2pCLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2IsT0FBTyxFQUFFLE9BQU8sSUFBSSxHQUFHO1lBQ3ZCLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsR0FBRztTQUNiLENBQUM7UUFDRixtQkFBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUE7QUFDTCxDQUFDO0FBckJELDhCQXFCQztBQUVELElBQUksT0FBTyxHQUFTLElBQUksQ0FBQztBQUV6QixxQkFBNEIsUUFBOEI7SUFDdEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMs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