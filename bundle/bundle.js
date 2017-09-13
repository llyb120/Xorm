(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("test/test.js", function(exports, require, module, __filename, __dirname){

"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var member_1 = require("./member");
var x_1 = require("../x");
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
                    })
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
                ];
            case 1:
                ret = _a.sent();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL3Rlc3QvdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsaUJBbUdBOzs7QUFsR0EsbUNBQTJDO0FBRTNDLDBCQUF5QjtBQUd6QixLQUFDLENBQUMsS0FBSyxDQUNIO0lBQ0ksTUFBTSxFQUFFLFNBQVM7SUFDakIsTUFBTSxFQUFFLE9BQU87SUFDZixNQUFNLEVBQUUsV0FBVztJQUNuQixNQUFNLEVBQUUsSUFBSTtJQUNaLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFVBQVUsRUFBRSxPQUFPO0lBQ25CLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsS0FBSztJQUNMLG1CQUFtQjtJQUNuQixHQUFHO0lBQ0gsS0FBSztJQUNMLGtCQUFrQjtJQUNsQixHQUFHO0lBQ0gsS0FBSztJQUNMLGNBQWMsRUFBRSxLQUFLO0NBQ3hCLENBQ0osQ0FBQyxJQUFJLENBQUMsVUFBTSxRQUFRO1FBRWIsQ0FBQzs7OztvQkFBRyxJQUFJLGVBQU07Z0JBQ2xCLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUdOLHFCQUFNLEtBQUMsQ0FBQyxJQUFJLENBQUMsZUFBTSxFQUFFO3dCQUMzQixLQUFLLEVBQUU7NEJBQ0gsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQzs0QkFDN0IsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDL0IsZUFBZSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDOzRCQUNuRCxHQUFHLEVBQUU7Z0NBQ0QsU0FBUyxFQUFFLENBQUM7NkJBQ2Y7NEJBQ0QsRUFBRSxFQUFFO2dDQUNBLFdBQVcsRUFBRSxNQUFNOzZCQUN0Qjt5QkFDSjt3QkFDRCxLQUFLLEVBQUU7NEJBQ0gsU0FBUyxFQUFFLEtBQUs7eUJBQ25CO3dCQUNELEtBQUssRUFBRSxXQUFXO3dCQUNsQixLQUFLLEVBQUUsRUFBRTtxQkFDWixDQUFDO29CQUNGLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQix5QkFBeUI7b0JBQ3pCLElBQUk7b0JBQ0oscUJBQXFCO29CQUNyQixrQ0FBa0M7b0JBRWxDLFVBQVU7b0JBRVYsMEJBQTBCO29CQUMxQixnQ0FBZ0M7b0JBQ2hDLGFBQWE7b0JBRWIsaUJBQWlCO29CQUVqQiw0QkFBNEI7b0JBRTVCLE1BQU07b0JBRU4sNEJBQTRCO29CQUM1QixxQ0FBcUM7b0JBQ3JDLFlBQVk7b0JBR1osNENBQTRDO29CQUU1Qyw4RUFBOEU7a0JBM0I1RTs7c0JBakJRLFNBaUJSO2dCQUNGLGtCQUFrQjtnQkFDbEIsbUJBQW1CO2dCQUNuQix5QkFBeUI7Z0JBQ3pCLElBQUk7Z0JBQ0oscUJBQXFCO2dCQUNyQixrQ0FBa0M7Z0JBRWxDLFVBQVU7Z0JBRVYsMEJBQTBCO2dCQUMxQixnQ0FBZ0M7Z0JBQ2hDLGFBQWE7Z0JBRWIsaUJBQWlCO2dCQUVqQiw0QkFBNEI7Z0JBRTVCLE1BQU07Z0JBRU4sNEJBQTRCO2dCQUM1QixxQ0FBcUM7Z0JBQ3JDLFlBQVk7Z0JBR1osNENBQTRDO2dCQUU1Qyw4RUFBOEU7Z0JBQzlFLHNCQUFPOzs7S0FnQlYsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUM7SUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN2QixDQUFDLENBQUMsQ0FBQSJ9
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
var Profile = (function () {
    function Profile() {
    }
    return Profile;
}());
tslib_1.__decorate([
    PrimaryColumn_1.PrimaryColumn(),
    tslib_1.__metadata("design:type", Number)
], Profile.prototype, "member_id", void 0);
Profile = tslib_1.__decorate([
    XEntity_1.XEntity
], Profile);
exports.Profile = Profile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi9tandvcmsvWG9ybS9zcmMvdGVzdC9tZW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0RBQStDO0FBRS9DLDREQUEyRDtBQUczRCxJQUFhLE1BQU07SUFBbkI7SUFhQSxDQUFDO0lBSkcsc0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFFTCxhQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFWRztJQURDLDZCQUFhLEVBQUU7O3lDQUNVO0FBSGpCLE1BQU07SUFEbEIsaUJBQU8sRUFBRTtHQUNHLE1BQU0sQ0FhbEI7QUFiWSx3QkFBTTtBQWdCbkIsSUFBYSxPQUFPO0lBQXBCO0lBUUEsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQUxHO0lBREMsNkJBQWEsRUFBRTs7MENBQ1U7QUFIakIsT0FBTztJQURuQixpQkFBTztHQUNLLE9BQU8sQ0FRbkI7QUFSWSwwQkFBTyJ9
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
        tableName: ''
    };
}
exports.InitEntityDescirption = InitEntityDescirption;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWEVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RlY29yYXRvci9YRW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esd0NBQXdDO0FBSzdCLFFBQUEsU0FBUyxHQUFHLElBQUksR0FBRyxFQUE2QixDQUFDO0FBZTVELGlCQUF3QixLQUF5QztJQUM3RCxJQUFJLElBQUksR0FBRyxTQUFTLENBQUM7SUFDckIsSUFBSSxLQUFLLEdBQUcsVUFBVSxNQUFnQjtRQUNsQyxJQUFJLElBQXVCLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxxQkFBcUIsRUFBRSxDQUFDO1lBQy9CLGlCQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxHQUFHLGlCQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQXNCLENBQUM7UUFDM0QsQ0FBQztRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztZQUN0RCxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUTtRQUNSLG9CQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLG9CQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0RCxvQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEMsK0RBQStEO1FBQy9ELHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIseURBQXlEO1FBQ3pELFFBQVE7UUFDUixJQUFJO1FBQ0osY0FBYztRQUNkLDBDQUEwQztRQUMxQywwQkFBMEI7UUFDMUIsTUFBTTtRQUNOLG1CQUFtQjtRQUNuQiwrQkFBK0I7UUFDL0Isd0JBQXdCO1FBRXhCLHFCQUFxQjtRQUNyQixNQUFNO1FBQ04sSUFBSTtJQUNSLENBQUMsQ0FBQTtJQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDUixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQWpERCwwQkFpREM7QUFPVSxRQUFBLGlCQUFpQixHQUFHLElBQUksT0FBTyxFQUF5QixDQUFDO0FBVXBFO0lBQ0ksTUFBTSxDQUFDO1FBQ0gsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFNBQVMsRUFBRSxFQUFFO0tBQ2hCLENBQUE7QUFDTCxDQUFDO0FBUEQsc0RBT0MifQ==
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQW1HO0FBSW5HLGtEQUFnRTtBQUNoRSx1Q0FBdUM7QUFDdkMsMkNBQXVGO0FBS3ZGO0lBQUE7UUFFWSxpQkFBWSxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO0lBb1EzRCxDQUFDO0lBbFBTLDZCQUFJLEdBQVYsVUFBYyxNQUFXOztnQkFHYixHQUFHLHdCQUNFLE9BQUssRUFNVixLQUFLLEVBRUwsSUFBSSxFQU1KLE9BQU8sRUFRUCxXQUFXLFNBY1AsU0FBUyxFQUVULFVBQVU7Ozs7NkJBekNsQixLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFyQix3QkFBcUI7d0JBQ3JCLE1BQU0sR0FBRyxNQUFhLENBQUM7OEJBQ2IsRUFBRTs7NEJBQ1osR0FBRyxDQUFDLFlBQWMsaUJBQUEsTUFBTSxDQUFBOztnQ0FDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQUssQ0FBQyxDQUFDLENBQUM7NkJBQzlCOzs7Ozs7Ozs7d0JBQ0Qsc0JBQU8sR0FBRyxFQUFDOztnQ0FHSSxNQUFNOytCQUVWLG1CQUFTLENBQUMsR0FBRyxDQUFFLEtBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzt3QkFDbkUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLEdBQUksS0FBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ25GLENBQUM7a0NBR2EsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQ2hDLG1EQUFtRDt3QkFDbkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxD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
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
            var fieldName = desc.tableName + '.' + name;
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
        var sql = "\n            select * from `" + this.config.database + "`.`" + (this.config.tablesPrefix + desc.tableName) + "` as " + desc.tableName + "\n        ";
        if (findOption.where) {
            var str = this.buildWhere(findOption.where, desc);
            if (str != '') {
                sql += ' where ' + str;
            }
        }
        if (findOption.group) {
            sql += ' group by ' + (desc.tableName + "." + findOption.group);
        }
        if (findOption.order) {
            var buf = [];
            for (var name in findOption.order) {
                buf.push(desc.tableName + "." + name + " " + findOption.order[name]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RyaXZlci9teXNxbC9tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDZCQUErQjtBQU8vQjtJQStJSSxnQ0FBbUIsTUFBbUI7UUFBbkIsV0FBTSxHQUFOLE1BQU0sQ0FBYTtJQUN0QyxDQUFDO0lBOUlLLHVDQUFNLEdBQVosVUFBZ0IsU0FBeUIsRUFBRSxJQUFPLEVBQUMsSUFBd0I7O2dCQUNuRSxHQUFHLEVBQ0gsR0FBRzs7c0JBREcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDO3NCQUMvQiwyQkFDSyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsWUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyw2QkFDMUUsQ0FBQztvQkFDSCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7O3dCQUNiLEdBQUcsQ0FBQSxDQUFvQixJQUFBLEtBQUEsaUJBQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSxnQkFBQTs0QkFBakMsSUFBQSxnQ0FBUyxFQUFSLFdBQUcsRUFBQyxXQUFHOzRCQUNkLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQzs0QkFDM0MsRUFBRSxDQUFBLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7Z0NBQ1osR0FBRyxDQUFDLElBQUksQ0FBSSxTQUFTLFlBQVMsQ0FBQyxDQUFDOzRCQUNwQyxDQUFDOzRCQUNELElBQUksQ0FBQSxDQUFDO2dDQUNELEdBQUcsQ0FBQyxJQUFJLENBQUksU0FBUyxZQUFPLEdBQUcsTUFBRyxDQUFDLENBQUM7NEJBQ3hDLENBQUM7eUJBQ0o7Ozs7Ozs7OztvQkFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENB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
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL3JlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5QkFBd0I7QUFDeEIsK0NBQThDO0FBbUM5QztJQUVJLG9CQUFtQixPQUFxQjtRQUFyQixZQUFPLEdBQVAsT0FBTyxDQUFjO0lBQ3hDLENBQUM7SUFFRCwrQkFBVSxHQUFWLFVBQVcsVUFBMkIsRUFBRSxLQUFpQjtRQUNyRCxNQUFNLENBQUMsS0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLFVBQW9CLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsK0NBQStDO1FBQy9DLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsSUFBSTtRQUNKLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsaURBQWlEO0lBQ3JELENBQUM7SUFLRCw0QkFBTyxHQUFQLFVBQVEsTUFBVztRQUNmLE1BQU0sQ0FBQyxLQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFJRCx5QkFBSSxHQUFKLFVBQUssTUFBVztRQUNaLE1BQU0sQ0FBQyxLQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILG9CQUFvQjtJQUNwQixtREFBbUQ7SUFDbkQsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsNEVBQTRFO0lBQzVFLElBQUk7SUFJSiw0QkFBTyxHQUFQLFVBQ0ksVUFBeUI7UUFFekIsTUFBTSxDQUFDLEtBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxVQUFVLENBQUMsQ0FBQztRQUUxQyx3QkFBd0I7UUFDeEIseUNBQXlDO1FBQ3pDLFdBQVc7UUFDWCxxQkFBcUI7UUFDckIsSUFBSTtRQUNKLDJCQUEyQjtJQUMvQixDQUFDO0lBRUQseUJBQUksR0FBSixVQUNJLFVBQTBCO1FBRTFCLE1BQU0sQ0FBQyxLQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFFdkMsK0NBQStDO1FBQy9DLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsSUFBSTtRQUNKLE1BQU07UUFDTix3QkFBd0I7UUFDeEIsTUFBTTtRQUNOLDRFQUE0RTtRQUM1RSwyQkFBMkI7UUFDM0IsY0FBYztRQUNkLDBDQUEwQztRQUMxQyxtREFBbUQ7UUFDbkQsUUFBUTtRQUNSLGdCQUFnQjtRQUNoQix5Q0FBeUM7UUFDekMsb0RBQW9EO1FBQ3BELFFBQVE7UUFDUixJQUFJO1FBQ0osaUJBQWlCO0lBRXJCLENBQUM7SUFHRCx1Q0FBa0IsR0FBbEIsVUFBbUIsS0FBYztRQUM3QixNQUFNLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVMLGlCQUFDO0FBQUQsQ0FBQyxBQXZGRCxJQXVGQztBQXZGWSxnQ0FBVSJ9
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