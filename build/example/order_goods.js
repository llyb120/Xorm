"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Link_1 = require("../decorator/Link");
const order_1 = require("./order");
const x_1 = require("../x");
let OrderGoods = OrderGoods_1 = class OrderGoods {
};
tslib_1.__decorate([
    Link_1.ManyToOne(OrderGoods_1, order_1.Order, {
        from: og => og.order_id,
        to: o => o.order_id,
        reverse: o => o.order_goods
    }),
    tslib_1.__metadata("design:type", order_1.Order)
], OrderGoods.prototype, "order", void 0);
OrderGoods = OrderGoods_1 = tslib_1.__decorate([
    x_1.X.Entity({
        primary: 'rec_id'
    })
], OrderGoods);
exports.OrderGoods = OrderGoods;
var OrderGoods_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJfZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhhbXBsZS9vcmRlcl9nb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0Q0FBZ0Q7QUFDaEQsbUNBQWdDO0FBQ2hDLDRCQUF5QjtBQUt6QixJQUFhLFVBQVUsa0JBQXZCO0NBZUMsQ0FBQTtBQURHO0lBTEMsZ0JBQVMsQ0FBQyxZQUFVLEVBQUMsYUFBSyxFQUFDO1FBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRSxDQUFDLFFBQVE7UUFDeEIsRUFBRSxFQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUTtRQUNwQixPQUFPLEVBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXO0tBQy9CLENBQUM7c0NBQ00sYUFBSzt5Q0FBQztBQWRMLFVBQVU7SUFIdEIsS0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNQLE9BQU8sRUFBRyxRQUFRO0tBQ3BCLENBQUM7R0FDVyxVQUFVLENBZXRCO0FBZlksZ0NBQVUifQ==