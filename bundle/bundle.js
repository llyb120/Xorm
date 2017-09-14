(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("test/test.js", function(exports, require, module, __filename, __dirname){

"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var member_1 = require("./member");
var x_1 = require("../x");
var order_1 = require("./order");
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
}).then(function (managers) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    function b(c, d) {
    }
    var a, ret;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                a = new member_1.Member;
                a.member_id = 1;
                return [4 /*yield*/, x_1.X.find(member_1.Member, {
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
                    })];
            case 1:
                ret = _a.sent();
                x_1.X.find(order_1.Order, {
                    where: {}
                });
                b(member_1.Member, {});
                b(member_1.Member, {});
                console.log(x_1.X.toObject(d));
                console.log(d.order_sn);
                console.log(d.order_goods);
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
                return [2 /*return*/];
        }
    });
}); }).catch(function (e) {
    console.log(e);
    console.log("Fuck");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL3Rlc3QvdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsaUJBMEhBOzs7QUF6SEEsbUNBQW9DO0FBRXBDLDBCQUF5QjtBQUd6QixpQ0FBZ0M7QUFDaEMsS0FBQyxDQUFDLEtBQUssQ0FDSDtJQUNJLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLE1BQU0sRUFBRSxPQUFPO0lBQ2YsTUFBTSxFQUFFLFdBQVc7SUFDbkIsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVLEVBQUUsTUFBTTtJQUNsQixVQUFVLEVBQUUsS0FBSztJQUNqQixVQUFVLEVBQUUsT0FBTztJQUNuQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLEtBQUs7SUFDTCxtQkFBbUI7SUFDbkIsR0FBRztJQUNILEtBQUs7SUFDTCxrQkFBa0I7SUFDbEIsR0FBRztJQUNILEtBQUs7SUFDTCxjQUFjLEVBQUUsS0FBSztDQUN4QixDQUNKLENBQUMsSUFBSSxDQUFDLFVBQU0sUUFBUTtJQW1DakIsV0FBYyxDQUFlLEVBQUMsQ0FFN0I7SUFFRCxDQUFDO1FBckNHLENBQUM7Ozs7b0JBQUcsSUFBSSxlQUFNO2dCQUNsQixDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFHTixxQkFBTSxLQUFDLENBQUMsSUFBSSxDQUFDLGVBQU0sRUFBRTt3QkFDM0IsS0FBSyxFQUFFOzRCQUNILFdBQVcsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7NEJBQzdCLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBQy9CLGVBQWUsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQzs0QkFDbkQsR0FBRyxFQUFFO2dDQUNELFNBQVMsRUFBRSxDQUFDOzZCQUNmOzRCQUNELEVBQUUsRUFBRTtnQ0FDQSxXQUFXLEVBQUUsTUFBTTs2QkFDdEI7eUJBQ0o7d0JBQ0QsS0FBSyxFQUFFOzRCQUNILFNBQVMsRUFBRSxLQUFLO3lCQUNuQjt3QkFDRCxLQUFLLEVBQUUsV0FBVzt3QkFDbEIsS0FBSyxFQUFFLEVBQUU7cUJBQ1osQ0FBQyxFQUFBOztzQkFqQlEsU0FpQlI7Z0JBRUYsS0FBQyxDQUFDLElBQUksQ0FBQyxhQUFLLEVBQUM7b0JBQ1QsS0FBSyxFQUFHLEVBRVA7aUJBQ0osQ0FBQyxDQUFBO2dCQUVGLENBQUMsQ0FBQyxlQUFNLEVBQUMsRUFFUixDQUFDLENBQUE7Z0JBUUYsQ0FBQyxDQUFDLGVBQU0sRUFBQyxFQUFFLENBQUMsQ0FBQTtnQkFFWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUMxQixrQkFBa0I7Z0JBQ2xCLG1CQUFtQjtnQkFDbkIseUJBQXlCO2dCQUN6QixJQUFJO2dCQUNKLHFCQUFxQjtnQkFDckIsa0NBQWtDO2dCQUVsQyxVQUFVO2dCQUVWLDBCQUEwQjtnQkFDMUIsZ0NBQWdDO2dCQUNoQyxhQUFhO2dCQUViLGlCQUFpQjtnQkFFakIsNEJBQTRCO2dCQUU1QixNQUFNO2dCQUVOLDRCQUE0QjtnQkFDNUIscUNBQXFDO2dCQUNyQyxZQUFZO2dCQUdaLDRDQUE0QztnQkFFNUMsOEVBQThFO2dCQUM5RSxzQkFBTzs7O0tBZ0JWLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDO0lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDdkIsQ0FBQyxDQUFDLENBQUEifQ==
});
___scope___.file("test/member.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var XEntity_1 = require("../decorator/XEntity");
var PrimaryColumn_1 = require("../decorator/PrimaryColumn");
var Member = (function () {
    function Member() {
    }
    Member.prototype.onGet = function () {
        this.member_name = 'guichu';
    };
    return Member;
}());
tslib_1.__decorate([
    PrimaryColumn_1.PrimaryColumn(),
    tslib_1.__metadata("design:type", Number)
], Member.prototype, "member_id", void 0);
Member = tslib_1.__decorate([
    XEntity_1.XEntity()
], Member);
exports.Member = Member;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi9tandvcmsvWG9ybS9zcmMvdGVzdC9tZW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0RBQStDO0FBRS9DLDREQUEyRDtBQUkzRCxJQUFhLE1BQU07SUFBbkI7SUFhQSxDQUFDO0lBSkcsc0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFWRztJQURDLDZCQUFhLEVBQUU7O3lDQUNVO0FBSGpCLE1BQU07SUFEbEIsaUJBQU8sRUFBRTtHQUNHLE1BQU0sQ0FhbEI7QUFiWSx3QkFBTSJ9
});
___scope___.file("decorator/XEntity.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        // var newClass =  class extends target.prototype.constructor {
        //     constructor() {
        //         super();
        //         return ObservingObject.addObserveObject(this);
        //     }
        // }
        // //更改名字，偷天换日
        // Object.defineProperty(newClass,'name',{
        //     value : target.name
        // });
        // return newClass;
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
        tableName: '',
        external: {}
    };
}
exports.InitEntityDescirption = InitEntityDescirption;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWEVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RlY29yYXRvci9YRW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esd0NBQXdDO0FBSzdCLFFBQUEsU0FBUyxHQUFHLElBQUksR0FBRyxFQUE2QixDQUFDO0FBZTVELGlCQUF3QixLQUF5QztJQUM3RCxJQUFJLElBQUksR0FBRyxTQUFTLENBQUM7SUFDckIsSUFBSSxLQUFLLEdBQUcsVUFBVSxNQUFnQjtRQUNsQyxJQUFJLElBQXVCLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxxQkFBcUIsRUFBRSxDQUFDO1lBQy9CLGlCQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxHQUFHLGlCQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQXNCLENBQUM7UUFDM0QsQ0FBQztRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztZQUN0RCxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUTtRQUNSLG9CQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLG9CQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0RCxvQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEMsK0RBQStEO1FBQy9ELHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIseURBQXlEO1FBQ3pELFFBQVE7UUFDUixJQUFJO1FBQ0osY0FBYztRQUNkLDBDQUEwQztRQUMxQywwQkFBMEI7UUFDMUIsTUFBTTtRQUNOLG1CQUFtQjtRQUNuQiwrQkFBK0I7UUFDL0Isd0JBQXdCO1FBRXhCLHFCQUFxQjtRQUNyQixNQUFNO1FBQ04sSUFBSTtJQUNSLENBQUMsQ0FBQTtJQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDUixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQWpERCwwQkFpREM7QUFPVSxRQUFBLGlCQUFpQixHQUFHLElBQUksT0FBTyxFQUF5QixDQUFDO0FBaUJwRTtJQUNJLE1BQU0sQ0FBQztRQUNILE1BQU0sRUFBRSxFQUFFO1FBQ1YsT0FBTyxFQUFFLElBQUk7UUFDYixRQUFRLEVBQUUsU0FBUztRQUNuQixTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRyxFQUFFO0tBQ2hCLENBQUE7QUFDTCxDQUFDO0FBUkQsc0RBUUMifQ==
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
___scope___.file("decorator/PrimaryColumn.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XEntity_1 = require("./XEntity");
function PrimaryColumn(column) {
    return function (target, key) {
        var info = XEntity_1.EntityMap.get(target.constructor.name) || XEntity_1.InitEntityDescirption();
        info.primary = key;
        XEntity_1.EntityMap.set(target.constructor.name, info);
    };
}
exports.PrimaryColumn = PrimaryColumn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbWFyeUNvbHVtbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RlY29yYXRvci9QcmltYXJ5Q29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWdGO0FBRWhGLHVCQUE4QixNQUFZO0lBQ3RDLE1BQU0sQ0FBQyxVQUFVLE1BQWMsRUFBRSxHQUFXO1FBQ3hDLElBQUksSUFBSSxHQUFzQixtQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFxQixFQUFFLENBQUM7UUFDaEcsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbkIsbUJBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQU5ELHNDQU1DIn0=
});
___scope___.file("x.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var XEntity_1 = require("./decorator/XEntity");
var manager_1 = require("./driver/mysql/manager");
var constant_1 = require("./constant");
var repository_1 = require("./repository");
var XEntityManager = (function () {
    function XEntityManager() {
        this.repoInstance = new Map();
    }
    XEntityManager.prototype.save = function (models) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ret, models_1, models_1_1, model_1, model, desc, changed, constructor, ret_1, condition, updateData, ret_2, e_1, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Array.isArray(models)) return [3 /*break*/, 1];
                        models = models;
                        ret = [];
                        try {
                            for (models_1 = tslib_1.__values(models), models_1_1 = models_1.next(); !models_1_1.done; models_1_1 = models_1.next()) {
                                model_1 = models_1_1.value;
                                ret.push(this.save(model_1));
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (models_1_1 && !models_1_1.done && (_a = models_1.return)) _a.call(models_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/, ret];
                    case 1:
                        model = models;
                        desc = XEntity_1.EntityMap.get(model.__proto__.constructor.name);
                        if (!desc) {
                            throw new Error("desc not found:" + model.__proto__.constructor.name);
                        }
                        changed = Object.keys(model);
                        // var changed = ObservingObject.getChanged(model);
                        if (!changed || !changed.length) {
                            return [2 /*return*/, model];
                        }
                        constructor = model.__proto__.constructor;
                        if (!(changed.includes(desc.primary) || !(desc.primary in model))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getConnection(desc.database).insert(model, desc)];
                    case 2:
                        ret_1 = _b.sent();
                        return [2 /*return*/, ret_1];
                    case 3:
                        // return this.update((model as any).__proto__.constructor,)
                        if (!(desc.primary in model)) {
                            return [2 /*return*/, false];
                        }
                        condition = {};
                        condition[desc.primary] = model[desc.primary];
                        updateData = tslib_1.__assign({}, model);
                        delete updateData[desc.primary];
                        return [4 /*yield*/, this.getConnection(desc.database).update(condition, updateData, desc)];
                    case 4:
                        ret_2 = _b.sent();
                        return [2 /*return*/, model];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    XEntityManager.prototype.update = function (entity, condition, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var desc, _condition, ret;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        desc = XEntity_1.EntityMap.get(entity.name);
                        if (!desc) {
                            throw new Error("desc not found:" + entity.name);
                        }
                        if (!(desc.primary in data)) {
                            throw new Error("desc primary not found:" + entity.name);
                        }
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
                        return [4 /*yield*/, this.getConnection(desc.database).update(_condition, data, desc)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    XEntityManager.prototype.delete = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var desc, entity, ids, condition, condition, condition;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(args.length == 1)) return [3 /*break*/, 5];
                        entity = args[0];
                        if (!Array.isArray(entity)) return [3 /*break*/, 2];
                        if (!entity.length) {
                            return [2 /*return*/, false];
                        }
                        desc = XEntity_1.EntityMap.get(entity[0].__proto__.constructor.name);
                        if (!desc) {
                            throw new Error("desc not found");
                        }
                        ids = entity.map(function (item) { return item[desc.primary]; }).filter(function (item) { return item != null && item != ''; });
                        condition = {};
                        condition[desc.primary] = ['in', ids];
                        return [4 /*yield*/, this.getConnection(desc.database).delete(condition, desc)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        desc = XEntity_1.EntityMap.get(entity[0].__proto__.constructor.name);
                        if (!desc) {
                            throw new Error("desc not found");
                        }
                        condition = {};
                        condition[desc.primary] = entity[desc.primary];
                        return [4 /*yield*/, this.getConnection(desc.database).delete(condition, desc)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [3 /*break*/, 8];
                    case 5:
                        if (!(args.length == 2)) return [3 /*break*/, 7];
                        desc = XEntity_1.EntityMap.get(args[0].name);
                        if (!desc) {
                            throw new Error("desc not found");
                        }
                        condition = {};
                        switch (typeof args[1]) {
                            case 'number':
                            case 'string':
                                condition[desc.primary] = args[1];
                                break;
                            default:
                                condition = args[1];
                                break;
                        }
                        return [4 /*yield*/, this.getConnection(desc.database).delete(condition, desc)];
                    case 6: return [2 /*return*/, _a.sent()];
                    case 7: throw new Error("delete 参数不对");
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    XEntityManager.prototype.query = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length == 2) {
            return this.getConnection(args[0]).query(args[1]);
        }
        return this.getConnection().query(args[0]);
    };
    /**
     * 对find方法的封装，有提示，有提示，有提示，重点要说三遍
     * 为了效率着想，暂时不自动检测内部属性变化
     * 提供第三个属性来强制要求返回观测对象
     * @param entity
     * @param option
     */
    XEntityManager.prototype.find = function (entity, option, observable) {
        if (observable === void 0) { observable = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var desc, result, ret, result_1, result_1_1, item, obj, e_2, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        desc = XEntity_1.EntityMap.get(entity.name);
                        if (!desc) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this.getConnection(desc.database).find(option, desc)];
                    case 1:
                        result = _b.sent();
                        ret = [];
                        try {
                            for (result_1 = tslib_1.__values(result), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
                                item = result_1_1.value;
                                //新版API
                                if (entity.prototype.onGet) {
                                    entity.prototype.onGet.call(item);
                                }
                                //兼容以前的写法
                                if (entity.prototype.onLoad) {
                                    entity.prototype.onLoad.call(item);
                                }
                                //处理addon，追加需要连接的字段
                                //黑魔法,将原型指向该字段，取Object.entries的时候只会取到变化的字段
                                item.constructor = entity;
                                obj = Object.create(item);
                                ret.push(obj);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (result_1_1 && !result_1_1.done && (_a = result_1.return)) _a.call(result_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * findOne默认追加observable
     * 可以检测到该元素内部的变动
     * @param entity
     * @param option
     */
    XEntityManager.prototype.findOne = function (entity, option) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.find(entity, option)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result[0]];
                }
            });
        });
    };
    // async makeAddon<T>(entity : T[]);
    // async makeAddon<T>(entity : T);
    // async makeAddon<T>(entity : T | T[]){
    //     if(Array.isArray(entity)){
    //     }
    //     else{
    //     }
    // }
    /**
     * 启动函数，只有调用了这个并且传入对应的数据库连接配置，XORM才会生效
     * @param configs
     */
    XEntityManager.prototype.start = function (configs) {
        if (!configs) {
            throw new Error("Xorm 配置文件错误");
        }
        if (!Array.isArray(configs)) {
            configs = [configs];
        }
        //启动垃圾回收器
        //开始启动连接池
        var promises = [];
        configs.forEach(function (config) {
            var manager;
            switch (config.type) {
                case 'mysql':
                    manager = new manager_1.MysqlConnectionManager(config);
                    break;
                default:
                    throw new Error("未被识别的数据库驱动：" + config.type);
            }
            constant_1.ORMCONFIG.CONFIGS[config.name] = config;
            promises.push(new Promise(function (resolve, reject) {
                return tslib_1.__awaiter(this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, manager.start()];
                            case 1:
                                _a.sent();
                                constant_1.ORMCONFIG.CONNECTION_MANAGER[config.name] = manager;
                                resolve(manager);
                                return [2 /*return*/];
                        }
                    });
                });
            }));
        });
        //返回对应的连接实例
        return Promise.all(promises);
    };
    XEntityManager.prototype.transition = function (command) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    /**
     * 因为采取了原型内魔法
     */
    XEntityManager.prototype.toJSON = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return JSON.stringify(this.toObject.apply(this, args));
    };
    /**
     * 同上
     */
    XEntityManager.prototype.toObject = function (data) {
        var ret;
        if (Array.isArray(data)) {
            ret = [];
            try {
                for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var item = data_1_1.value;
                    ret.push(this.toObject(item));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return ret;
        }
        else {
            for (var i in data) {
                switch (typeof data[i]) {
                    case 'function':
                        break;
                    case 'array':
                        data[i] = this.toObject(data[i]);
                        break;
                    default:
                        data[i] = data[i];
                        break;
                }
            }
            return data;
        }
        var e_3, _a;
    };
    XEntityManager.prototype.getRepository = function (model) {
        var _this = this;
        // return new Repository(model);
        //让单例见鸡儿去吧
        var resp = this.repoInstance.get(model.name) || (function () {
            var resp = new repository_1.Repository(model);
            _this.repoInstance.set(model.name, resp);
            return resp;
        })();
        return resp;
    };
    /**
    * 得到一个连接
    */
    XEntityManager.prototype.getConnection = function (type) {
        if (type === void 0) { type = 'default'; }
        return this.hasConnection(type) ? constant_1.ORMCONFIG.CONNECTION_MANAGER[type] : undefined;
    };
    /**
     * 判断是否存在这个数据库连接
     * @param type
     */
    XEntityManager.prototype.hasConnection = function (type) {
        if (type === void 0) { type = 'default'; }
        return constant_1.ORMCONFIG.CONNECTION_MANAGER[type];
    };
    return XEntityManager;
}());
exports.XEntityManager = XEntityManager;
exports.X = new XEntityManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQXNIO0FBSXRILGtEQUFnRTtBQUNoRSx1Q0FBdUM7QUFDdkMsMkNBQXVGO0FBS3ZGO0lBQUE7UUFFWSxpQkFBWSxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO0lBMFYzRCxDQUFDO0lBeFVTLDZCQUFJLEdBQVYsVUFBYyxNQUFXOztnQkFHYixHQUFHLHdCQUNFLE9BQUssRUFNVixLQUFLLEVBRUwsSUFBSSxFQU1KLE9BQU8sRUFRUCxXQUFXLFNBY1AsU0FBUyxFQUVULFVBQVU7Ozs7NkJBekNsQixLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFyQix3QkFBcUI7d0JBQ3JCLE1BQU0sR0FBRyxNQUFhLENBQUM7OEJBQ2IsRUFBRTs7NEJBQ1osR0FBRyxDQUFDLFlBQWMsaUJBQUEsTUFBTSxDQUFBOztnQ0FDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQUssQ0FBQyxDQUFDLENBQUM7NkJBQzlCOzs7Ozs7Ozs7d0JBQ0Qsc0JBQU8sR0FBRyxFQUFDOztnQ0FHSSxNQUFNOytCQUVWLG1CQUFTLENBQUMsR0FBRyxDQUFFLEtBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzt3QkFDbkUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLEdBQUksS0FBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ25GLENBQUM7a0NBR2EsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQ2hDLG1EQUFtRDt3QkFDbkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxD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
});
___scope___.file("driver/mysql/manager.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mysql = require("mysql");
var MysqlConnectionManager = (function () {
    function MysqlConnectionManager(config) {
        this.config = config;
    }
    MysqlConnectionManager.prototype.delete = function (condition, desc) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var str, sql;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = this.buildWhere(condition, desc);
                        sql = "\n            delete from `" + this.config.database + "`.`" + (this.config.tablesPrefix + desc.tableName) + "`\n        ";
                        if (str != '') {
                            sql += ' where ' + str;
                        }
                        return [4 /*yield*/, this.query(sql)];
                    case 1: return [2 /*return*/, (_a.sent()) ? true : false];
                }
            });
        });
    };
    MysqlConnectionManager.prototype.update = function (condition, data, desc) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var str, sql;
            return tslib_1.__generator(this, function (_a) {
                str = this.buildWhere(condition, desc);
                sql = "\n            update `" + this.config.database + "`.`" + (this.config.tablesPrefix + desc.tableName) + "` \n            set " + (function () {
                    var buf = [];
                    try {
                        for (var _a = tslib_1.__values(Object.entries(data)), _b = _a.next(); !_b.done; _b = _a.next()) {
                            var _c = tslib_1.__read(_b.value, 2), key = _c[0], val = _c[1];
                            var fieldName = desc.tableName + '.' + key;
                            if (val == null) {
                                buf.push(fieldName + " = null");
                            }
                            else {
                                buf.push(fieldName + " = '" + val + "'");
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return buf.join(",");
                    var e_1, _d;
                })() + "\n        ";
                if (str != '') {
                    sql += ' where ' + str;
                }
                return [2 /*return*/, this.query(sql)];
            });
        });
    };
    MysqlConnectionManager.prototype.buildWhere = function (whereOption, desc) {
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
            var fieldName = 't_' + desc.tableName + '.' + name;
            "";
            if (Array.isArray(val)) {
                if (val[0] == 'like') {
                    buffer.push(" and " + fieldName + " like '" + val[1] + "'");
                }
                else if (val[0] == 'in') {
                    buffer.push(" and " + fieldName + " in ( " + val[1].map(function (item) { return "'" + item + "'"; }).join(',') + " )");
                }
            }
            else {
                if (val == null) {
                    buffer.push(" and " + fieldName + " is null");
                }
                else {
                    buffer.push(" and " + fieldName + " = '" + val + "'");
                }
            }
        }
        return buffer.join(" ").replace(/^\s*(and|or)/, "").trim();
    };
    MysqlConnectionManager.prototype.buildSql = function (findOption, desc) {
        var where;
        var group = '';
        var sql = "\n            select * from `" + this.config.database + "`.`" + (this.config.tablesPrefix + desc.tableName) + "` as t_" + desc.tableName + "\n        ";
        if (findOption.where) {
            var str = this.buildWhere(findOption.where, desc);
            if (str != '') {
                sql += ' where ' + str;
            }
        }
        if (findOption.group) {
            sql += ' group by ' + ("t_" + desc.tableName + "." + findOption.group);
        }
        if (findOption.order) {
            var buf = [];
            for (var name in findOption.order) {
                buf.push("t_" + desc.tableName + "." + name + " " + findOption.order[name]);
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
    };
    MysqlConnectionManager.prototype.find = function (findOption, desc) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var sql, ret;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = this.buildSql(findOption, desc);
                        return [4 /*yield*/, this.query(sql)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret || []];
                }
            });
        });
    };
    MysqlConnectionManager.prototype.insert = function (data, desc) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var fields, values, _a, _b, _c, key, val, dbname, sql, ret, e_2, _d;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        fields = [], values = [];
                        try {
                            for (_a = tslib_1.__values(Object.entries(data)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                _c = tslib_1.__read(_b.value, 2), key = _c[0], val = _c[1];
                                if (typeof val == 'function')
                                    continue;
                                fields.push("`" + key + "`");
                                if (val == null) {
                                    values.push('null');
                                }
                                else {
                                    values.push("'" + val + "'");
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        dbname = this.config.database;
                        sql = "\n            insert into `" + dbname + "`.`" + (this.config.tablesPrefix + desc.tableName) + "`\n                (\n                    " + fields.join(",") + "\n                )\n                values\n                (\n                    " + values.join(",") + "\n                );\n        ";
                        return [4 /*yield*/, this.query(sql)];
                    case 1:
                        ret = _e.sent();
                        data[desc.primary] = ret.insertId;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * 创建对应的连接池
     */
    MysqlConnectionManager.prototype.start = function () {
        this.pool = mysql.createPool({
            host: this.config.host,
            user: this.config.username,
            password: this.config.password,
            database: this.config.database,
            port: this.config.port,
        });
    };
    MysqlConnectionManager.prototype.query = function (sql) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                    return;
                }
                connection.query(sql, function (err, vals, fields) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(vals);
                });
            });
        });
    };
    return MysqlConnectionManager;
}());
exports.MysqlConnectionManager = MysqlConnectionManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RyaXZlci9teXNxbC9tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDZCQUErQjtBQU8vQjtJQTJKSSxnQ0FBbUIsTUFBbUI7UUFBbkIsV0FBTSxHQUFOLE1BQU0sQ0FBYTtJQUN0QyxDQUFDO0lBM0pLLHVDQUFNLEdBQVosVUFBZ0IsU0FBeUIsRUFBRSxJQUF1Qjs7Z0JBQzFELEdBQUcsRUFDSCxHQUFHOzs7OzhCQURHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQzs4QkFDaEMsZ0NBQ1UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLFlBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsaUJBQ3hGO3dCQUNELEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUNaLEdBQUcsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDO3dCQUMzQixDQUFDO3dCQUNNLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUE7NEJBQTVCLHNCQUFPLENBQUEsU0FBcUIsSUFBRyxJQUFJLEdBQUcsS0FBSyxFQUFDOzs7O0tBQy9DO0lBRUssdUNBQU0sR0FBWixVQUFnQixTQUF5QixFQUFFLElBQU8sRUFBRSxJQUF1Qjs7Z0JBQ25FLEdBQUcsRUFDSCxHQUFHOztzQkFERyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7c0JBQ2hDLDJCQUNLLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxZQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLDZCQUMxRSxDQUFDO29CQUNILElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQzs7d0JBQ2IsR0FBRyxDQUFDLENBQXFCLElB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
});
___scope___.file("repository.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var x_1 = require("./x");
var querybuilder_1 = require("./querybuilder");
var Repository = (function () {
    function Repository(factory) {
        this.factory = factory;
    }
    Repository.prototype.updateById = function (primaryKey, model) {
        return x_1.X.update(this.factory, primaryKey, model);
        // var desc = EntityMap.get(this.factory.name);
        // if(!desc){
        //     return false;
        // }
        // var condition = {};
        // condition[desc.primary] = 
        // return getConnection(desc.database).update({})
    };
    Repository.prototype.persist = function (entity) {
        return x_1.X.save(entity);
    };
    Repository.prototype.save = function (entity) {
        return x_1.X.save(entity);
    };
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
    Repository.prototype.findOne = function (findOption) {
        return x_1.X.findOne(this.factory, findOption);
        // findOption.limit = 1;
        // var ret = await this.find(findOption);
        // if(ret){
        //     return ret[0];
        // }
        // return new this.factory;
    };
    Repository.prototype.find = function (findOption) {
        return x_1.X.find(this.factory, findOption);
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
    };
    Repository.prototype.createQueryBuilder = function (alias) {
        return new querybuilder_1.QueryBuilder(this.factory, alias);
    };
    return Repository;
}());
exports.Repository = Repository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL3JlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5QkFBd0I7QUFDeEIsK0NBQThDO0FBd0M5QztJQUVJLG9CQUFtQixPQUFxQjtRQUFyQixZQUFPLEdBQVAsT0FBTyxDQUFjO0lBQ3hDLENBQUM7SUFFRCwrQkFBVSxHQUFWLFVBQVcsVUFBMkIsRUFBRSxLQUFpQjtRQUNyRCxNQUFNLENBQUMsS0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLFVBQW9CLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsK0NBQStDO1FBQy9DLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsSUFBSTtRQUNKLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsaURBQWlEO0lBQ3JELENBQUM7SUFLRCw0QkFBTyxHQUFQLFVBQVEsTUFBVztRQUNmLE1BQU0sQ0FBQyxLQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFJRCx5QkFBSSxHQUFKLFVBQUssTUFBVztRQUNaLE1BQU0sQ0FBQyxLQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILG9CQUFvQjtJQUNwQixtREFBbUQ7SUFDbkQsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsNEVBQTRFO0lBQzVFLElBQUk7SUFJSiw0QkFBTyxHQUFQLFVBQ0ksVUFBeUI7UUFFekIsTUFBTSxDQUFDLEtBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxVQUFVLENBQUMsQ0FBQztRQUUxQyx3QkFBd0I7UUFDeEIseUNBQXlDO1FBQ3pDLFdBQVc7UUFDWCxxQkFBcUI7UUFDckIsSUFBSTtRQUNKLDJCQUEyQjtJQUMvQixDQUFDO0lBRUQseUJBQUksR0FBSixVQUNJLFVBQTBCO1FBRTFCLE1BQU0sQ0FBQyxLQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFFdkMsK0NBQStDO1FBQy9DLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsSUFBSTtRQUNKLE1BQU07UUFDTix3QkFBd0I7UUFDeEIsTUFBTTtRQUNOLDRFQUE0RTtRQUM1RSwyQkFBMkI7UUFDM0IsY0FBYztRQUNkLDBDQUEwQztRQUMxQyxtREFBbUQ7UUFDbkQsUUFBUTtRQUNSLGdCQUFnQjtRQUNoQix5Q0FBeUM7UUFDekMsb0RBQW9EO1FBQ3BELFFBQVE7UUFDUixJQUFJO1FBQ0osaUJBQWlCO0lBRXJCLENBQUM7SUFHRCx1Q0FBa0IsR0FBbEIsVUFBbUIsS0FBYztRQUM3QixNQUFNLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVMLGlCQUFDO0FBQUQsQ0FBQyxBQXZGRCxJQXVGQztBQXZGWSxnQ0FBVSJ9
});
___scope___.file("querybuilder.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * 为了兼容typeorm而写，实际可以抛弃这个做查询
 */
var QueryBuilder = (function () {
    function QueryBuilder(factory, alias) {
        this.factory = factory;
        this.alias = alias;
    }
    QueryBuilder.prototype.andWhere = function (condition, replacement) {
        return this;
    };
    QueryBuilder.prototype.orWhere = function (condition, replacement) {
        return this;
    };
    QueryBuilder.prototype.where = function (condition, replacement) {
        return this;
    };
    QueryBuilder.prototype.getCount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    QueryBuilder.prototype.getMany = function () {
    };
    QueryBuilder.prototype.getManyAndCount = function () {
    };
    QueryBuilder.prototype.getOne = function () {
    };
    QueryBuilder.prototype.getSql = function () {
    };
    return QueryBuilder;
}());
exports.QueryBuilder = QueryBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlidWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi9tandvcmsvWG9ybS9zcmMvcXVlcnlidWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBOztHQUVHO0FBQ0g7SUFDSSxzQkFDWSxPQUFxQixFQUNyQixLQUFhO1FBRGIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFRO0lBR3pCLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsU0FBaUIsRUFBRSxXQUFtQjtRQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsU0FBaUIsRUFBRSxXQUFtQjtRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sU0FBaUIsRUFBRSxXQUFtQjtRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFSywrQkFBUSxHQUFkOzs7Ozs7S0FFQztJQUVELDhCQUFPLEdBQVA7SUFFQSxDQUFDO0lBRUQsc0NBQWUsR0FBZjtJQUVBLENBQUM7SUFFRCw2QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDZCQUFNLEdBQU47SUFFQSxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLG9DQUFZIn0=
});
___scope___.file("test/order.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var XEntity_1 = require("../decorator/XEntity");
var Link_1 = require("../decorator/Link");
var order_goods_1 = require("./order_goods");
var Order = (function () {
    function Order() {
    }
    return Order;
}());
tslib_1.__decorate([
    Link_1.OneToMany(order_goods_1.OrderGoods, "order_id"),
    tslib_1.__metadata("design:type", Array)
], Order.prototype, "order_goods", void 0);
Order = tslib_1.__decorate([
    XEntity_1.XEntity
], Order);
exports.Order = Order;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0U6L21qd29yay9Yb3JtL3NyYy90ZXN0L29yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdEQUErQztBQUMvQywwQ0FBOEM7QUFDOUMsNkNBQTJDO0FBRTNDLElBQWEsS0FBSztJQUFsQjtJQVdBLENBQUM7SUFBRCxZQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFERztJQURDLGdCQUFTLENBQUMsd0JBQVUsRUFBQyxVQUFVLENBQUM7OzBDQUNQO0FBVmpCLEtBQUs7SUFEakIsaUJBQU87R0FDSyxLQUFLLENBV2pCO0FBWFksc0JBQUsifQ==
});
___scope___.file("decorator/Link.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XEntity_1 = require("./XEntity");
// export function OneToMany(proto : Object,key : string) : void;
/**
 * 声明该元素关联的节点
 * @param entity
 */
function OneToMany(entity, linkKey) {
    return function (proto, key) {
        var info = XEntity_1.EntityMap.get(proto.constructor.name) || XEntity_1.InitEntityDescirption();
        info.external[key] = {
            entity: entity,
            key: linkKey,
            type: "1vn"
        };
    };
}
exports.OneToMany = OneToMany;
function ManyToOne(entity, linkKey) {
    return function (proto, key) {
        var info = XEntity_1.EntityMap.get(proto.constructor.name) || XEntity_1.InitEntityDescirption();
        info.external[key] = {
            entity: entity,
            key: linkKey,
            type: "nv1"
        };
    };
}
exports.ManyToOne = ManyToOne;
function OneToOne(entity, linkKey) {
    return function (proto, key) {
        var info = XEntity_1.EntityMap.get(proto.constructor.name) || XEntity_1.InitEntityDescirption();
        info.external[key] = {
            entity: entity,
            key: linkKey,
            type: "1v1"
        };
    };
}
exports.OneToOne = OneToOne;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RlY29yYXRvci9MaW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXdGO0FBRXhGLGlFQUFpRTtBQUNqRTs7O0dBR0c7QUFDSCxtQkFBNkIsTUFBaUIsRUFBRSxPQUFlO0lBQzNELE1BQU0sQ0FBQyxVQUFVLEtBQWEsRUFBRSxHQUFXO1FBQ3ZDLElBQUksSUFBSSxHQUFzQixtQkFBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFxQixFQUFFLENBQUM7UUFDL0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRztZQUNqQixNQUFNLEVBQUUsTUFBTTtZQUNkLEdBQUcsRUFBRSxPQUFPO1lBQ1osSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDO0lBQ04sQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQVRELDhCQVNDO0FBRUQsbUJBQTZCLE1BQWlCLEVBQUUsT0FBZTtJQUMzRCxNQUFNLENBQUMsVUFBVSxLQUFhLEVBQUUsR0FBVztRQUN2QyxJQUFJLElBQUksR0FBc0IsbUJBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBcUIsRUFBRSxDQUFDO1FBQy9GLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUc7WUFDakIsTUFBTSxFQUFFLE1BQU07WUFDZCxHQUFHLEVBQUUsT0FBTztZQUNaLElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQztJQUNOLENBQUMsQ0FBQTtBQUNMLENBQUM7QUFURCw4QkFTQztBQUVELGtCQUE0QixNQUFpQixFQUFFLE9BQWU7SUFDMUQsTUFBTSxDQUFDLFVBQVUsS0FBYSxFQUFFLEdBQVc7UUFDdkMsSUFBSSxJQUFJLEdBQXNCLG1CQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQXFCLEVBQUUsQ0FBQztRQUMvRixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHO1lBQ2pCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsR0FBRyxFQUFFLE9BQU87WUFDWixJQUFJLEVBQUUsS0FBSztTQUNkLENBQUM7SUFDTixDQUFDLENBQUE7QUFDTCxDQUFDO0FBVEQsNEJBU0MifQ==
});
___scope___.file("test/order_goods.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var XEntity_1 = require("../decorator/XEntity");
var Link_1 = require("../decorator/Link");
var order_1 = require("./order");
var OrderGoods = (function () {
    function OrderGoods() {
    }
    return OrderGoods;
}());
tslib_1.__decorate([
    Link_1.ManyToOne(order_1.Order, "order_id"),
    tslib_1.__metadata("design:type", typeof (_a = typeof order_1.Order !== "undefined" && order_1.Order) === "function" && _a || Object)
], OrderGoods.prototype, "order", void 0);
OrderGoods = tslib_1.__decorate([
    XEntity_1.XEntity
], OrderGoods);
exports.OrderGoods = OrderGoods;
var _a;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJfZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0U6L21qd29yay9Yb3JtL3NyYy90ZXN0L29yZGVyX2dvb2RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdEQUErQztBQUMvQywwQ0FBOEM7QUFDOUMsaUNBQWdDO0FBRWhDLElBQWEsVUFBVTtJQUF2QjtJQVFBLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBREc7SUFEQyxnQkFBUyxDQUFDLGFBQUssRUFBQyxVQUFVLENBQUM7MERBQ3BCLGFBQUssb0JBQUwsYUFBSzt5Q0FBQztBQVBMLFVBQVU7SUFEdEIsaUJBQU87R0FDSyxVQUFVLENBUXRCO0FBUlksZ0NBQVUifQ==
});
___scope___.file("decorator/PrimaryGeneratedColumn.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrimaryColumn_1 = require("./PrimaryColumn");
function PrimaryGeneratedColumn(column) {
    return PrimaryColumn_1.PrimaryColumn(column);
}
exports.PrimaryGeneratedColumn = PrimaryGeneratedColumn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbWFyeUdlbmVyYXRlZENvbHVtbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RlY29yYXRvci9QcmltYXJ5R2VuZXJhdGVkQ29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQWdEO0FBQ2hELGdDQUF1QyxNQUFZO0lBQy9DLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFGRCx3REFFQyJ9
});
___scope___.file("driver/driver.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi9tandvcmsvWG9ybS9zcmMvZHJpdmVyL2RyaXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0=
});
___scope___.file("gc.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * 垃圾回收器，负责回收被监视的对象
 * 回收逻辑
 *  1.当对象被监视的时候，对象被放入a容器，
 *  2.30秒后，被标记的对象被放入b容器，待清除
 *  3.此时如果b容器发生变动，对象仍旧回a容器
 *  4.30秒后，如果b容器内的元素不再发生任何变动，则清除b容器内所有的引用，回收系统资源
 */
var GC_STEP_TIME = 30000;
var GC = (function () {
    function GC() {
        this.boxA = new Map();
        this.boxB = new Map();
    }
    GC.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            try {
                //清空所有B容器的元素
                for (var _a = tslib_1.__values(_this.boxB), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var _c = tslib_1.__read(_b.value, 2), key = _c[0], val = _c[1];
                    _this.boxB.delete(key);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
            //将容器A的东西全部放入容器B
            _this.boxB = _this.boxA;
            _this.boxA = new Map();
            console.log("容器A大小", _this.boxA.size);
            console.log("容器B大小", _this.boxB.size);
            var e_1, _d;
        }, GC_STEP_TIME);
    };
    GC.prototype.addObserveObject = function (obj) {
        var _this = this;
        var watching = {
            changed: {}
        };
        var proxy = new Proxy(obj, {
            set: function (obj, key, val) {
                watching.changed[key] = true;
                //如果这时候元素在B容器，那么放回A容器
                if (_this.boxB.has(proxy)) {
                    _this.boxB.delete(proxy);
                    _this.boxA.set(proxy, watching);
                }
                else if (!_this.boxA.has(proxy)) {
                    _this.boxA.set(proxy, watching);
                }
                return obj[key] = val;
            }
        });
        //首先放入容器A
        this.boxA.set(proxy, watching);
        return proxy;
    };
    GC.prototype.getChanged = function (obj) {
        var val = this.boxA.get(obj) || this.boxB.get(obj);
        if (!val) {
            return [];
        }
        return Object.keys(val.changed);
    };
    return GC;
}());
exports.ObservingObject = new GC;
/**
 * 开启
 */
// ObservingObject.start(); 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0U6L21qd29yay9Yb3JtL3NyYy9nYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBRTNCO0lBQUE7UUFDVyxTQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixTQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQWlENUIsQ0FBQztJQS9DRyxrQkFBSyxHQUFMO1FBQUEsaUJBY0M7UUFiRyxXQUFXLENBQUM7O2dCQUNSLFlBQVk7Z0JBQ1osR0FBRyxDQUFDLENBQXFCLElBQUEsS0FBQSxpQkFBQSxLQUFJLENBQUMsSUFBSSxDQUFBLGdCQUFBO29CQUF2QixJQUFBLGdDQUFVLEVBQVQsV0FBRyxFQUFFLFdBQUc7b0JBQ2hCLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN6Qjs7Ozs7Ozs7O1lBQ0QsZ0JBQWdCO1lBQ2hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQztZQUN0QixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFFdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztRQUV6QyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELDZCQUFnQixHQUFoQixVQUFpQixHQUFXO1FBQTVCLGlCQXNCQztRQXJCRyxJQUFJLFFBQVEsR0FBRztZQUNYLE9BQU8sRUFBRSxFQUNSO1NBQ0osQ0FBQTtRQUNELElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQVUsRUFBRTtZQUM5QixHQUFHLEVBQUUsVUFBQyxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVE7Z0JBQzdCLFFBQVEsQ0FBQyxPQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUN0QyxxQkFBcUI7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUMxQixDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsU0FBUztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCx1QkFBVSxHQUFWLFVBQVcsR0FBVztRQUNsQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxFQUFFLENBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7WUFDTCxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0wsU0FBQztBQUFELENBQUMsQUFuREQsSUFtREM7QUFHWSxRQUFBLGVBQWUsR0FBRyxJQUFJLEVBQUUsQ0FBQztBQUV0Qzs7R0FFRztBQUNILDJCQUEyQiJ9
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