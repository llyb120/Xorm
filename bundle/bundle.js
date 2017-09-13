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
        if (Array.isArray(models)) {
            models = models;
            var ret = [];
            try {
                for (var models_1 = tslib_1.__values(models), models_1_1 = models_1.next(); !models_1_1.done; models_1_1 = models_1.next()) {
                    var model_1 = models_1_1.value;
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
            return ret;
        }
        else {
            var model = models;
            //查找描述信息
            var desc = XEntity_1.EntityMap.get(model.__proto__.constructor.name);
            if (!desc) {
                return model;
            }
            //没有发生任何改变的情况
            var changed = Object.keys(model);
            // var changed = ObservingObject.getChanged(model);
            if (!changed || !changed.length) {
                return model;
            }
            // var entries = Object.entries(model);
            //查询主键，如果没有的情况，默认为“ID"
            var constructor = model.__proto__.constructor;
            if (changed.includes(desc.primary) || !(desc.primary in model)) {
                // let ret = this.getRepository(constructor).insert(model);
                var ret_1 = this.getConnection(desc.database).insert(model, desc);
                return ret_1;
            }
            else {
                if (!(desc.primary in model)) {
                    return model;
                }
                this.getRepository(constructor).updateById(model[desc.primary], model);
            }
        }
        var e_1, _a;
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
 ```````````* 得到一个连接
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQW1HO0FBSW5HLGtEQUFnRTtBQUNoRSx1Q0FBdUM7QUFDdkMsMkNBQXNEO0FBS3REO0lBQUE7UUFFWSxpQkFBWSxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO0lBc04zRCxDQUFDO0lBcE1HLDZCQUFJLEdBQUosVUFBUSxNQUFXO1FBQ2YsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxHQUFHLE1BQWEsQ0FBQztZQUN2QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7O2dCQUNiLEdBQUcsQ0FBQyxDQUFjLElBQUEsV0FBQSxpQkFBQSxNQUFNLENBQUEsOEJBQUE7b0JBQW5CLElBQUksT0FBSyxtQkFBQTtvQkFDVixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDOUI7Ozs7Ozs7OztZQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLEtBQUssR0FBTSxNQUFNLENBQUM7WUFDdEIsUUFBUTtZQUNSLElBQUksSUFBSSxHQUFHLG1CQUFTLENBQUMsR0FBRyxDQUFFLEtBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDUixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFFRCxhQUFhO1lBQ2IsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxtREFBbUQ7WUFDbkQsRUFBRSxDQUFDLENBQUMsQ0FB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
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
    MysqlConnectionManager.prototype.buildWhere = function (whereOption, desc) {
        var buffer = [];
        //build and
        if (whereOption.and) {
            var str = this.buildWhere(whereOption.and, desc).trim();
            if (str != '') {
                buffer.push(' and (' + str + ')');
            }
            delete whereOption.and;
        }
        //build or
        if (whereOption.or) {
            var str = this.buildWhere(whereOption.or, desc);
            if (str.trim() != '') {
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
        return buffer.join(" ").replace(/^\s*(and|or)/, "");
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
            var fields, values, _a, _b, _c, key, val, dbname, sql, ret, e_1, _d;
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
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RyaXZlci9teXNxbC9tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDZCQUErQjtBQU8vQjtJQXVISSxnQ0FBbUIsTUFBbUI7UUFBbkIsV0FBTSxHQUFOLE1BQU0sQ0FBYTtJQUN0QyxDQUFDO0lBdEhPLDJDQUFVLEdBQWxCLFVBQXNCLFdBQTJCLEVBQUUsSUFBdUI7UUFDdEUsSUFBSSxNQUFNLEdBQWEsRUFBRSxDQUFDO1FBQzFCLFdBQVc7UUFDWCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEQsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFDRCxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDM0IsQ0FBQztRQUNELFVBQVU7UUFDVixFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBQ0QsT0FBTyxXQUFXLENBQUMsRUFB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
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL3JlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5QkFBd0I7QUFDeEIsK0NBQThDO0FBbUM5QztJQUVJLG9CQUFtQixPQUFxQjtRQUFyQixZQUFPLEdBQVAsT0FBTyxDQUFjO0lBQ3hDLENBQUM7SUFFRCwrQkFBVSxHQUFWLFVBQThCLFVBQWdCLEVBQUUsS0FBUTtJQUV4RCxDQUFDO0lBS0QsNEJBQU8sR0FBUCxVQUFRLE1BQVc7UUFDZixNQUFNLENBQUMsS0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBSUQseUJBQUksR0FBSixVQUFLLE1BQVc7UUFDWixNQUFNLENBQUMsS0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxvQkFBb0I7SUFDcEIsbURBQW1EO0lBQ25ELG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLDRFQUE0RTtJQUM1RSxJQUFJO0lBSUosNEJBQU8sR0FBUCxVQUNJLFVBQXlCO1FBRXpCLE1BQU0sQ0FBQyxLQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFFMUMsd0JBQXdCO1FBQ3hCLHlDQUF5QztRQUN6QyxXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLElBQUk7UUFDSiwyQkFBMkI7SUFDL0IsQ0FBQztJQUVELHlCQUFJLEdBQUosVUFDSSxVQUEwQjtRQUUxQixNQUFNLENBQUMsS0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXZDLCtDQUErQztRQUMvQyxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLElBQUk7UUFDSixNQUFNO1FBQ04sd0JBQXdCO1FBQ3hCLE1BQU07UUFDTiw0RUFBNEU7UUFDNUUsMkJBQTJCO1FBQzNCLGNBQWM7UUFDZCwwQ0FBMEM7UUFDMUMsbURBQW1EO1FBQ25ELFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIseUNBQXlDO1FBQ3pDLG9EQUFvRDtRQUNwRCxRQUFRO1FBQ1IsSUFBSTtRQUNKLGlCQUFpQjtJQUVyQixDQUFDO0lBR0QsdUNBQWtCLEdBQWxCLFVBQW1CLEtBQWM7UUFDN0IsTUFBTSxDQUFDLElBQUksMkJBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTCxpQkFBQztBQUFELENBQUMsQUFoRkQsSUFnRkM7QUFoRlksZ0NBQVUifQ==
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