"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = require("../constant");
const gc_1 = require("../gc");
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
        info.entity = target;
        info.database = type;
        info.tableName = target.name.replace(/^[A-Z]/, function (a) {
            return a.toLowerCase();
        }).replace(/[A-Z][a-z]/g, function (a) {
            return '_' + a.toLowerCase();
        });
        //大概会用到吧
        constant_1.ORMCONFIG.MODELS[type] = constant_1.ORMCONFIG.MODELS[type] || [];
        constant_1.ORMCONFIG.MODELS[type].push(target);
        var newClass = class extends target.prototype.constructor {
        };
        newClass.prototype.constructor = function () {
            return gc_1.ObservingObject.addObserveObject(this);
        };
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
        entity: () => null,
        fields: [],
        primary: 'id',
        database: 'default',
        tableName: '',
        external: {}
    };
}
exports.InitEntityDescirption = InitEntityDescirption;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWEVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNvcmF0b3IvWEVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDBDQUF3QztBQUN4Qyw4QkFBd0M7QUFHN0IsUUFBQSxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQTZCLENBQUM7QUFlNUQsaUJBQXdCLEtBQXlDO0lBQzdELElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUNyQixJQUFJLEtBQUssR0FBRyxVQUFVLE1BQWdCO1FBQ2xDLElBQUksSUFBdUIsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxHQUFHLHFCQUFxQixFQUFFLENBQUM7WUFDL0IsaUJBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLEdBQUcsaUJBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBc0IsQ0FBQztRQUMzRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUM7WUFDakMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRO1FBQ1Isb0JBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsb0JBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RELG9CQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQyxJQUFJLFFBQVEsR0FBSSxLQUFNLFNBQVEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXO1NBSXpELENBQUE7UUFDRCxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRztZQUM3QixNQUFNLENBQUMsb0JBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUE7UUFDRCxXQUFXO1FBQ1gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUMsTUFBTSxFQUFDO1lBQ2xDLEtBQUssRUFBRyxNQUFNLENBQUMsSUFBSTtTQUN0QixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hCLCtCQUErQjtRQUMvQix3QkFBd0I7UUFFeEIscUJBQXFCO1FBQ3JCLE1BQU07UUFDTixJQUFJO0lBQ1IsQ0FBQyxDQUFBO0lBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNSLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBcERELDBCQW9EQztBQU9VLFFBQUEsaUJBQWlCLEdBQUcsSUFBSSxPQUFPLEVBQXlCLENBQUM7QUFvQnBFO0lBQ0ksTUFBTSxDQUFDO1FBQ0gsTUFBTSxFQUFFLE1BQU0sSUFBSTtRQUNsQixNQUFNLEVBQUUsRUFBRTtRQUNWLE9BQU8sRUFBRSxJQUFJO1FBQ2IsUUFBUSxFQUFFLFNBQVM7UUFDbkIsU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsRUFBRTtLQUNmLENBQUE7QUFDTCxDQUFDO0FBVEQsc0RBU0MifQ==