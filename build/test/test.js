"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const member_1 = require("./member");
const x_1 = require("../x");
const order_goods_1 = require("./order_goods");
const order_1 = require("./order");
order_goods_1.OrderGoods.name;
x_1.X.startORM({
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
    // X.registerEntity(Member,c => c.member_id);
    var a = new member_1.Member;
    // a.member_id = 1; 
    // // console.log(ObservingObject.getChanged(a));
    // var member = new Member;
    // member.member_name = 'cubi';
    // X.save(member);
    // console.log(EntityMap);
    var order = await x_1.X.of(order_1.Order).findOne({
        addon: {
            order_goods: 1
        }
    });
    console.log(order);
    // var member = await X.of(Member).findOne({
    //     where : {
    //         member_name : 'cubi'
    //     }
    // });
    // member.member_name = '222';
    // await X.save(member);
    // var a = await X.of(Member).findOne(1);
    // X.of(member);
    // console.log(a.prototype,a.__proto__)
    // var ret = await X.of(Member).find({
    //     where: {
    //         member_name: ['like', 'cubi'],
    //         member_id: ['in', [10, 20, 30]],
    //         member_add_time: ['>', new Date().getTime() / 1000],
    //         and: {
    //             member_id: 1,
    //         },
    //         or: {
    //             member_name: "cubi"
    //         }
    //     },
    //     order: {
    //         member_id: "asc"
    //     },
    //     group: 'member_id',
    //     limit: 10
    // })
    //     var d = await X.of(Order).findOne({
    //         where : {
    //             order_sn : "1504498057635203",
    //         },
    //         addon : {
    //             order_goods : 1
    //         }
    //     }); 
    // console.log(d)
    // X.of(Order).findOne({
    //     where : {
    //         order_sn : "123213",
    //     },
    //     addon : {
    //         order_goods :true 
    //     }
    // })
    // console.log(EntityMap)
    // var og = d.order_goods;
    // // console.log(d,og);
    // og[0].goods_name = 'cubi';
    // await X.makeAddon(og,"order");
    // console.log(d)
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
    // return;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxxQ0FBb0M7QUFFcEMsNEJBQXlCO0FBRXpCLCtDQUEyQztBQUMzQyxtQ0FBZ0M7QUFFaEMsd0JBQVUsQ0FBQyxJQUFJLENBQUM7QUFJaEIsS0FBQyxDQUFDLFFBQVEsQ0FDTjtJQUNJLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLE1BQU0sRUFBRSxPQUFPO0lBQ2YsTUFBTSxFQUFFLFdBQVc7SUFDbkIsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVLEVBQUUsTUFBTTtJQUNsQixVQUFVLEVBQUUsS0FBSztJQUNqQixVQUFVLEVBQUUsT0FBTztJQUNuQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLEtBQUs7SUFDTCxtQkFBbUI7SUFDbkIsR0FBRztJQUNILEtBQUs7SUFDTCxrQkFBa0I7SUFDbEIsR0FBRztJQUNILEtBQUs7SUFDTCxjQUFjLEVBQUUsS0FBSztDQUN4QixDQUNKLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxRQUFRO0lBQ2pCLDZDQUE2QztJQUU3QyxJQUFJLENBQUMsR0FBRyxJQUFJLGVBQU0sQ0FBQztJQUNuQixvQkFBb0I7SUFDcEIsaURBQWlEO0lBQ2pELDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBRWxCLDBCQUEwQjtJQUUxQixJQUFJLEtBQUssR0FBRyxNQUFNLEtBQUMsQ0FBQyxFQUFFLENBQUMsYUFBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ2xDLEtBQUssRUFBRztZQUNKLFdBQVcsRUFBRyxDQUFDO1NBQ2xCO0tBQ0osQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQiw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixRQUFRO0lBQ1IsTUFBTTtJQUVOLDhCQUE4QjtJQUM5Qix3QkFBd0I7SUFFeEIseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFJdkMsc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsMkNBQTJDO0lBQzNDLCtEQUErRDtJQUMvRCxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixTQUFTO0lBQ1QsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixLQUFLO0lBR1QsMENBQTBDO0lBQzFDLG9CQUFvQjtJQUNwQiw2Q0FBNkM7SUFDN0MsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUVaLFdBQVc7SUFDWCxpQkFBaUI7SUFDYix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixRQUFRO0lBQ1IsS0FBSztJQUVMLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUU3QixpQ0FBaUM7SUFFakMsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QiwwQ0FBMEM7SUFDMUMsNkJBQTZCO0lBRTdCLHdDQUF3QztJQUN4QywwQ0FBMEM7SUFHMUMsc0NBQXNDO0lBQ3RDLGdDQUFnQztJQUNoQyxNQUFNO0lBRU4sSUFBSTtJQUVKLGVBQWU7SUFFZiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixJQUFJO0lBQ0oscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUVsQyxVQUFVO0lBRVYsMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQyxhQUFhO0lBRWIsaUJBQWlCO0lBRWpCLDRCQUE0QjtJQUU1QixNQUFNO0lBRU4sNEJBQTRCO0lBQzVCLHFDQUFxQztJQUNyQyxZQUFZO0lBR1osNENBQTRDO0lBRTVDLDhFQUE4RTtJQUM5RSxVQUFVO0lBRVYsVUFBVTtJQUNWLCtCQUErQjtJQUUvQixrQ0FBa0M7SUFFbEMsbUJBQW1CO0lBRW5CLEtBQUs7SUFJTCxtQkFBbUI7SUFFbkIsa0JBQWtCO0FBQ3RCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN2QixDQUFDLENBQUMsQ0FBQSJ9