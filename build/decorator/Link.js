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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNvcmF0b3IvTGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUF3RjtBQVN4RixJQUFJLE9BQU8sR0FBUSxJQUFJLENBQUM7QUFFeEIscUJBQTRCLFFBQThCO0lBQ3RELEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELE9BQU8sR0FBRyxPQUFPLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFO1FBQy9CLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUM7S0FDSixDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFWRCxrQ0FVQztBQUVELG1CQUNJLFVBQXdCLEVBQ3hCLFFBQXNCLEVBQ3RCLE1BQXdCLEVBQ3hCLElBQUksR0FBRyxJQUFJO0lBRVgsTUFBTSxDQUFDLFVBQVUsS0FBYSxFQUFFLEdBQVc7UUFDdkMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLElBQUksVUFBVSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUNqRyxJQUFJLEtBQUssR0FBRyxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDakYsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxJQUFJLEdBQXNCLG1CQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQXFCLEVBQUUsQ0FBQztRQUMvRixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHO1lBQ2pCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsT0FBTztZQUNoQixLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxHQUFHO1lBQ1YsZ0JBQWdCO1lBQ2hCLElBQUksRUFBRSxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQUs7U0FDN0IsQ0FBQztRQUNGLG1CQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLGtCQUFrQjtRQUNsQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLE9BQU8sR0FBRyxPQUFPLE1BQU0sQ0FBQyxPQUFPLElBQUksVUFBVSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNqRyxJQUFJLElBQUksR0FBc0IsbUJBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFxQixFQUFFLENBQUM7WUFDdEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRztnQkFDckIsTUFBTSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSTtnQkFDOUIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsZ0JBQWdCO2dCQUNoQixJQUFJLEVBQUUsSUFBSSxHQUFHLEtBQUssR0FBRyxLQUFLO2FBQzdCLENBQUM7WUFDRixtQkFBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDTCxDQUFDLENBQUE7QUFFTCxDQUFDO0FBdENELDhCQXNDQztBQUdELGtCQUNJLFVBQXdCLEVBQ3hCLFFBQXNCLEVBQ3RCLE1BQXdCO0lBRXhCLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFHekQsQ0FBQztBQVJELDRCQVFDIn0=