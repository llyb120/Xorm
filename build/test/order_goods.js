"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PrimaryColumn_1 = require("./../decorator/PrimaryColumn");
const XEntity_1 = require("../decorator/XEntity");
const Link_1 = require("../decorator/Link");
const order_1 = require("./order");
let OrderGoods = class OrderGoods {
};
tslib_1.__decorate([
    PrimaryColumn_1.PrimaryColumn(),
    tslib_1.__metadata("design:type", Number)
], OrderGoods.prototype, "rec_id", void 0);
tslib_1.__decorate([
    Link_1.ManyToOne(order_1.Order, {
        to(item) {
            return item.order_id;
        },
        from(item) {
            return "order_id";
        },
        reverse(item) {
            return item.order_goods;
        }
    }),
    tslib_1.__metadata("design:type", order_1.Order)
], OrderGoods.prototype, "order", void 0);
OrderGoods = tslib_1.__decorate([
    XEntity_1.XEntity
], OrderGoods);
exports.OrderGoods = OrderGoods;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJfZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdC9vcmRlcl9nb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxnRUFBNkQ7QUFDN0Qsa0RBQStDO0FBQy9DLDRDQUE2QztBQUM3QyxtQ0FBZ0M7QUFFaEMsSUFBYSxVQUFVLEdBQXZCO0NBcUJDLENBQUE7QUFsQkc7SUFEQyw2QkFBYSxFQUFFOzswQ0FDQTtBQWlCaEI7SUFYQyxnQkFBUyxDQUFDLGFBQUssRUFBQztRQUNiLEVBQUUsQ0FBQyxJQUFJO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDeEIsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJO1lBQ0wsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUN0QixDQUFDO1FBQ0QsT0FBTyxDQUFDLElBQUk7WUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO0tBQ0osQ0FBQztzQ0FDTSxhQUFLO3lDQUFDO0FBcEJMLFVBQVU7SUFEdEIsaUJBQU87R0FDSyxVQUFVLENBcUJ0QjtBQXJCWSxnQ0FBVSJ9