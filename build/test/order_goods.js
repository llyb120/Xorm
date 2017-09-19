"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("./order");
const x_1 = require("../x");
class OrderGoods {
}
exports.OrderGoods = OrderGoods;
x_1.X.registerEntity(OrderGoods, item => item.rec_id);
x_1.X.addManyToOneLink(OrderGoods, order_1.Order, {
    from(item) {
        return item.order_id;
    },
    to(item) {
        return item.order_id;
    },
    reverse(item) {
        return item.order_goods;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJfZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdC9vcmRlcl9nb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLG1DQUFnQztBQUNoQyw0QkFBeUI7QUFDekI7Q0FVQztBQVZELGdDQVVDO0FBRUQsS0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNqRCxLQUFDLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFDLGFBQUssRUFBQztJQUNoQyxJQUFJLENBQUMsSUFBSTtRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxFQUFFLENBQUMsSUFBSTtRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUFDRCxPQUFPLENBQUMsSUFBSTtRQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7Q0FDSixDQUFDLENBQUEifQ==