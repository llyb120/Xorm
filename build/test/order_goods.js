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
    Link_1.ManyToOne(order_1.Order, "Order.order_id", "order_id"),
    tslib_1.__metadata("design:type", order_1.Order)
], OrderGoods.prototype, "order", void 0);
OrderGoods = tslib_1.__decorate([
    XEntity_1.XEntity
], OrderGoods);
exports.OrderGoods = OrderGoods;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJfZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdC9vcmRlcl9nb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxnRUFBNkQ7QUFDN0Qsa0RBQStDO0FBQy9DLDRDQUE4QztBQUM5QyxtQ0FBZ0M7QUFFaEMsSUFBYSxVQUFVLEdBQXZCO0NBWUMsQ0FBQTtBQVRHO0lBREMsNkJBQWEsRUFBRTs7MENBQ0E7QUFRaEI7SUFEQyxnQkFBUyxDQUFDLGFBQUssRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLENBQUM7c0NBQ3JDLGFBQUs7eUNBQUM7QUFYTCxVQUFVO0lBRHRCLGlCQUFPO0dBQ0ssVUFBVSxDQVl0QjtBQVpZLGdDQUFVIn0=