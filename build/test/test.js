"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// import { Repository } from './../repository';
// import { getEntityManager } from './../entity_manager';
// import { getConnection } from '../index';
// import { IDriverBase } from '../driver/driver';
var XEntity_1 = require("../decorator/XEntity");
var member_1 = require("./member");
var x_1 = require("../x");
var gc_1 = require("../gc");
function _where(c) {
    console.log(1);
}
var b = (function () {
    function b(factory) {
        this.factory = factory;
    }
    b.c = function (d) {
    };
    b.prototype._where = function (c) {
        console.log(1);
    };
    return b;
}());
b.c({});
// console.log(a)
// var d = EntityWatchingMap.get(a);
// console.log(d)
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
    var _this = this;
    var a, ret, b;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                a = new member_1.Member;
                a.member_id = 1;
                console.log(gc_1.ObservingObject.getChanged(a));
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
                b = ret[0];
                b.member_name = 'fuck';
                console.log(x_1.X.getChanged(b));
                x_1.X.save(b);
                b = undefined;
                x_1.X.transition(function (x) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        return [2 /*return*/];
                    });
                }); });
                setInterval(function () {
                    console.log(XEntity_1.EntityWatchingMap);
                }, 10000);
                // getEntityManager().getRepository(Member);
                // var a = getEntityManager().getRepository(Member).createQueryBuilder("cubi")
                return [2 /*return*/];
        }
    });
}); }).catch(function (e) {
    console.log(e);
    console.log("Fuck");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBLGlCQWdJQTs7O0FBcElBLGdEQUFnRDtBQUNoRCwwREFBMEQ7QUFDMUQsNENBQTRDO0FBQzVDLGtEQUFrRDtBQUNsRCxnREFBb0U7QUFDcEUsbUNBQTJDO0FBRTNDLDBCQUF5QjtBQUN6Qiw0QkFBd0M7QUFFeEMsZ0JBQW1CLENBSWxCO0lBRUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBQ0Q7SUFDSSxXQUNXLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7SUFHaEMsQ0FBQztJQUNNLEdBQUMsR0FBUixVQUFTLENBRVI7SUFDRCxDQUFDO0lBRUQsa0JBQU0sR0FBTixVQUFPLENBSU47UUFFRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFHTCxRQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQUVELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFFSCxDQUFDLENBQUE7QUFDRixpQkFBaUI7QUFDakIsb0NBQW9DO0FBQ3BDLGlCQUFpQjtBQUNqQixLQUFDLENBQUMsS0FBSyxDQUNIO0lBQ0ksTUFBTSxFQUFFLFNBQVM7SUFDakIsTUFBTSxFQUFFLE9BQU87SUFDZixNQUFNLEVBQUUsV0FBVztJQUNuQixNQUFNLEVBQUUsSUFBSTtJQUNaLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFVBQVUsRUFBRSxPQUFPO0lBQ25CLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsS0FBSztJQUNMLG1CQUFtQjtJQUNuQixHQUFHO0lBQ0gsS0FBSztJQUNMLGtCQUFrQjtJQUNsQixHQUFHO0lBQ0gsS0FBSztJQUNMLGNBQWMsRUFBRSxLQUFLO0NBQ3hCLENBQ0osQ0FBQyxJQUFJLENBQUMsVUFBTSxRQUFROztRQUViLENBQUMsT0FzQkQsQ0FBQzs7OztvQkF0QkcsSUFBSSxlQUFNO2dCQUNsQixDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVqQyxxQkFBTSxLQUFDLENBQUMsSUFBSSxDQUFDLGVBQU0sRUFBRTt3QkFDM0IsS0FBSyxFQUFFOzRCQUNILFdBQVcsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7NEJBQzdCLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBQy9CLGVBQWUsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQzs0QkFDbkQsR0FBRyxFQUFFO2dDQUNELFNBQVMsRUFBRSxDQUFDOzZCQUNmOzRCQUNELEVBQUUsRUFBRTtnQ0FDQSxXQUFXLEVBQUUsTUFBTTs2QkFDdEI7eUJBQ0o7d0JBQ0QsS0FBSyxFQUFFOzRCQUNILFNBQVMsRUFBRSxLQUFLO3lCQUNuQjt3QkFDRCxLQUFLLEVBQUUsV0FBVzt3QkFDbEIsS0FBSyxFQUFFLEVBQUU7cUJBQ1osQ0FBQyxFQUFBOztzQkFqQlEsU0FpQlI7b0JBQ00sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDZCxDQUFDLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztnQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEtBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRVYsQ0FBQyxHQUFHLFNBQVMsQ0FBQztnQkFFZCxLQUFDLENBQUMsVUFBVSxDQUFDLFVBQU0sQ0FBQzs7OztxQkFFbkIsQ0FBQyxDQUFDO2dCQUVILFdBQVcsQ0FBQztvQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUFpQixDQUFDLENBQUE7Z0JBQ2xDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQTtnQkFHVCw0Q0FBNEM7Z0JBRTVDLDhFQUE4RTtnQkFDOUUsc0JBQU87OztLQWdCVixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsQ0FBQztJQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQyxDQUFBIn0=