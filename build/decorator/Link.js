"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XEntity_1 = require("./XEntity");
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
function ManyToOne(fromEntity, toEntity, option, many = true) {
    return function (proto, key) {
        console.log(option);
        var fromKey = (typeof option.from == 'function' ? makeFactory(option.from) : option.from) || key;
        var toKey = (typeof option.to == 'function' ? makeFactory(option.to) : option.to);
        if (!toKey) {
            throw new Error("没有找到to");
        }
        var info = XEntity_1.EntityMap.get(proto.constructor.name) || XEntity_1.InitEntityDescirption();
        info.external[key] = {
            entity: toEntity.name,
            fromKey: fromKey,
            toKey: toKey,
            field: key,
            // key: linkKey,
            type: many ? "nv1" : '1v1',
        };
        XEntity_1.EntityMap.set(proto.constructor.name, info);
        //如果有反向关联，给反向表追加连接
        if (option.reverse) {
            var reverse = typeof option.reverse == 'function' ? makeFactory(option.reverse) : option.reverse;
            var info = XEntity_1.EntityMap.get(toEntity.name) || XEntity_1.InitEntityDescirption();
            info.external[reverse] = {
                entity: proto.constructor.name,
                fromKey: toKey,
                toKey: fromKey,
                field: reverse,
                // key: linkKey,
                type: many ? "1vn" : '1v1',
            };
            XEntity_1.EntityMap.set(toEntity.name, info);
        }
    };
}
exports.ManyToOne = ManyToOne;
function OneToOne(fromEntity, toEntity, option) {
    return ManyToOne(fromEntity, toEntity, option, true);
}
exports.OneToOne = OneToOne;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNvcmF0b3IvTGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUF3RjtBQVN4RixJQUFJLE9BQU8sR0FBUSxJQUFJLENBQUM7QUFFeEIscUJBQTRCLFFBQThCO0lBQ3RELEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELE9BQU8sR0FBRyxPQUFPLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFO1FBQy9CLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUM7S0FDSixDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFWRCxrQ0FVQztBQUVELG1CQUNJLFVBQXdCLEVBQ3hCLFFBQXNCLEVBQ3RCLE1BQXdCLEVBQ3hCLElBQUksR0FBRyxJQUFJO0lBRVgsTUFBTSxDQUFDLFVBQVUsS0FBYSxFQUFFLEdBQVc7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNuQixJQUFJLE9BQU8sR0FBRyxDQUFDLE9BQU8sTUFBTSxDQUFDLElBQUksSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ2pHLElBQUksS0FBSyxHQUFHLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRSxJQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNqRixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFDRCxJQUFJLElBQUksR0FBc0IsbUJBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBcUIsRUFBRSxDQUFDO1FBQy9GLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUc7WUFDakIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1lBQ3JCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLEdBQUc7WUFDVixnQkFBZ0I7WUFDaEIsSUFBSSxFQUFFLElBQUksR0FBRyxLQUFLLEdBQUcsS0FBSztTQUM3QixDQUFDO1FBQ0YsbUJBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsa0JBQWtCO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksT0FBTyxHQUFHLE9BQU8sTUFBTSxDQUFDLE9BQU8sSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2pHLElBQUksSUFBSSxHQUFzQixtQkFBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQXFCLEVBQUUsQ0FBQztZQUN0RixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHO2dCQUNyQixNQUFNLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJO2dCQUM5QixPQUFPLEVBQUUsS0FBSztnQkFDZCxLQUFLLEVBQUUsT0FBTztnQkFDZCxLQUFLLEVBQUUsT0FBTztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLElBQUksRUFBRSxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQUs7YUFDN0IsQ0FBQztZQUNGLG1CQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQztJQUNMLENBQUMsQ0FBQTtBQUVMLENBQUM7QUF2Q0QsOEJBdUNDO0FBR0Qsa0JBQ0ksVUFBd0IsRUFDeEIsUUFBc0IsRUFDdEIsTUFBd0I7SUFFeEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUd6RCxDQUFDO0FBUkQsNEJBUUMifQ==