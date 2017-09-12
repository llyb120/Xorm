"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var constant_1 = require("../constant");
exports.EntityMap = new Map();
function XEntity(first) {
    var type = 'default';
    var final = function (target) {
        var info;
        if (!exports.EntityMap.has(target.name)) {
            info = InitEntityDescirption();
            exports.EntityMap.set(target.name, info);
        }
        else {
            info = exports.EntityMap.get(target.name);
        }
        info.database = type;
        info.tableName = target.name.replace(/^[A-Z]/, function (a) {
            return a.toLowerCase();
        }).replace(/[A-Z][a-z]/g, function (a) {
            return '_' + a.toLowerCase();
        });
        //大概会用到吧
        constant_1.ORMCONFIG.MODELS[type] = constant_1.ORMCONFIG.MODELS[type] || [];
        constant_1.ORMCONFIG.MODELS[type].push(target);
        var newClass = (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                var _this = _super.call(this) || this;
                return ObserveObjectChanged(_this);
            }
            return class_1;
        }(target.prototype.constructor));
        //更改名字，偷天换日
        Object.defineProperty(newClass, 'name', {
            value: target.name
        });
        return newClass;
        // newClass.name = target.name;
        // console.log(newClass)
        // return function(){
        //    
        // }
    };
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
exports.XEntity = XEntity;
exports.EntityWatchingMap = new WeakMap();
function InitEntityDescirption() {
    return {
        fields: [],
        primary: 'id',
        database: 'default',
        tableName: ''
    };
}
exports.InitEntityDescirption = InitEntityDescirption;
function ObserveObjectChanged(obj) {
    var watching = {
        changed: new Set()
    };
    var proxy = new Proxy(obj, {
        set: function (obj, key, val) {
            watching.changed.add(key);
            return obj[key] = val;
        }
    });
    exports.EntityWatchingMap.set(proxy, watching);
    return proxy;
}
exports.ObserveObjectChanged = ObserveObjectChanged;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWEVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNvcmF0b3IvWEVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3Q0FBd0M7QUFJN0IsUUFBQSxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQTZCLENBQUM7QUFlNUQsaUJBQXdCLEtBQXlDO0lBQzdELElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUNyQixJQUFJLEtBQUssR0FBRyxVQUFVLE1BQWdCO1FBQ2xDLElBQUksSUFBdUIsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxHQUFHLHFCQUFxQixFQUFFLENBQUM7WUFDL0IsaUJBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLEdBQUcsaUJBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBc0IsQ0FBQztRQUMzRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUM7WUFDakMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRO1FBQ1Isb0JBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsb0JBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RELG9CQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQyxJQUFJLFFBQVE7WUFBa0IsbUNBQTRCO1lBQ3REO2dCQUFBLFlBQ0ksaUJBQU8sU0FFVjtnQkFERyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQztZQUNMLGNBQUM7UUFBRCxDQUFDLEFBTGUsQ0FBYyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFLekQsQ0FBQTtRQUNELFdBQVc7UUFDWCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBQyxNQUFNLEVBQUM7WUFDbEMsS0FBSyxFQUFHLE1BQU0sQ0FBQyxJQUFJO1NBQ3RCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDaEIsK0JBQStCO1FBQy9CLHdCQUF3QjtRQUV4QixxQkFBcUI7UUFDckIsTUFBTTtRQUNOLElBQUk7SUFDUixDQUFDLENBQUE7SUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ1IsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFqREQsMEJBaURDO0FBT1UsUUFBQSxpQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBeUIsQ0FBQztBQVVwRTtJQUNJLE1BQU0sQ0FBQztRQUNILE1BQU0sRUFBRSxFQUFFO1FBQ1YsT0FBTyxFQUFFLElBQUk7UUFDYixRQUFRLEVBQUUsU0FBUztRQUNuQixTQUFTLEVBQUUsRUFBRTtLQUNoQixDQUFBO0FBQ0wsQ0FBQztBQVBELHNEQU9DO0FBRUQsOEJBQXFDLEdBQVM7SUFDMUMsSUFBSSxRQUFRLEdBQUc7UUFDWCxPQUFPLEVBQUUsSUFBSSxHQUFHLEVBQVU7S0FDN0IsQ0FBQTtJQUNELElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQVUsRUFBRTtRQUM5QixHQUFHLEVBQUUsVUFBQyxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVE7WUFDOUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDMUIsQ0FBQztLQUNKLENBQUMsQ0FBQztJQUNILHlCQUFpQixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBWkQsb0RBWUMifQ==