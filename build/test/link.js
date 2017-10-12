"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const start_1 = require("./start");
const order_1 = require("../example/order");
const x_1 = require("../x");
describe("test link", async () => {
    await start_1.start();
    let order = await x_1.X.of(order_1.Order).findOne({
        addon: {
            order_goods: 1,
        }
    });
    order.order_sn = 'cubi123';
    await x_1.X.save(order);
    // order.order_id = 123;
    // let change = ObservingObject.getChanged(order);
    // console.log(change,'fuck')
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L2xpbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBZ0M7QUFDaEMsNENBQXlDO0FBQ3pDLDRCQUF5QjtBQUl6QixRQUFRLENBQUMsV0FBVyxFQUFDLEtBQUs7SUFDdEIsTUFBTSxhQUFLLEVBQUUsQ0FBQztJQUVkLElBQUksS0FBSyxHQUFHLE1BQU0sS0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDbEMsS0FBSyxFQUFHO1lBQ0osV0FBVyxFQUFHLENBQUM7U0FDbEI7S0FDSixDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUMzQixNQUFNLEtBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEIsd0JBQXdCO0lBRXhCLGtEQUFrRDtJQUNsRCw2QkFBNkI7QUFDakMsQ0FBQyxDQUFDLENBQUMifQ==