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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxxQ0FBb0M7QUFFcEMsNEJBQXlCO0FBRXpCLCtDQUEyQztBQUMzQyxtQ0FBZ0M7QUFFaEMsd0JBQVUsQ0FBQyxJQUFJLENBQUM7QUFFaEIsS0FBQyxDQUFDLEtBQUssQ0FDSDtJQUNJLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLE1BQU0sRUFBRSxPQUFPO0lBQ2YsTUFBTSxFQUFFLFdBQVc7SUFDbkIsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVLEVBQUUsTUFBTTtJQUNsQixVQUFVLEVBQUUsS0FBSztJQUNqQixVQUFVLEVBQUUsT0FBTztJQUNuQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLEtBQUs7SUFDTCxtQkFBbUI7SUFDbkIsR0FBRztJQUNILEtBQUs7SUFDTCxrQkFBa0I7SUFDbEIsR0FBRztJQUNILEtBQUs7SUFDTCxjQUFjLEVBQUUsS0FBSztDQUN4QixDQUNKLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxRQUFRO0lBQ2pCLElBQUksQ0FBQyxHQUFHLElBQUksZUFBTSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLDhDQUE4QztJQUU5QyxJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUMsQ0FBQyxFQUFFLENBQUMsZUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzlCLEtBQUssRUFBRTtZQUNILFdBQVcsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvQixlQUFlLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDbkQsR0FBRyxFQUFFO2dCQUNELFNBQVMsRUFBRSxDQUFDO2FBQ2Y7WUFDRCxFQUFFLEVBQUU7Z0JBQ0EsV0FBVyxFQUFFLE1BQU07YUFDdEI7U0FDSjtRQUNELEtBQUssRUFBRTtZQUNILFNBQVMsRUFBRSxLQUFLO1NBQ25CO1FBQ0QsS0FBSyxFQUFFLFdBQVc7UUFDbEIsS0FBSyxFQUFFLEVBQUU7S0FDWixDQUFDLENBQUE7SUFHRixJQUFJLENBQUMsR0FBRyxNQUFNLEtBQUMsQ0FBQyxFQUFFLENBQUMsYUFBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzlCLEtBQUssRUFBRztZQUNKLFFBQVEsRUFBRyxjQUFjO1NBQzVCO1FBQ0QsS0FBSyxFQUFHO1lBQ0osV0FBVyxFQUFHLENBQUM7U0FDbEI7S0FFSixDQUFDLENBQUM7SUFFSCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQ3ZCLHFCQUFxQjtJQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUUxQixNQUFNLEtBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDZCw4QkFBOEI7SUFDOUIsMENBQTBDO0lBQzFDLDZCQUE2QjtJQUU3Qix3Q0FBd0M7SUFDeEMsMENBQTBDO0lBRzFDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7SUFDaEMsTUFBTTtJQUVOLElBQUk7SUFFSixlQUFlO0lBRWYsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsSUFBSTtJQUNKLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFFbEMsVUFBVTtJQUVWLDBCQUEwQjtJQUMxQixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUViLGlCQUFpQjtJQUVqQiw0QkFBNEI7SUFFNUIsTUFBTTtJQUVOLDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsWUFBWTtJQUdaLDRDQUE0QztJQUU1Qyw4RUFBOEU7SUFDOUUsTUFBTSxDQUFDO0lBRVAsVUFBVTtJQUNWLCtCQUErQjtJQUUvQixrQ0FBa0M7SUFFbEMsbUJBQW1CO0lBRW5CLEtBQUs7SUFJTCxtQkFBbUI7SUFFbkIsa0JBQWtCO0FBQ3RCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN2QixDQUFDLENBQUMsQ0FBQSJ9