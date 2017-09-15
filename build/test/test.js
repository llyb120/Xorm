"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Repository } from './../repository';
// import { getEntityManager } from './../entity_manager';
// import { getConnection } from '../index';
// import { IDriverBase } from '../driver/driver';
const XEntity_1 = require("../decorator/XEntity");
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
            order_sn: "1504498057635203"
        },
        addon: {
            order_goods: 1
        }
    });
    console.log(XEntity_1.EntityMap);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBZ0Q7QUFDaEQsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1QyxrREFBa0Q7QUFDbEQsa0RBQW9FO0FBQ3BFLHFDQUFvQztBQUVwQyw0QkFBeUI7QUFFekIsK0NBQTJDO0FBQzNDLG1DQUFnQztBQUVoQyx3QkFBVSxDQUFDLElBQUksQ0FBQztBQUVoQixLQUFDLENBQUMsS0FBSyxDQUNIO0lBQ0ksTUFBTSxFQUFFLFNBQVM7SUFDakIsTUFBTSxFQUFFLE9BQU87SUFDZixNQUFNLEVBQUUsV0FBVztJQUNuQixNQUFNLEVBQUUsSUFBSTtJQUNaLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFVBQVUsRUFBRSxPQUFPO0lBQ25CLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsS0FBSztJQUNMLG1CQUFtQjtJQUNuQixHQUFHO0lBQ0gsS0FBSztJQUNMLGtCQUFrQjtJQUNsQixHQUFHO0lBQ0gsS0FBSztJQUNMLGNBQWMsRUFBRSxLQUFLO0NBQ3hCLENBQ0osQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLFFBQVE7SUFDakIsSUFBSSxDQUFDLEdBQUcsSUFBSSxlQUFNLENBQUM7SUFDbkIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDaEIsOENBQThDO0lBRTlDLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBQyxDQUFDLEVBQUUsQ0FBQyxlQUFNLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDOUIsS0FBSyxFQUFFO1lBQ0gsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUM3QixTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLGVBQWUsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztZQUNuRCxHQUFHLEVBQUU7Z0JBQ0QsU0FBUyxFQUFFLENBQUM7YUFDZjtZQUNELEVBQUUsRUFBRTtnQkFDQSxXQUFXLEVBQUUsTUFBTTthQUN0QjtTQUNKO1FBQ0QsS0FBSyxFQUFFO1lBQ0gsU0FBUyxFQUFFLEtBQUs7U0FDbkI7UUFDRCxLQUFLLEVBQUUsV0FBVztRQUNsQixLQUFLLEVBQUUsRUFBRTtLQUNaLENBQUMsQ0FBQTtJQUdGLElBQUksQ0FBQyxHQUFHLE1BQU0sS0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDOUIsS0FBSyxFQUFHO1lBQ0osUUFBUSxFQUFHLGtCQUFrQjtTQUNoQztRQUNELEtBQUssRUFBRztZQUNKLFdBQVcsRUFBRyxDQUFDO1NBQ2xCO0tBRUosQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBUyxDQUFDLENBQUE7SUFDdEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUN2QixxQkFBcUI7SUFDckIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7SUFFMUIsTUFBTSxLQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBQyxPQUFPLENBQUMsQ0FBQztJQUU5QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2QsOEJBQThCO0lBQzlCLDBDQUEwQztJQUMxQyw2QkFBNkI7SUFFN0Isd0NBQXdDO0lBQ3hDLDBDQUEwQztJQUcxQyxzQ0FBc0M7SUFDdEMsZ0NBQWdDO0lBQ2hDLE1BQU07SUFFTixJQUFJO0lBRUosZUFBZTtJQUVmLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLElBQUk7SUFDSixxQkFBcUI7SUFDckIsa0NBQWtDO0lBRWxDLFVBQVU7SUFFViwwQkFBMEI7SUFDMUIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFFYixpQkFBaUI7SUFFakIsNEJBQTRCO0lBRTVCLE1BQU07SUFFTiw0QkFBNEI7SUFDNUIscUNBQXFDO0lBQ3JDLFlBQVk7SUFHWiw0Q0FBNEM7SUFFNUMsOEVBQThFO0lBQzlFLE1BQU0sQ0FBQztJQUVQLFVBQVU7SUFDViwrQkFBK0I7SUFFL0Isa0NBQWtDO0lBRWxDLG1CQUFtQjtJQUVuQixLQUFLO0lBSUwsbUJBQW1CO0lBRW5CLGtCQUFrQjtBQUN0QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDdkIsQ0FBQyxDQUFDLENBQUEifQ==