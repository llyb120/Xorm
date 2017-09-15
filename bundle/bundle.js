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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL3Rlc3QvdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLHFDQUFvQztBQUVwQyw0QkFBeUI7QUFFekIsK0NBQTJDO0FBQzNDLG1DQUFnQztBQUVoQyx3QkFBVSxDQUFDLElBQUksQ0FBQztBQUVoQixLQUFDLENBQUMsS0FBSyxDQUNIO0lBQ0ksTUFBTSxFQUFFLFNBQVM7SUFDakIsTUFBTSxFQUFFLE9BQU87SUFDZixNQUFNLEVBQUUsV0FBVztJQUNuQixNQUFNLEVBQUUsSUFBSTtJQUNaLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFVBQVUsRUFBRSxPQUFPO0lBQ25CLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsS0FBSztJQUNMLG1CQUFtQjtJQUNuQixHQUFHO0lBQ0gsS0FBSztJQUNMLGtCQUFrQjtJQUNsQixHQUFHO0lBQ0gsS0FBSztJQUNMLGNBQWMsRUFBRSxLQUFLO0NBQ3hCLENBQ0osQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLFFBQVE7SUFDakIsSUFBSSxDQUFDLEdBQUcsSUFBSSxlQUFNLENBQUM7SUFDbkIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDaEIsOENBQThDO0lBRTlDLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBQyxDQUFDLEVBQUUsQ0FBQyxlQUFNLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDOUIsS0FBSyxFQUFFO1lBQ0gsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUM3QixTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLGVBQWUsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztZQUNuRCxHQUFHLEVBQUU7Z0JBQ0QsU0FBUyxFQUFFLENBQUM7YUFDZjtZQUNELEVBQUUsRUFBRTtnQkFDQSxXQUFXLEVBQUUsTUFBTTthQUN0QjtTQUNKO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsU0FBUyxFQUFFLEtBQUs7U0FDbkI7UUFDRCxLQUFLLEVBQUUsV0FBVztRQUNsQixLQUFLLEVBQUUsRUFBRTtLQUNaLENBQUMsQ0FBQTtJQUdGLElBQUksQ0FBQyxHQUFHLE1BQU0sS0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDOUIsS0FBSyxFQUFHO1lBQ0osUUFBUSxFQUFHLGNBQWM7U0FDNUI7UUFDRCxLQUFLLEVBQUc7WUFDSixXQUFXLEVBQUcsQ0FBQztTQUNsQjtLQUVKLENBQUMsQ0FBQztJQUVILElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDdkIscUJBQXFCO0lBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBRTFCLE1BQU0sS0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFFOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNkLDhCQUE4QjtJQUM5QiwwQ0FBMEM7SUFDMUMsNkJBQTZCO0lBRTdCLHdDQUF3QztJQUN4QywwQ0FBMEM7SUFHMUMsc0NBQXNDO0lBQ3RDLGdDQUFnQztJQUNoQyxNQUFNO0lBRU4sSUFBSTtJQUVKLGVBQWU7SUFFZiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixJQUFJO0lBQ0oscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUVsQyxVQUFVO0lBRVYsMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQyxhQUFhO0lBRWIsaUJBQWlCO0lBRWpCLDRCQUE0QjtJQUU1QixNQUFNO0lBRU4sNEJBQTRCO0lBQzVCLHFDQUFxQztJQUNyQyxZQUFZO0lBR1osNENBQTRDO0lBRTVDLDhFQUE4RTtJQUM5RSxNQUFNLENBQUM7SUFFUCxVQUFVO0lBQ1YsK0JBQStCO0lBRS9CLGtDQUFrQztJQUVsQyxtQkFBbUI7SUFFbkIsS0FBSztJQUlMLG1CQUFtQjtJQUVuQixrQkFBa0I7QUFDdEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQyxDQUFBIn0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi9tandvcmsvWG9ybS9zcmMvdGVzdC9tZW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0RBQStDO0FBRS9DLDhEQUEyRDtBQUkzRCxJQUFhLE1BQU0sR0FBbkI7SUFTSSxLQUFLO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7SUFDaEMsQ0FBQztDQUVKLENBQUE7QUFWRztJQURDLDZCQUFhLEVBQUU7O3lDQUNVO0FBSGpCLE1BQU07SUFEbEIsaUJBQU8sRUFBRTtHQUNHLE1BQU0sQ0FhbEI7QUFiWSx3QkFBTSJ9
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWEVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RlY29yYXRvci9YRW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMENBQXdDO0FBRXhDLDhCQUF3QztBQUc3QixRQUFBLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBNkIsQ0FBQztBQWU1RCxpQkFBd0IsS0FBeUM7SUFDN0QsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ3JCLElBQUksS0FBSyxHQUFHLFVBQVUsTUFBZ0I7UUFDbEMsSUFBSSxJQUF1QixDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLEdBQUcscUJBQXFCLEVBQUUsQ0FBQztZQUMvQixpQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksR0FBRyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFzQixDQUFDO1FBQzNELENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUM7WUFDdEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQztZQUNqQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVE7UUFDUixvQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxvQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEQsb0JBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBDLElBQUksUUFBUSxHQUFJLEtBQU0sU0FBUSxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVc7WUFDdEQ7Z0JBQ0ksS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxDQUFDLG9CQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsQ0FBQztTQUNKLENBQUE7UUFDRCxXQUFXO1FBQ1gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUMsTUFBTSxFQUFDO1lBQ2xDLEtBQUssRUFBRyxNQUFNLENBQUMsSUFBSTtTQUN0QixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2hCLCtCQUErQjtRQUMvQix3QkFBd0I7UUFFeEIscUJBQXFCO1FBQ3JCLE1BQU07UUFDTixJQUFJO0lBQ1IsQ0FBQyxDQUFBO0lBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNSLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBbERELDBCQWtEQztBQU9VLFFBQUEsaUJBQWlCLEdBQUcsSUFBSSxPQUFPLEVBQXlCLENBQUM7QUFvQnBFO0lBQ0ksTUFBTSxDQUFDO1FBQ0gsTUFBTSxFQUFFLE1BQU0sSUFBSTtRQUNsQixNQUFNLEVBQUUsRUFBRTtRQUNWLE9BQU8sRUFBRSxJQUFJO1FBQ2IsUUFBUSxFQUFFLFNBQVM7UUFDbkIsU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsRUFBRTtLQUNmLENBQUE7QUFDTCxDQUFDO0FBVEQsc0RBU0MifQ==
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0U6L21qd29yay9Yb3JtL3NyYy9jb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQVksT0FHWDtBQUhELFdBQVksT0FBTztJQUNmLHlDQUFNLENBQUE7SUFDTiwyQ0FBTyxDQUFBO0FBQ1gsQ0FBQyxFQUhXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQUdsQjtBQUNVLFFBQUEsU0FBUyxHQWFwQjtJQUNJLElBQUksRUFBRyxPQUFPLENBQUMsTUFBTTtJQUNyQixNQUFNLEVBQUcsRUFBRTtJQUNYLGtCQUFrQixFQUFHLEVBRXBCO0lBQ0QsT0FBTyxFQUFHLEVBQUU7Q0FDZixDQUFBIn0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0U6L21qd29yay9Yb3JtL3NyYy9nYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUM7QUFFM0I7SUFBQTtRQUNZLFNBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFNBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBeUQ3QixDQUFDO0lBdkRHLEtBQUs7UUFDRCxXQUFXLENBQUM7WUFDUixZQUFZO1lBQ1osR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsQ0FBQztZQUNELGdCQUFnQjtZQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEdBQVc7UUFDeEIsSUFBSSxRQUFRLEdBQUc7WUFDWCxPQUFPLEVBQUUsRUFDUjtTQUNKLENBQUE7UUFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFVLEVBQUU7WUFDOUIsR0FBRyxFQUFFLENBQUMsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRO2dCQUM3QixRQUFRLENBQUMsT0FBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDdEMscUJBQXFCO2dCQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDMUIsQ0FBQztTQUNKLENBQUMsQ0FBQztRQUNILFNBQVM7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQVc7UUFDbEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDO1lBQ0wsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFZO1FBQ3JCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELEVBQUUsQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQztZQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUNELEdBQUcsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FDSjtBQUdZLFFBQUEsZUFBZSxHQUFHLElBQUksRUFBRSxDQUFDO0FBRXRDOztHQUVHO0FBQ0gsMkJBQTJCIn0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbWFyeUNvbHVtbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RlY29yYXRvci9QcmltYXJ5Q29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQWdGO0FBRWhGLHVCQUE4QixNQUFZO0lBQ3RDLE1BQU0sQ0FBQyxVQUFVLE1BQWMsRUFBRSxHQUFXO1FBQ3hDLElBQUksSUFBSSxHQUFzQixtQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFxQixFQUFFLENBQUM7UUFDaEcsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbkIsbUJBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQU5ELHNDQU1DIn0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBc0g7QUFJdEgsb0RBQWdFO0FBQ2hFLHlDQUF1QztBQUN2Qyw2Q0FBb0c7QUFDcEcsNkJBQXVDO0FBR3ZDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztBQUVyQjtJQUFBO1FBRVksaUJBQVksR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQztJQTRlM0QsQ0FBQztJQTlkRyxFQUFFLENBQUksTUFBaUI7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQVcsQ0FBQztJQUN2QixDQUFDO0lBY0QsS0FBSyxDQUFDLElBQUksQ0FBSSxNQUFXO1FBQ3JCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO1lBQ1osTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUNELE1BQU0sR0FBRyxNQUFlLENBQUM7UUFDekIsRUFBRSxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztZQUNmLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDZCxDQUFDO1FBQ0QsSUFBSSxJQUFJLEdBQUcsbUJBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFzQixDQUFDO1FBQ3BGLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBQ0QsZ0JBQWdCO1FBQ2hCLElBQUksR0FBRyxHQUFHLE1BQU0sT0FB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
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RyaXZlci9teXNxbC9tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsK0JBQStCO0FBTy9CO0lBNEpJLFlBQW1CLE1BQW1CO1FBQW5CLFdBQU0sR0FBTixNQUFNLENBQWE7SUFDdEMsQ0FBQztJQTVKRCxLQUFLLENBQUMsTUFBTSxDQUFJLFNBQXlCLEVBQUUsSUFBdUI7UUFDOUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxHQUFHLEdBQUc7NEJBQ1UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVM7U0FDeEYsQ0FBQztRQUNGLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1osR0FBRyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDM0IsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNoRCxDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBSSxTQUF5QixFQUFFLElBQU8sRUFBRSxJQUF1QjtRQUN2RSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxHQUFHLEdBQUc7dUJBQ0ssSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVM7a0JBQzFFLENBQUM7WUFDSCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDYixHQUFHLENB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
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL3JlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwyQkFBd0I7QUFDeEIsaURBQThDO0FBd0M5QztJQUVJLFlBQW1CLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7SUFDeEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxVQUEyQixFQUFFLEtBQWlCO1FBQ3JELE1BQU0sQ0FBQyxLQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBb0IsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUM3RCwrQ0FBK0M7UUFDL0MsYUFBYTtRQUNiLG9CQUFvQjtRQUNwQixJQUFJO1FBQ0osc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QixpREFBaUQ7SUFDckQsQ0FBQztJQUtELE9BQU8sQ0FBQyxNQUFXO1FBQ2YsTUFBTSxDQUFDLEtBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUlELElBQUksQ0FBQyxNQUFXO1FBQ1osTUFBTSxDQUFDLEtBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsb0JBQW9CO0lBQ3BCLG1EQUFtRDtJQUNuRCxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUiw0RUFBNEU7SUFDNUUsSUFBSTtJQUlKLE9BQU8sQ0FDSCxVQUF5QjtRQUV6QixNQUFNLENBQUMsS0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTlDLHdCQUF3QjtRQUN4Qix5Q0FBeUM7UUFDekMsV0FBVztRQUNYLHFCQUFxQjtRQUNyQixJQUFJO1FBQ0osMkJBQTJCO0lBQy9CLENBQUM7SUFFRCxJQUFJLENBQ0EsVUFBMEI7UUFFMUIsTUFBTSxDQUFDLEtBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUzQywrQ0FBK0M7UUFDL0MsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixJQUFJO1FBQ0osTUFBTTtRQUNOLHdCQUF3QjtRQUN4QixNQUFNO1FBQ04sNEVBQTRFO1FBQzVFLDJCQUEyQjtRQUMzQixjQUFjO1FBQ2QsMENBQTBDO1FBQzFDLG1EQUFtRDtRQUNuRCxRQUFRO1FBQ1IsZ0JBQWdCO1FBQ2hCLHlDQUF5QztRQUN6QyxvREFBb0Q7UUFDcEQsUUFBUTtRQUNSLElBQUk7UUFDSixpQkFBaUI7SUFFckIsQ0FBQztJQUdELGtCQUFrQixDQUFDLEtBQWM7UUFDN0IsTUFBTSxDQUFDLElBQUksMkJBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FFSjtBQXZGRCxnQ0F1RkMifQ==
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlidWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi9tandvcmsvWG9ybS9zcmMvcXVlcnlidWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O0dBRUc7QUFDSDtJQUNJLFlBQ1ksT0FBcUIsRUFDckIsS0FBYTtRQURiLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUd6QixDQUFDO0lBRUQsUUFBUSxDQUFDLFNBQWlCLEVBQUUsV0FBbUI7UUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQWlCLEVBQUUsV0FBbUI7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsS0FBSyxDQUFDLFNBQWlCLEVBQUUsV0FBbUI7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVE7SUFFZCxDQUFDO0lBRUQsT0FBTztJQUVQLENBQUM7SUFFRCxlQUFlO0lBRWYsQ0FBQztJQUVELE1BQU07SUFFTixDQUFDO0lBRUQsTUFBTTtJQUVOLENBQUM7Q0FDSjtBQXZDRCxvQ0F1Q0MifQ==
});
___scope___.file("test/order_goods.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PrimaryColumn_1 = require("./../decorator/PrimaryColumn");
const XEntity_1 = require("../decorator/XEntity");
const Link_1 = require("../decorator/Link");
const order_1 = require("./order");
let OrderGoods = class OrderGoods {
};
tslib_1.__decorate([
    PrimaryColumn_1.PrimaryColumn(),
    tslib_1.__metadata("design:type", Number)
], OrderGoods.prototype, "rec_id", void 0);
tslib_1.__decorate([
    Link_1.ManyToOne(order_1.Order, {
        to(item) {
            return item.order_id;
        },
        from(item) {
            return "order_id";
        },
        reverse(item) {
            return item.order_goods;
        }
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof order_1.Order !== "undefined" && order_1.Order) === "function" && _a || Object)
], OrderGoods.prototype, "order", void 0);
OrderGoods = tslib_1.__decorate([
    XEntity_1.XEntity
], OrderGoods);
exports.OrderGoods = OrderGoods;
var _a;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJfZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0U6L21qd29yay9Yb3JtL3NyYy90ZXN0L29yZGVyX2dvb2RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdFQUE2RDtBQUM3RCxrREFBK0M7QUFDL0MsNENBQW9EO0FBQ3BELG1DQUFnQztBQUVoQyxJQUFhLFVBQVUsR0FBdkI7Q0FxQkMsQ0FBQTtBQWxCRztJQURDLDZCQUFhLEVBQUU7OzBDQUNBO0FBaUJoQjtJQVhDLGdCQUFTLENBQUMsYUFBSyxFQUFDO1FBQ2IsRUFBRSxDQUFDLElBQUk7WUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUk7WUFDTCxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3RCLENBQUM7UUFDRCxPQUFPLENBQUMsSUFBSTtZQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7S0FDSixDQUFDOzBEQUNNLGFBQUssb0JBQUwsYUFBSzt5Q0FBQztBQXBCTCxVQUFVO0lBRHRCLGlCQUFPO0dBQ0ssVUFBVSxDQXFCdEI7QUFyQlksZ0NBQVUifQ==
});
___scope___.file("decorator/Link.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XEntity_1 = require("./XEntity");
class test {
    static cubi(a, b) {
    }
}
exports.test = test;
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
        if (toKey) {
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
            info.external[key] = {
                entity: proto.constructor.name,
                fromKey: toKey,
                toKey: fromKey,
                field: reverse,
                // key: linkKey,
                type: "1vn",
            };
            XEntity_1.EntityMap.set(proto.constructor.name, info);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RlY29yYXRvci9MaW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXdGO0FBRXhGO0lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBSSxDQUFjLEVBQUUsQ0FBTztJQUV0QyxDQUFDO0NBRUo7QUFMRCxvQkFLQztBQVFELGlFQUFpRTtBQUNqRTs7OztHQUlHO0FBQ0gsbUJBQ0ksTUFBaUIsRUFFakIsU0FBaUIsRUFDakIsT0FBZ0I7SUFHaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QixNQUFNLENBQUMsVUFBVSxLQUFhLEVBQUUsR0FBVztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLElBQUksSUFBSSxHQUFzQixtQkFBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFxQixFQUFFLENBQUM7UUFDL0YsSUFBSSxFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUc7WUFDakIsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDYixPQUFPLEVBQUUsT0FBTyxJQUFJLEdBQUc7WUFDdkIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxHQUFHO1NBQ2IsQ0FBQztRQUNGLG1CQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUMsQ0FBQTtBQUNMLENBQUM7QUFyQkQsOEJB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
});
___scope___.file("test/order.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const XEntity_1 = require("../decorator/XEntity");
let Order = class Order {
};
Order = tslib_1.__decorate([
    XEntity_1.XEntity
], Order);
exports.Order = Order;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0U6L21qd29yay9Yb3JtL3NyYy90ZXN0L29yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtEQUErQztBQUkvQyxJQUFhLEtBQUssR0FBbEI7Q0FXQyxDQUFBO0FBWFksS0FBSztJQURqQixpQkFBTztHQUNLLEtBQUssQ0FXakI7QUFYWSxzQkFBSyJ9
});
___scope___.file("decorator/PrimaryGeneratedColumn.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PrimaryColumn_1 = require("./PrimaryColumn");
function PrimaryGeneratedColumn(column) {
    return PrimaryColumn_1.PrimaryColumn(column);
}
exports.PrimaryGeneratedColumn = PrimaryGeneratedColumn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbWFyeUdlbmVyYXRlZENvbHVtbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RlY29yYXRvci9QcmltYXJ5R2VuZXJhdGVkQ29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQWdEO0FBQ2hELGdDQUF1QyxNQUFZO0lBQy9DLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFGRCx3REFFQyJ9
});
___scope___.file("driver/driver.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi9tandvcmsvWG9ybS9zcmMvZHJpdmVyL2RyaXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0=
});
___scope___.file("header/config.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi9tandvcmsvWG9ybS9zcmMvaGVhZGVyL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0=
});
});
FuseBox.target = "universal"

FuseBox.import("default/test/test.js");
FuseBox.main("default/test/test.js");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((d||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(d){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!d&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=m[a];if(!s){if(d&&"electron"!==h.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),v=i(c),p=s.f[v];return!p&&v.indexOf("*")>-1&&(l=v),p||l||(v=t(c,"/","index.js"),p=s.f[v],p||(v=c+".js",p=s.f[v]),p||(p=s.f[c+".jsx"]),p||(v=c+"/index.jsx",p=s.f[v])),{file:p,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:v}}function s(e,r,n){if(void 0===n&&(n={}),!d)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);h.dynamic(a,o),r(h.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=g[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=m[t.pkgName];if(u){var p={};for(var g in u.f)a.test(g)&&(p[g]=c(t.pkgName+"/"+g));return p}}if(!i){var h="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return h?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var w=i.locals={},y=n(t.validPath);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return c(e,{pkg:_,path:y,v:t.versions})},d||!v.require.main?w.require.main={filename:"./",paths:[]}:w.require.main=v.require.main;var j=[w.module.exports,w.require,w.module,t.validPath,y,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),w.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof window&&window.navigator,v=d?window:global;d&&(v.global=window),e=d&&"undefined"==typeof __fbx__dnm__?e:module.exports;var p=d?window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};d||(v.require=require);var m=p.p=p.p||{},g=p.e=p.e||{},h=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){g[e]=g[e]||[],g[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=m[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=m.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(m[e])return n(m[e].s);var t=m[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=m,r.isBrowser=d,r.isServer=!d,r.plugins=[],r}();return d||(v.FuseBox=h),e.FuseBox=h}(this))