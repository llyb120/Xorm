"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSw0QkFBeUI7QUFFekIsK0NBQTJDO0FBQzNDLG1DQUFnQztBQUVoQyx3QkFBVSxDQUFDLElBQUksQ0FBQztBQUloQixLQUFDLENBQUMsUUFBUSxDQUNOO0lBQ0ksTUFBTSxFQUFFLFNBQVM7SUFDakIsTUFBTSxFQUFFLE9BQU87SUFDZixNQUFNLEVBQUUsV0FBVztJQUNuQixNQUFNLEVBQUUsSUFBSTtJQUNaLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFVBQVUsRUFBRSxPQUFPO0lBQ25CLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsS0FBSztJQUNMLG1CQUFtQjtJQUNuQixHQUFHO0lBQ0gsS0FBSztJQUNMLGtCQUFrQjtJQUNsQixHQUFHO0lBQ0gsS0FBSztJQUNMLGNBQWMsRUFBRSxLQUFLO0NBQ3hCLENBQ0osQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLFFBQVE7SUFDakIsNkNBQTZDO0lBRzdDLG9CQUFvQjtJQUNwQixpREFBaUQ7SUFDakQsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFFbEIsMEJBQTBCO0lBRTFCLElBQUksS0FBSyxHQUFHLE1BQU0sS0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDbEMsS0FBSyxFQUFHO1lBQ0osV0FBVyxFQUFHLENBQUM7U0FDbEI7S0FDSixDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLFFBQVE7SUFDUixNQUFNO0lBRU4sOEJBQThCO0lBQzlCLHdCQUF3QjtJQUV4Qix5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLHVDQUF1QztJQUl2QyxzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLHlDQUF5QztJQUN6QywyQ0FBMkM7SUFDM0MsK0RBQStEO0lBQy9ELGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFNBQVM7SUFDVCxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLEtBQUs7SUFHVCwwQ0FBMEM7SUFDMUMsb0JBQW9CO0lBQ3BCLDZDQUE2QztJQUM3QyxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixZQUFZO0lBRVosV0FBVztJQUNYLGlCQUFpQjtJQUNiLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFFBQVE7SUFDUixLQUFLO0lBRUwseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsNkJBQTZCO0lBRTdCLGlDQUFpQztJQUVqQyxpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLDBDQUEwQztJQUMxQyw2QkFBNkI7SUFFN0Isd0NBQXdDO0lBQ3hDLDBDQUEwQztJQUcxQyxzQ0FBc0M7SUFDdEMsZ0NBQWdDO0lBQ2hDLE1BQU07SUFFTixJQUFJO0lBRUosZUFBZTtJQUVmLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLElBQUk7SUFDSixxQkFBcUI7SUFDckIsa0NBQWtDO0lBRWxDLFVBQVU7SUFFViwwQkFBMEI7SUFDMUIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFFYixpQkFBaUI7SUFFakIsNEJBQTRCO0lBRTVCLE1BQU07SUFFTiw0QkFBNEI7SUFDNUIscUNBQXFDO0lBQ3JDLFlBQVk7SUFHWiw0Q0FBNEM7SUFFNUMsOEVBQThFO0lBQzlFLFVBQVU7SUFFVixVQUFVO0lBQ1YsK0JBQStCO0lBRS9CLGtDQUFrQztJQUVsQyxtQkFBbUI7SUFFbkIsS0FBSztJQUlMLG1CQUFtQjtJQUVuQixrQkFBa0I7QUFDdEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQyxDQUFBIn0=