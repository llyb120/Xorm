"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XEntity_1 = require("./XEntity");
// export function OneToMany(proto : Object,key : string) : void;
/**
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
function ManyToOne(entity, targetKey, fromKey) {
    console.log(arguments);
    return function (proto, key) {
        var info = XEntity_1.EntityMap.get(proto.constructor.name) || XEntity_1.InitEntityDescirption();
        var sp = targetKey.split(".").map(item => item.trim());
        info.external[key] = {
            entity: sp[0],
            fromKey: fromKey,
            toKey: sp[1],
            field: key,
            // key: linkKey,
            type: "nv1"
        };
        XEntity_1.EntityMap.set(proto.constructor.name, info);
    };
}
exports.ManyToOne = ManyToOne;
function OneToOne(entity, targetKey, fromKey
    // toKey: string
) {
    console.log(arguments);
    return function (proto, key) {
        var info = XEntity_1.EntityMap.get(proto.constructor.name) || XEntity_1.InitEntityDescirption();
        var sp = targetKey.split(".").map(item => item.trim());
        info.external[key] = {
            entity: sp[0],
            fromKey: fromKey,
            toKey: sp[1],
            field: key,
            // key: linkKey,
            type: "1v1"
        };
        XEntity_1.EntityMap.set(proto.constructor.name, info);
    };
}
exports.OneToOne = OneToOne;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNvcmF0b3IvTGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUF3RjtBQUV4RixpRUFBaUU7QUFDakU7OztHQUdHO0FBQ0gsbUJBQ0ksTUFBaUIsRUFDakIsU0FBaUIsRUFDakIsT0FBZ0I7SUFHaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QixNQUFNLENBQUMsVUFBVSxLQUFhLEVBQUUsR0FBVztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLElBQUksSUFBSSxHQUFzQixtQkFBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFxQixFQUFFLENBQUM7UUFDL0YsSUFBSSxFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUc7WUFDakIsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDYixPQUFPLEVBQUUsT0FBTyxJQUFJLEdBQUc7WUFDdkIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxHQUFHO1NBQ2IsQ0FBQztRQUNGLG1CQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUMsQ0FBQTtBQUNMLENBQUM7QUFwQkQsOEJBb0JDO0FBRUQsbUJBQTZCLE1BQWlCLEVBQUUsU0FBaUIsRUFBRSxPQUFlO0lBQzlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkIsTUFBTSxDQUFDLFVBQVUsS0FBYSxFQUFFLEdBQVc7UUFDdkMsSUFBSSxJQUFJLEdBQXNCLG1CQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQXFCLEVBQUUsQ0FBQztRQUMvRixJQUFJLEVBQUUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRztZQUNqQixNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNiLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1osS0FBSyxFQUFFLEdBQUc7WUFDVixnQkFBZ0I7WUFDaEIsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDO1FBQ0YsbUJBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQWZELDhCQWVDO0FBRUQsa0JBQ0ksTUFBaUIsRUFDakIsU0FBaUIsRUFDakIsT0FBZTtJQUNmLGdCQUFnQjs7SUFFaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QixNQUFNLENBQUMsVUFBVSxLQUFhLEVBQUUsR0FBVztRQUN2QyxJQUFJLElBQUksR0FBc0IsbUJBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBcUIsRUFBRSxDQUFDO1FBQy9GLElBQUksRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHO1lBQ2pCLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2IsT0FBTyxFQUFFLE9BQU87WUFDaEIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDWixLQUFLLEVBQUUsR0FBRztZQUNWLGdCQUFnQjtZQUNoQixJQUFJLEVBQUUsS0FBSztTQUNkLENBQUM7UUFDRixtQkFBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUE7QUFDTCxDQUFDO0FBcEJELDRCQW9CQyJ9