(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("test/test.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const member_1 = require("./member");
const x_1 = require("../x");
const order_goods_1 = require("./order_goods");
const order_1 = require("./order");
order_goods_1.OrderGoods.name;
x_1.X.start({
    "name": "default",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "123",
    "database": "yoehi",
    // "autoSchemaSync": false,`
    // "entities": [
    // ],
    // "subscribers": [
    // 
    // ],
    // "migrations": [
    // 
    // ],
    "tablesPrefix": "ra_"
}).then(async (managers) => {
    var a = new member_1.Member;
    a.member_id = 1;
    // console.log(ObservingObject.getChanged(a));
    var ret = await x_1.X.of(member_1.Member).find({
        where: {
            member_name: ['like', 'cubi'],
            member_id: ['in', [10, 20, 30]],
            member_add_time: ['>', new Date().getTime() / 1000],
            and: {
                member_id: 1,
            },
            or: {
                member_name: "cubi"
            }
        },
        order: {
            member_id: "asc"
        },
        group: 'member_id',
        limit: 10
    });
    var d = await x_1.X.of(order_1.Order).findOne({
        where: {
            order_sn: "810694381770"
        },
        addon: {
            order_goods: 1
        }
    });
    var og = d.order_goods;
    // console.log(d,og);
    og[0].goods_name = 'cubi';
    await x_1.X.makeAddon(og, "order");
    console.log(d);
    // console.log(X.toObject(d));
    // // console.log(X.toObject(og[0].order))
    // console.log(X.toJSON(og));
    // console.log(X.toObject(og[0].order));
    // console.log(X.toObject(d.order_goods));
    // function b<T>(c : {new() : T},d : {
    //     [key in keyof T] : number
    // }){
    // }
    // b(Member,{})
    // console.log(X.toObject(d))
    // console.log(d.order_sn)
    // console.log(d.order_goods)
    // var b = ret[0];
    // for(var i in b){
    //     console.log(b[i]);
    // }
    // b.member_name = 1;
    // console.log(Object.entries(b));
    // return;
    // b.member_name = 'fuck';
    // console.log(X.getChanged(b));
    // X.save(b);
    // b = undefined;
    // X.transition(async x => {
    // });
    // setInterval(function () {
    //     console.log(EntityWatchingMap)
    // }, 10000)
    // getEntityManager().getRepository(Member);
    // var a = getEntityManager().getRepository(Member).createQueryBuilder("cubi")
    return;
    // return;
    // console.log(X.getChanged(c))
    // var b = new Repository(Member);
    // X.find(Member, {
    // })
    // await X.save(c);
    // console.log(c);
}).catch((e) => {
    console.log(e);
    console.log("Fuck");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovd29yay9Yb3JtL3NyYy90ZXN0L3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxxQ0FBb0M7QUFFcEMsNEJBQXlCO0FBRXpCLCtDQUEyQztBQUMzQyxtQ0FBZ0M7QUFFaEMsd0JBQVUsQ0FBQyxJQUFJLENBQUM7QUFFaEIsS0FBQyxDQUFDLEtBQUssQ0FDSDtJQUNJLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLE1BQU0sRUFBRSxPQUFPO0lBQ2YsTUFBTSxFQUFFLFdBQVc7SUFDbkIsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVLEVBQUUsTUFBTTtJQUNsQixVQUFVLEVBQUUsS0FBSztJQUNqQixVQUFVLEVBQUUsT0FBTztJQUNuQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLEtBQUs7SUFDTCxtQkFBbUI7SUFDbkIsR0FBRztJQUNILEtBQUs7SUFDTCxrQkFBa0I7SUFDbEIsR0FBRztJQUNILEtBQUs7SUFDTCxjQUFjLEVBQUUsS0FBSztDQUN4QixDQUNKLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxRQUFRO0lBQ2pCLElBQUksQ0FBQyxHQUFHLElBQUksZUFBTSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLDhDQUE4QztJQUU5QyxJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUMsQ0FBQyxFQUFFLENBQUMsZUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzlCLEtBQUssRUFBRTtZQUNILFdBQVcsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvQixlQUFlLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDbkQsR0FBRyxFQUFFO2dCQUNELFNBQVMsRUFBRSxDQUFDO2FBQ2Y7WUFDRCxFQUFFLEVBQUU7Z0JBQ0EsV0FBVyxFQUFFLE1BQU07YUFDdEI7U0FDSjtRQUNELEtBQUssRUFBRTtZQUNILFNBQVMsRUFBRSxLQUFLO1NBQ25CO1FBQ0QsS0FBSyxFQUFFLFdBQVc7UUFDbEIsS0FBSyxFQUFFLEVBQUU7S0FDWixDQUFDLENBQUE7SUFHRixJQUFJLENBQUMsR0FBRyxNQUFNLEtBQUMsQ0FBQyxFQUFFLENBQUMsYUFBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzlCLEtBQUssRUFBRztZQUNKLFFBQVEsRUFBRyxjQUFjO1NBQzVCO1FBQ0QsS0FBSyxFQUFHO1lBQ0osV0FBVyxFQUFHLENBQUM7U0FDbEI7S0FFSixDQUFDLENBQUM7SUFFSCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQ3ZCLHFCQUFxQjtJQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUUxQixNQUFNLEtBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDZCw4QkFBOEI7SUFDOUIsMENBQTBDO0lBQzFDLDZCQUE2QjtJQUU3Qix3Q0FBd0M7SUFDeEMsMENBQTBDO0lBRzFDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7SUFDaEMsTUFBTTtJQUVOLElBQUk7SUFFSixlQUFlO0lBRWYsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsSUFBSTtJQUNKLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFFbEMsVUFBVTtJQUVWLDBCQUEwQjtJQUMxQixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUViLGlCQUFpQjtJQUVqQiw0QkFBNEI7SUFFNUIsTUFBTTtJQUVOLDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsWUFBWTtJQUdaLDRDQUE0QztJQUU1Qyw4RUFBOEU7SUFDOUUsTUFBTSxDQUFDO0lBRVAsVUFBVTtJQUNWLCtCQUErQjtJQUUvQixrQ0FBa0M7SUFFbEMsbUJBQW1CO0lBRW5CLEtBQUs7SUFJTCxtQkFBbUI7SUFFbkIsa0JBQWtCO0FBQ3RCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN2QixDQUFDLENBQUMsQ0FBQSJ9
});
___scope___.file("test/member.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const XEntity_1 = require("../decorator/XEntity");
const PrimaryColumn_1 = require("../decorator/PrimaryColumn");
let Member = class Member {
    onGet() {
        this.member_name = 'guichu';
    }
};
tslib_1.__decorate([
    PrimaryColumn_1.PrimaryColumn(),
    tslib_1.__metadata("design:type", Number)
], Member.prototype, "member_id", void 0);
Member = tslib_1.__decorate([
    XEntity_1.XEntity()
], Member);
exports.Member = Member;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi93b3JrL1hvcm0vc3JjL3Rlc3QvbWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtEQUErQztBQUUvQyw4REFBMkQ7QUFJM0QsSUFBYSxNQUFNLEdBQW5CO0lBU0ksS0FBSztRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO0lBQ2hDLENBQUM7Q0FFSixDQUFBO0FBVkc7SUFEQyw2QkFBYSxFQUFFOzt5Q0FDVTtBQUhqQixNQUFNO0lBRGxCLGlCQUFPLEVBQUU7R0FDRyxNQUFNLENBYWxCO0FBYlksd0JBQU0ifQ==
});
___scope___.file("decorator/XEntity.js", function(exports, require, module, __filename, __dirname){

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
            constructor() {
                super();
                return gc_1.ObservingObject.addObserveObject(this);
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWEVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovd29yay9Yb3JtL3NyYy9kZWNvcmF0b3IvWEVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDBDQUF3QztBQUV4Qyw4QkFBd0M7QUFHN0IsUUFBQSxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQTZCLENBQUM7QUFlNUQsaUJBQXdCLEtBQXlDO0lBQzdELElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUNyQixJQUFJLEtBQUssR0FBRyxVQUFVLE1BQWdCO1FBQ2xDLElBQUksSUFBdUIsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxHQUFHLHFCQUFxQixFQUFFLENBQUM7WUFDL0IsaUJBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLEdBQUcsaUJBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBc0IsQ0FBQztRQUMzRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUM7WUFDakMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRO1FBQ1Isb0JBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsb0JBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RELG9CQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQyxJQUFJLFFBQVEsR0FBSSxLQUFNLFNBQVEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXO1lBQ3REO2dCQUNJLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sQ0FBQyxvQkFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xELENBQUM7U0FDSixDQUFBO1FBQ0QsV0FBVztRQUNYLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQztZQUNsQyxLQUFLLEVBQUcsTUFBTSxDQUFDLElBQUk7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNoQiwrQkFBK0I7UUFDL0Isd0JBQXdCO1FBRXhCLHFCQUFxQjtRQUNyQixNQUFNO1FBQ04sSUFBSTtJQUNSLENBQUMsQ0FBQTtJQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDUixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQWxERCwwQkFrREM7QUFPVSxRQUFBLGlCQUFpQixHQUFHLElBQUksT0FBTyxFQUF5QixDQUFDO0FBb0JwRTtJQUNJLE1BQU0sQ0FBQztRQUNILE1BQU0sRUFBRSxNQUFNLElBQUk7UUFDbEIsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFNBQVMsRUFBRSxFQUFFO1FBQ2IsUUFBUSxFQUFFLEVBQUU7S0FDZixDQUFBO0FBQ0wsQ0FBQztBQVRELHNEQVNDIn0=
});
___scope___.file("constant.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORMMODE;
(function (ORMMODE) {
    ORMMODE[ORMMODE["DESIGN"] = 0] = "DESIGN";
    ORMMODE[ORMMODE["PRODUCT"] = 1] = "PRODUCT";
})(ORMMODE = exports.ORMMODE || (exports.ORMMODE = {}));
exports.ORMCONFIG = {
    MODE: ORMMODE.DESIGN,
    MODELS: {},
    CONNECTION_MANAGER: {},
    CONFIGS: {}
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0U6L3dvcmsvWG9ybS9zcmMvY29uc3RhbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFZLE9BR1g7QUFIRCxXQUFZLE9BQU87SUFDZix5Q0FBTSxDQUFBO0lBQ04sMkNBQU8sQ0FBQTtBQUNYLENBQUMsRUFIVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFHbEI7QUFDVSxRQUFBLFNBQVMsR0FhcEI7SUFDSSxJQUFJLEVBQUcsT0FBTyxDQUFDLE1BQU07SUFDckIsTUFBTSxFQUFHLEVBQUU7SUFDWCxrQkFBa0IsRUFBRyxFQUVwQjtJQUNELE9BQU8sRUFBRyxFQUFFO0NBQ2YsQ0FBQSJ9
});
___scope___.file("gc.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 垃圾回收器，负责回收被监视的对象
 * 回收逻辑
 *  1.当对象被监视的时候，对象被放入a容器，
 *  2.30秒后，被标记的对象被放入b容器，待清除
 *  3.此时如果b容器发生变动，对象仍旧回a容器
 *  4.30秒后，如果b容器内的元素不再发生任何变动，则清除b容器内所有的引用，回收系统资源
 */
const GC_STEP_TIME = 30000;
class GC {
    constructor() {
        this.boxA = new Map();
        this.boxB = new Map();
    }
    start() {
        setInterval(() => {
            //清空所有B容器的元素
            for (const [key, val] of this.boxB) {
                this.boxB.delete(key);
            }
            //将容器A的东西全部放入容器B
            this.boxB = this.boxA;
            this.boxA = new Map();
            console.log("容器A大小", this.boxA.size);
            console.log("容器B大小", this.boxB.size);
        }, GC_STEP_TIME);
    }
    addObserveObject(obj) {
        var watching = {
            changed: {}
        };
        var proxy = new Proxy(obj, {
            set: (obj, key, val) => {
                watching.changed[key] = true;
                //如果这时候元素在B容器，那么放回A容器
                if (this.boxB.has(proxy)) {
                    this.boxB.delete(proxy);
                    this.boxA.set(proxy, watching);
                }
                else if (!this.boxA.has(proxy)) {
                    this.boxA.set(proxy, watching);
                }
                return obj[key] = val;
            }
        });
        //首先放入容器A
        this.boxA.set(proxy, watching);
        return proxy;
    }
    getChanged(obj) {
        var val = this.boxA.get(obj) || this.boxB.get(obj);
        if (!val) {
            return [];
        }
        return Object.keys(val.changed);
    }
    clearChanged(obj) {
        var val = this.boxA.get(obj) || this.boxB.get(obj);
        if (!val) {
            return false;
        }
        val.changed = {};
    }
}
exports.ObservingObject = new GC;
/**
 * 开启
 */
// ObservingObject.start(); 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0U6L3dvcmsvWG9ybS9zcmMvZ2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBRTNCO0lBQUE7UUFDWSxTQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixTQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQXlEN0IsQ0FBQztJQXZERyxLQUFLO1FBQ0QsV0FBVyxDQUFDO1lBQ1IsWUFBWTtZQUNaLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLENBQUM7WUFDRCxnQkFBZ0I7WUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUV0QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxHQUFXO1FBQ3hCLElBQUksUUFBUSxHQUFHO1lBQ1gsT0FBTyxFQUFFLEVBQ1I7U0FDSixDQUFBO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBVSxFQUFFO1lBQzlCLEdBQUcsRUFBRSxDQUFDLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUTtnQkFDN0IsUUFBUSxDQUFDLE9BQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RDLHFCQUFxQjtnQkFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUNELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzFCLENBQUM7U0FDSixDQUFDLENBQUM7UUFDSCxTQUFTO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFXO1FBQ2xCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELEVBQUUsQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQztZQUNMLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDZCxDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBWTtRQUNyQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxFQUFFLENBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7WUFDTCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFDRCxHQUFHLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFHWSxRQUFBLGVBQWUsR0FBRyxJQUFJLEVBQUUsQ0FBQztBQUV0Qzs7R0FFRztBQUNILDJCQUEyQiJ9
});
___scope___.file("decorator/PrimaryColumn.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XEntity_1 = require("./XEntity");
function PrimaryColumn(column) {
    return function (target, key) {
        var info = XEntity_1.EntityMap.get(target.constructor.name) || XEntity_1.InitEntityDescirption();
        info.primary = key;
        XEntity_1.EntityMap.set(target.constructor.name, info);
    };
}
exports.PrimaryColumn = PrimaryColumn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbWFyeUNvbHVtbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovd29yay9Yb3JtL3NyYy9kZWNvcmF0b3IvUHJpbWFyeUNvbHVtbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFnRjtBQUVoRix1QkFBOEIsTUFBWTtJQUN0QyxNQUFNLENBQUMsVUFBVSxNQUFjLEVBQUUsR0FBVztRQUN4QyxJQUFJLElBQUksR0FBc0IsbUJBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBcUIsRUFBRSxDQUFDO1FBQ2hHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLG1CQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQTtBQUNMLENBQUM7QUFORCxzQ0FNQyJ9
});
___scope___.file("x.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XEntity_1 = require("./decorator/XEntity");
const manager_1 = require("./driver/mysql/manager");
const constant_1 = require("./constant");
const repository_1 = require("./repository");
const gc_1 = require("./gc");
var isRuning = false;
class XEntityManager {
    constructor() {
        this.repoInstance = new Map();
    }
    of(entity) {
        this.factory = entity;
        return this;
    }
    async save(models) {
        var isMultipul = Array.isArray(models);
        if (!isMultipul) {
            models = [models];
        }
        models = models;
        if (!models.length) {
            return [];
        }
        var desc = XEntity_1.EntityMap.get(models[0].__proto__.constructor.name);
        if (!desc) {
            throw new Error("desc not found:");
        }
        // var ret = [];
        var ret = await Promise.all(models.map(async (model) => {
            var changed = gc_1.ObservingObject.getChanged(model);
            if (!changed || !changed.length) {
                return model;
            }
            if (changed.includes(desc.primary) || !(desc.primary in model)) {
                // let ret = this.getRepository(constructor).insert(model);
                let ret = await this.getConnection(desc.database).insert(model, desc);
                gc_1.ObservingObject.clearChanged(model);
                return ret;
            }
            else {
                var condition = {};
                condition[desc.primary] = model[desc.primary];
                var updateData = {};
                changed.forEach(change => {
                    updateData[change] = model[change];
                });
                await this.getConnection(desc.database).update(condition, updateData, desc);
                gc_1.ObservingObject.clearChanged(model);
                return model;
            }
        }));
        if (isMultipul) {
            return ret;
        }
        return ret[0];
        // if (Array.isArray(models)) {
        //     models = models as T[];
        //     var ret = [];
        //     for (let model of models) {
        //         ret.push(this.save(model));
        //     }
        //     return ret;
        // }
        // else {
        //     var model = <T>models;
        //     //查找描述信息
        //     var desc = EntityMap.get((model as any).__proto__.constructor.name);
        //     if (!desc) {
        //         throw new Error("desc not found:" + (model as any).__proto__.constructor.name);
        //     }
        //     //没有发生任何改变的情况
        //     // var changed = Object.keys(model);
        //     var changed = ObservingObject.getChanged(model);
        //     if (!changed || !changed.length) {
        //         return model;
        //     }
        //     // var entries = Object.entries(model);
        //     //查询主键，如果没有的情况，默认为“ID"
        //     var constructor = (model as any).__proto__.constructor as {
        //         new(): any
        //     }
        //     if (changed.includes(desc.primary) || !(desc.primary in model)) {
        //         // let ret = this.getRepository(constructor).insert(model);
        //         let ret = await this.getConnection(desc.database).insert(model as Partial<T>, desc);
        //         return ret;
        //     }
        //     else {
        //         // return this.update((model as any).__proto__.constructor,)
        //         if (!(desc.primary in model)) {
        //             return false;
        //         }
        //         var condition = {};
        //         (condition as any)[desc.primary] = (model as any)[desc.primary];
        //         var updateData: any = Object.assign({},model);
        //         var updateData : any = {};
        //         for(const change of changed){
        //             updateData[change] = model[change]
        //         }
        //         delete updateData[desc.primary];
        //         let ret = await this.getConnection(desc.database).update(condition, updateData, desc);
        //         return model;
        //     }
        // }
    }
    /**
     * 更新函数，可以传入多个精湛的参数
     * @param entity
     * @param condition
     * @param data
     */
    // async update( condition: string, data: Partial<U>): Promise<Partial<U>>;
    // async update( condition: number, data: Partial<U>): Promise<Partial<U>>;
    // async update( condition: WhereOption<U>, data: Partial<U>): Promise<Partial<U>>;
    async update(condition, data) {
        var name = this.factory ? this.factory.name : '';
        var desc = XEntity_1.EntityMap.get(name);
        if (!desc) {
            throw new Error("desc not found:" + name);
        }
        if (!(desc.primary in data)) {
            throw new Error("desc primary not found:" + name);
        }
        let _condition;
        let ret;
        switch (typeof condition) {
            case 'string':
            case 'number':
                _condition = {};
                _condition[desc.primary] = condition;
                break;
            default:
                _condition = condition;
                break;
        }
        ret = await this.getConnection(desc.database).update(_condition, data, desc);
        return data;
    }
    async delete(...args) {
        let desc;
        if (args.length == 1) {
            let entity = args[0];
            if (Array.isArray(entity)) {
                if (!entity.length) {
                    return false;
                }
                desc = XEntity_1.EntityMap.get(entity[0].__proto__.constructor.name);
                if (!desc) {
                    throw new Error("desc not found");
                }
                var ids = entity.map(item => item[desc.primary]).filter(item => item != null && item != '');
                var condition = {};
                condition[desc.primary] = ['in', ids];
                return await this.getConnection(desc.database).delete(condition, desc);
            }
            else {
                desc = XEntity_1.EntityMap.get(entity[0].__proto__.constructor.name);
                if (!desc) {
                    throw new Error("desc not found");
                }
                var condition = {};
                condition[desc.primary] = entity[desc.primary];
                return await this.getConnection(desc.database).delete(condition, desc);
            }
        }
        else if (args.length == 2) {
            desc = XEntity_1.EntityMap.get(args[0].name);
            if (!desc) {
                throw new Error("desc not found");
            }
            var condition = {};
            switch (typeof args[1]) {
                case 'number':
                case 'string':
                    condition[desc.primary] = args[1];
                    break;
                default:
                    condition = args[1];
                    break;
            }
            return await this.getConnection(desc.database).delete(condition, desc);
        }
        else {
            throw new Error("delete 参数不对");
        }
    }
    query(...args) {
        if (args.length == 2) {
            return this.getConnection(args[0]).query(args[1]);
        }
        return this.getConnection().query(args[0]);
    }
    /**
     * 对find方法的封装，有提示，有提示，有提示，重点要说三遍
     * 为了效率着想，暂时不自动检测内部属性变化
     * 提供第三个属性来强制要求返回观测对象
     * @param entity
     * @param option
     */
    async find(option = {}, observable = false) {
        var name = this.factory ? this.factory.name : '';
        const desc = XEntity_1.EntityMap.get(name);
        if (!desc) {
            throw new Error("desc not found");
            // return [];
        }
        var result = await this.getConnection(desc.database).find(option, desc);
        //判断是否要追加字段
        // if (option.addon) {
        //     var addons = Object.keys(desc.external).filter(item => desc.external[item]);
        // }
        var ret = [];
        for (let item of result) {
            //新版API
            if (this.factory.prototype.onGet) {
                this.factory.prototype.onGet.call(item);
            }
            //兼容以前的写法
            if (this.factory.prototype.onLoad) {
                this.factory.prototype.onLoad.call(item);
            }
            //黑魔法,将原型指向该字段，取Object.entries的时候只会取到变化的字段
            var observed = gc_1.ObservingObject.addObserveObject(item);
            observed.__proto__ = desc.entity.prototype;
            ret.push(observed);
            // item.constructor = this.factory;
            // let obj = Object.create(item);
            // ret.push(obj);
        }
        if (option.addon) {
            var addons = Object.keys(option.addon).filter(item => desc.external[item]);
            //使用in统一查询，减少负担                    
            await Promise.all(addons.map(async (key) => {
                await this.makeAddon(ret, key);
            }));
        }
        return ret;
    }
    /**
     * findOne默认追加observable
     * 可以检测到该元素内部的变动
     * @param entity
     * @param option
     */
    async findOne(option = {}) {
        var result = await this.find(option);
        return result[0];
    }
    async makeAddon(entity, key) {
        if (!Array.isArray(entity)) {
            entity = [entity];
        }
        if (!entity.length) {
            return;
        }
        let desc = XEntity_1.EntityMap.get(entity[0].__proto__.constructor.name);
        if (!desc) {
            throw new Error("desc not found");
        }
        //如果没有传递key这个参数，那么默认生成所有的连接关系
        if (!key) {
            var keys = Object.keys(desc.external);
            if (!keys.length) {
                return;
            }
            await Promise.all(keys.map(async (key) => await this.makeAddon(entity, key)));
            return;
        }
        if (!Array.isArray(key)) {
            key = [key];
        }
        //真正的查询从这里开始
        for (const k of key) {
            var addon = desc.external[k];
            var cVals = entity.map(item => {
                return item[addon.fromKey];
            });
            var condition = {};
            condition[addon.toKey] = ['in', cVals];
            var targetEntity = XEntity_1.EntityMap.get(addon.entity);
            if (!targetEntity) {
                continue;
            }
            let result = await this.of(targetEntity.entity).find({
                where: condition
            });
            //按指定条件分组                
            var groups = {};
            result.forEach(item => {
                var k = item[addon.toKey];
                groups[k] = groups[k] || [];
                groups[k].push(item);
            });
            if (addon.type == '1vn') {
                for (var item of entity) {
                    var target = groups[item[addon.fromKey]];
                    if (target) {
                        item[addon.field] = groups[item[addon.fromKey]];
                    }
                    else {
                        item[addon.field] = [];
                    }
                }
            }
            else {
                for (var item of entity) {
                    var target = groups[item[addon.fromKey]];
                    if (target && target.length) {
                        item[addon.field] = target[0];
                    }
                }
            }
        }
    }
    /**
     * 启动函数，只有调用了这个并且传入对应的数据库连接配置，XORM才会生效
     * @param configs
     */
    async start(configs) {
        if (!configs) {
            throw new Error("Xorm 配置文件错误");
        }
        if (!Array.isArray(configs)) {
            configs = [configs];
        }
        //设为正在运行的状态，防止后面有人重新启动
        if (isRuning) {
            return [];
        }
        isRuning = true;
        //启动垃圾回收器
        gc_1.ObservingObject.start();
        //开始启动连接池
        var promises = [];
        configs.forEach(config => {
            let manager;
            switch (config.type) {
                case 'mysql':
                    manager = new manager_1.MysqlConnectionManager(config);
                    break;
                default:
                    throw new Error("未被识别的数据库驱动：" + config.type);
            }
            constant_1.ORMCONFIG.CONFIGS[config.name] = config;
            promises.push(new Promise(async function (resolve, reject) {
                await manager.start();
                constant_1.ORMCONFIG.CONNECTION_MANAGER[config.name] = manager;
                resolve(manager);
            }));
        });
        //返回对应的连接实例
        return Promise.all(promises);
    }
    async transition(command) {
        return null;
    }
    /**
     * 因为采取了原型内魔法
     */
    // toJSON(...args: any[]): string {
    //     return JSON.stringify(this.toObject.apply(this, args));
    // }
    // /**
    //  * 同上
    //  */
    // toObject(data: any): object {
    //     var ret;
    //     if (Array.isArray(data)) {
    //         ret = [];
    //         for (var item of data) {
    //             ret.push(this.toObject(item));
    //         }
    //         return ret;
    //     }
    //     else {
    //         for (var i in data) {
    //             switch (typeof data[i] as any) {
    //                 case 'function':
    //                     break;
    //                 case 'array':
    //                     data[i] = this.toObject(data[i]);
    //                     break;
    //                 default:
    //                     data[i] = data[i];
    //                     break;
    //             }
    //         }
    //         return data;
    //     }
    // }
    getRepository(model) {
        // return new Repository(model);
        //让单例见鸡儿去吧
        var resp = this.repoInstance.get(model.name) || (() => {
            var resp = new repository_1.Repository(model);
            this.repoInstance.set(model.name, resp);
            return resp;
        })();
        return resp;
    }
    /**
    * 得到一个连接
    */
    getConnection(type = 'default') {
        return this.hasConnection(type) ? constant_1.ORMCONFIG.CONNECTION_MANAGER[type] : undefined;
    }
    /**
     * 判断是否存在这个数据库连接
     * @param type
     */
    hasConnection(type = 'default') {
        return constant_1.ORMCONFIG.CONNECTION_MANAGER[type];
    }
}
exports.XEntityManager = XEntityManager;
exports.X = new XEntityManager;
// function X() {
// return xx;
// }
// namespace X {
// export const hasConnection = xx.hasConnection;
// export const 
// export function hasConnection() {
//     return xx.hasConnection
// }
// }
// export {X};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovd29yay9Yb3JtL3NyYy94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXNIO0FBSXRILG9EQUFnRTtBQUNoRSx5Q0FBdUM7QUFDdkMsNkNBQW9HO0FBQ3BHLDZCQUF1QztBQUd2QyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFFckI7SUFBQTtRQUVZLGlCQUFZLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7SUE0ZTNELENBQUM7SUE5ZEcsRUFBRSxDQUFJLE1BQWlCO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFXLENBQUM7SUFDdkIsQ0FBQztJQWNELEtBQUssQ0FBQyxJQUFJLENBQUksTUFBVztRQUNyQixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNaLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFDRCxNQUFNLEdBQUcsTUFBZSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDZixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUNELElBQUksSUFBSSxHQUFHLG1CQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBc0IsQ0FBQztRQUNwRixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUNELGdCQUFnQjtRQUNoQixJQUFJLEdBQUcsR0FBRyxNQUFNLE9BQU8s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
});
___scope___.file("driver/mysql/manager.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MysqlConnectionManager {
    constructor(config) {
        this.config = config;
    }
    async delete(condition, desc) {
        var str = this.buildWhere(condition, desc);
        var sql = `
            delete from \`${this.config.database}\`.\`${this.config.tablesPrefix + desc.tableName}\`
        `;
        if (str != '') {
            sql += ' where ' + str;
        }
        return await this.query(sql) ? true : false;
    }
    async update(condition, data, desc) {
        var str = this.buildWhere(condition, desc, false);
        var sql = `
            update \`${this.config.database}\`.\`${this.config.tablesPrefix + desc.tableName}\`
            set ${(() => {
            var buf = [];
            for (const [key, val] of Object.entries(data)) {
                var fieldName = '`' + key + '`';
                if (val == null) {
                    buf.push(`${fieldName} = null`);
                }
                else {
                    buf.push(`${fieldName} = '${val}'`);
                }
            }
            return buf.join(",");
        })()}
        `;
        if (str != '') {
            sql += ' where ' + str;
        }
        console.log(sql);
        return this.query(sql);
    }
    buildWhere(whereOption, desc, addPrefix = true) {
        var buffer = [];
        //build and
        if (whereOption.and) {
            var str = this.buildWhere(whereOption.and, desc);
            if (str != '') {
                buffer.push(' and (' + str + ')');
            }
            delete whereOption.and;
        }
        //build or
        if (whereOption.or) {
            var str = this.buildWhere(whereOption.or, desc);
            if (str != '') {
                buffer.push(' or ( ' + str + ')');
            }
            delete whereOption.or;
        }
        for (var name in whereOption) {
            var val = whereOption[name];
            //添加前缀，防止占用关键字
            var fieldName = (addPrefix ? 't_' + desc.tableName + '.' : "") + name;
            ``;
            if (Array.isArray(val)) {
                if (val[0] == 'like') {
                    buffer.push(` and ${fieldName} like '${val[1]}'`);
                }
                else if (val[0] == 'in') {
                    buffer.push(` and ${fieldName} in ( ${val[1].map((item) => `'${item}'`).join(',')} )`);
                }
            }
            else {
                if (val == null) {
                    buffer.push(` and ${fieldName} is null`);
                }
                else {
                    buffer.push(` and ${fieldName} = '${val}'`);
                }
            }
        }
        return buffer.join(" ").replace(/^\s*(and|or)/, "").trim();
    }
    buildSql(findOption, desc) {
        var where;
        var group = '';
        var sql = `
            select * from \`${this.config.database}\`.\`${this.config.tablesPrefix + desc.tableName}\` as t_${desc.tableName}
        `;
        if (findOption.where) {
            var str = this.buildWhere(findOption.where, desc);
            if (str != '') {
                sql += ' where ' + str;
            }
        }
        if (findOption.group) {
            sql += ' group by ' + `t_${desc.tableName}.${findOption.group}`;
        }
        if (findOption.order) {
            var buf = [];
            for (const name in findOption.order) {
                buf.push(`t_${desc.tableName}.${name} ${findOption.order[name]}`);
            }
            sql += " order by " + buf.join(",");
        }
        if (findOption.limit) {
            if (Array.isArray(findOption.limit)) {
                sql += ' limit ' + findOption.limit[0] + ' , ' + findOption.limit[1];
            }
            else {
                sql += ' limit ' + findOption.limit;
            }
        }
        console.log(sql);
        return sql;
    }
    async find(findOption, desc) {
        const sql = this.buildSql(findOption, desc);
        var ret;
        ret = await this.query(sql);
        return ret || [];
    }
    async insert(data, desc) {
        var fields = [], values = [];
        for (const [key, val] of Object.entries(data)) {
            if (typeof val == 'function')
                continue;
            fields.push(`\`${key}\``);
            if (val == null) {
                values.push('null');
            }
            else {
                values.push(`'${val}'`);
            }
        }
        var dbname = this.config.database;
        var sql = `
            insert into \`${dbname}\`.\`${this.config.tablesPrefix + desc.tableName}\`
                (
                    ${fields.join(",")}
                )
                values
                (
                    ${values.join(",")}
                );
        `;
        var ret = await this.query(sql);
        data[desc.primary] = ret.insertId;
        return data;
    }
    /**
     * 创建对应的连接池
     */
    start() {
        this.pool = mysql.createPool({
            host: this.config.host,
            user: this.config.username,
            password: this.config.password,
            database: this.config.database,
            port: this.config.port,
        });
    }
    query(sql) {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                    return;
                }
                connection.query(sql, (err, vals, fields) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(vals);
                });
            });
        });
    }
}
exports.MysqlConnectionManager = MysqlConnectionManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovd29yay9Yb3JtL3NyYy9kcml2ZXIvbXlzcWwvbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLCtCQUErQjtBQU8vQjtJQTRKSSxZQUFtQixNQUFtQjtRQUFuQixXQUFNLEdBQU4sTUFBTSxDQUFhO0lBQ3RDLENBQUM7SUE1SkQsS0FBSyxDQUFDLE1BQU0sQ0FBSSxTQUF5QixFQUFFLElBQXVCO1FBQzlELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksR0FBRyxHQUFHOzRCQUNVLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTO1NBQ3hGLENBQUM7UUFDRixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNaLEdBQUcsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQzNCLENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7SUFDaEQsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUksU0FBeUIsRUFBRSxJQUFPLEVBQUUsSUFBdUI7UUFDdkUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksR0FBRyxHQUFHO3VCQUNLLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTO2tCQUMxRSxDQUFDO1lBQ0gsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsR0FBRyxDQUFD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
});
___scope___.file("repository.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const x_1 = require("./x");
const querybuilder_1 = require("./querybuilder");
class Repository {
    constructor(factory) {
        this.factory = factory;
    }
    updateById(primaryKey, model) {
        return x_1.X.of(this.factory).update(primaryKey, model);
        // var desc = EntityMap.get(this.factory.name);
        // if(!desc){
        //     return false;
        // }
        // var condition = {};
        // condition[desc.primary] = 
        // return getConnection(desc.database).update({})
    }
    persist(entity) {
        return x_1.X.save(entity);
    }
    save(entity) {
        return x_1.X.save(entity);
    }
    /**
     * typeorm中没有这个方法
     */
    // insert(data: T) {
    //     var desc = EntityMap.get(this.factory.name);
    //     if (!desc) {
    //         return data;
    //     }
    //     return getConnection(desc.database).insert(data as Partial<T>, desc);
    // }
    findOne(findOption) {
        return x_1.X.of(this.factory).findOne(findOption);
        // findOption.limit = 1;
        // var ret = await this.find(findOption);
        // if(ret){
        //     return ret[0];
        // }
        // return new this.factory;
    }
    find(findOption) {
        return x_1.X.of(this.factory).find(findOption);
        // var desc = EntityMap.get(this.factory.name);
        // if(!desc){
        //     return [];
        // }
        // /**
        //  * 兼容typeorm的部分暂时不要这些
        //  */
        // var result = await getConnection(desc.database).find<T>(findOption,desc);
        // for(let item of result){
        //     //新版API
        //     if (this.factory.prototype.onGet) {
        //         this.factory.prototype.onGet.call(item);
        //     }
        //     //兼容以前的写法
        //     if(this.factory.prototype.onLoad){
        //         this.factory.prototype.onLoad.call(item);
        //     }
        // }
        // return result;
    }
    createQueryBuilder(alias) {
        return new querybuilder_1.QueryBuilder(this.factory, alias);
    }
}
exports.Repository = Repository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovd29yay9Yb3JtL3NyYy9yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMkJBQXdCO0FBQ3hCLGlEQUE4QztBQXdDOUM7SUFFSSxZQUFtQixPQUFxQjtRQUFyQixZQUFPLEdBQVAsT0FBTyxDQUFjO0lBQ3hDLENBQUM7SUFFRCxVQUFVLENBQUMsVUFBMkIsRUFBRSxLQUFpQjtRQUNyRCxNQUFNLENBQUMsS0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQW9CLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsK0NBQStDO1FBQy9DLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsSUFBSTtRQUNKLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsaURBQWlEO0lBQ3JELENBQUM7SUFLRCxPQUFPLENBQUMsTUFBVztRQUNmLE1BQU0sQ0FBQyxLQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFJRCxJQUFJLENBQUMsTUFBVztRQUNaLE1BQU0sQ0FBQyxLQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILG9CQUFvQjtJQUNwQixtREFBbUQ7SUFDbkQsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsNEVBQTRFO0lBQzVFLElBQUk7SUFJSixPQUFPLENBQ0gsVUFBeUI7UUFFekIsTUFBTSxDQUFDLEtBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU5Qyx3QkFBd0I7UUFDeEIseUNBQXlDO1FBQ3pDLFdBQVc7UUFDWCxxQkFBcUI7UUFDckIsSUFBSTtRQUNKLDJCQUEyQjtJQUMvQixDQUFDO0lBRUQsSUFBSSxDQUNBLFVBQTBCO1FBRTFCLE1BQU0sQ0FBQyxLQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFM0MsK0NBQStDO1FBQy9DLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsSUFBSTtRQUNKLE1BQU07UUFDTix3QkFBd0I7UUFDeEIsTUFBTTtRQUNOLDRFQUE0RTtRQUM1RSwyQkFBMkI7UUFDM0IsY0FBYztRQUNkLDBDQUEwQztRQUMxQyxtREFBbUQ7UUFDbkQsUUFBUTtRQUNSLGdCQUFnQjtRQUNoQix5Q0FBeUM7UUFDekMsb0RBQW9EO1FBQ3BELFFBQVE7UUFDUixJQUFJO1FBQ0osaUJBQWlCO0lBRXJCLENBQUM7SUFHRCxrQkFBa0IsQ0FBQyxLQUFjO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLDJCQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBRUo7QUF2RkQsZ0NBdUZDIn0=
});
___scope___.file("querybuilder.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 为了兼容typeorm而写，实际可以抛弃这个做查询
 */
class QueryBuilder {
    constructor(factory, alias) {
        this.factory = factory;
        this.alias = alias;
    }
    andWhere(condition, replacement) {
        return this;
    }
    orWhere(condition, replacement) {
        return this;
    }
    where(condition, replacement) {
        return this;
    }
    async getCount() {
    }
    getMany() {
    }
    getManyAndCount() {
    }
    getOne() {
    }
    getSql() {
    }
}
exports.QueryBuilder = QueryBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlidWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi93b3JrL1hvcm0vc3JjL3F1ZXJ5YnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOztHQUVHO0FBQ0g7SUFDSSxZQUNZLE9BQXFCLEVBQ3JCLEtBQWE7UUFEYixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQVE7SUFHekIsQ0FBQztJQUVELFFBQVEsQ0FBQyxTQUFpQixFQUFFLFdBQW1CO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUFpQixFQUFFLFdBQW1CO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELEtBQUssQ0FBQyxTQUFpQixFQUFFLFdBQW1CO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRO0lBRWQsQ0FBQztJQUVELE9BQU87SUFFUCxDQUFDO0lBRUQsZUFBZTtJQUVmLENBQUM7SUFFRCxNQUFNO0lBRU4sQ0FBQztJQUVELE1BQU07SUFFTixDQUFDO0NBQ0o7QUF2Q0Qsb0NBdUNDIn0=
});
});
FuseBox.target = "universal"

FuseBox.import("default/test/test.js");
FuseBox.main("default/test/test.js");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((d||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(d){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!d&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=m[a];if(!s){if(d&&"electron"!==h.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),v=i(c),p=s.f[v];return!p&&v.indexOf("*")>-1&&(l=v),p||l||(v=t(c,"/","index.js"),p=s.f[v],p||(v=c+".js",p=s.f[v]),p||(p=s.f[c+".jsx"]),p||(v=c+"/index.jsx",p=s.f[v])),{file:p,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:v}}function s(e,r,n){if(void 0===n&&(n={}),!d)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);h.dynamic(a,o),r(h.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=g[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=m[t.pkgName];if(u){var p={};for(var g in u.f)a.test(g)&&(p[g]=c(t.pkgName+"/"+g));return p}}if(!i){var h="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return h?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var w=i.locals={},y=n(t.validPath);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return c(e,{pkg:_,path:y,v:t.versions})},d||!v.require.main?w.require.main={filename:"./",paths:[]}:w.require.main=v.require.main;var j=[w.module.exports,w.require,w.module,t.validPath,y,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),w.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof window&&window.navigator,v=d?window:global;d&&(v.global=window),e=d&&"undefined"==typeof __fbx__dnm__?e:module.exports;var p=d?window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};d||(v.require=require);var m=p.p=p.p||{},g=p.e=p.e||{},h=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){g[e]=g[e]||[],g[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=m[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=m.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(m[e])return n(m[e].s);var t=m[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=m,r.isBrowser=d,r.isServer=!d,r.plugins=[],r}();return d||(v.FuseBox=h),e.FuseBox=h}(this))