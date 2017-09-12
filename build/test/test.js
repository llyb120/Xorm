"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// import { Repository } from './../repository';
// import { getEntityManager } from './../entity_manager';
// import { getConnection } from '../index';
// import { IDriverBase } from '../driver/driver';
var x_1 = require("../x");
var XEntity_1 = require("../decorator/XEntity");
var member_1 = require("./member");
// console.log("cubi")
// var a=  new Member;
// var b = new Profile
// a.member_add_time = 123;
var c = (function (_super) {
    tslib_1.__extends(c, _super);
    function c() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return c;
}(WeakMap));
var 
// console.log(a)
// var d = EntityWatchingMap.get(a);
// console.log(d)
X, start = ({
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
                console.log(x_1.X.getChanged(a));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBLGlCQXdHQTs7O0FBNUdBLGdEQUFnRDtBQUNoRCwwREFBMEQ7QUFDMUQsNENBQTRDO0FBQzVDLGtEQUFrRDtBQUNsRCwwQkFBeUI7QUFDekIsZ0RBQW9FO0FBQ3BFLG1DQUEyQztBQUkzQyxzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUV0QiwyQkFBMkI7QUFDM0I7SUFBZ0IsNkJBQU87SUFBdkI7O0lBRUEsQ0FBQztJQUFELFFBQUM7QUFBRCxDQUFDLEFBRkQsQ0FBZ0IsT0FBTyxHQUV0QjtBQUNEO0FBRUEsaUJBQWlCO0FBQ2pCLG9DQUFvQztBQUNwQyxpQkFBaUI7QUFDakIsQ0FBQyxFQUFDLEtBQUssR0FBQSxDQUNIO0lBQ0ksTUFBTSxFQUFFLFNBQVM7SUFDakIsTUFBTSxFQUFFLE9BQU87SUFDZixNQUFNLEVBQUUsV0FBVztJQUNuQixNQUFNLEVBQUUsSUFBSTtJQUNaLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFVBQVUsRUFBRSxPQUFPO0lBQ25CLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsS0FBSztJQUNMLG1CQUFtQjtJQUNuQixHQUFHO0lBQ0gsS0FBSztJQUNMLGtCQUFrQjtJQUNsQixHQUFHO0lBQ0gsS0FBSztJQUNMLGNBQWMsRUFBRSxLQUFLO0NBQ3hCLENBQ0osQ0FBQyxJQUFJLENBQUMsVUFBTSxRQUFROztRQUViLENBQUMsT0FzQkQsQ0FBQzs7OztvQkF0QkcsSUFBSSxlQUFNO2dCQUNsQixDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRW5CLHFCQUFNLEtBQUMsQ0FBQyxJQUFJLENBQUMsZUFBTSxFQUFDO3dCQUMxQixLQUFLLEVBQUU7NEJBQ0gsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQzs0QkFDN0IsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDL0IsZUFBZSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDOzRCQUNuRCxHQUFHLEVBQUU7Z0NBQ0QsU0FBUyxFQUFFLENBQUM7NkJBQ2Y7NEJBQ0QsRUFBRSxFQUFFO2dDQUNBLFdBQVcsRUFBRSxNQUFNOzZCQUN0Qjt5QkFDSjt3QkFDRCxLQUFLLEVBQUU7NEJBQ0gsU0FBUyxFQUFFLEtBQUs7eUJBQ25CO3dCQUNELEtBQUssRUFBRSxXQUFXO3dCQUNsQixLQUFLLEVBQUUsRUFBRTtxQkFDWixDQUFDLEVBQUE7O3NCQWpCUSxTQWlCUjtvQkFDTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNkLENBQUMsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsS0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFVixDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUVkLEtBQUMsQ0FBQyxVQUFVLENBQUMsVUFBTSxDQUFDOzs7O3FCQUVuQixDQUFDLENBQUM7Z0JBRUgsV0FBVyxDQUFDO29CQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQWlCLENBQUMsQ0FBQTtnQkFDbEMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUdSLDRDQUE0QztnQkFFNUMsOEVBQThFO2dCQUM5RSxzQkFBTzs7O0tBZ0JWLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDO0lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDdkIsQ0FBQyxDQUFDLENBQUEifQ==