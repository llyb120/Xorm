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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBLGlCQWlHQTs7O0FBckdBLGdEQUFnRDtBQUNoRCwwREFBMEQ7QUFDMUQsNENBQTRDO0FBQzVDLGtEQUFrRDtBQUNsRCxnREFBb0U7QUFDcEUsbUNBQTJDO0FBRTNDLDBCQUF5QjtBQUN6Qiw0QkFBd0M7QUFLeEMsaUJBQWlCO0FBQ2pCLG9DQUFvQztBQUNwQyxpQkFBaUI7QUFDakIsS0FBQyxDQUFDLEtBQUssQ0FDSDtJQUNJLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLE1BQU0sRUFBRSxPQUFPO0lBQ2YsTUFBTSxFQUFFLFdBQVc7SUFDbkIsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVLEVBQUUsTUFBTTtJQUNsQixVQUFVLEVBQUUsS0FBSztJQUNqQixVQUFVLEVBQUUsT0FBTztJQUNuQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLEtBQUs7SUFDTCxtQkFBbUI7SUFDbkIsR0FBRztJQUNILEtBQUs7SUFDTCxrQkFBa0I7SUFDbEIsR0FBRztJQUNILEtBQUs7SUFDTCxjQUFjLEVBQUUsS0FBSztDQUN4QixDQUNKLENBQUMsSUFBSSxDQUFDLFVBQU0sUUFBUTs7UUFFYixDQUFDLE9Bc0JELENBQUM7Ozs7b0JBdEJHLElBQUksZUFBTTtnQkFDbEIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFakMscUJBQU0sS0FBQyxDQUFDLElBQUksQ0FBQyxlQUFNLEVBQUM7d0JBQzFCLEtBQUssRUFBRTs0QkFDSCxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDOzRCQUM3QixTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDOzRCQUMvQixlQUFlLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7NEJBQ25ELEdBQUcsRUFBRTtnQ0FDRCxTQUFTLEVBQUUsQ0FBQzs2QkFDZjs0QkFDRCxFQUFFLEVBQUU7Z0NBQ0EsV0FBVyxFQUFFLE1BQU07NkJBQ3RCO3lCQUNKO3dCQUNELEtBQUssRUFBRTs0QkFDSCxTQUFTLEVBQUUsS0FBSzt5QkFDbkI7d0JBQ0QsS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLEtBQUssRUFBRSxFQUFFO3FCQUNaLENBQUMsRUFBQTs7c0JBakJRLFNBaUJSO29CQUNNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixLQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVWLENBQUMsR0FBRyxTQUFTLENBQUM7Z0JBRWQsS0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFNLENBQUM7Ozs7cUJBRW5CLENBQUMsQ0FBQztnQkFFSCxXQUFXLENBQUM7b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBaUIsQ0FBQyxDQUFBO2dCQUNsQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUE7Z0JBR1IsNENBQTRDO2dCQUU1Qyw4RUFBOEU7Z0JBQzlFLHNCQUFPOzs7S0FnQlYsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUM7SUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN2QixDQUFDLENBQUMsQ0FBQSJ9