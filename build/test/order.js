"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const XEntity_1 = require("../decorator/XEntity");
const Link_1 = require("../decorator/Link");
const order_goods_1 = require("./order_goods");
let Order = class Order {
};
tslib_1.__decorate([
    Link_1.OneToMany(order_goods_1.OrderGoods, "OrderGoods.order_id", 'order_id'),
    tslib_1.__metadata("design:type", Array)
], Order.prototype, "order_goods", void 0);
Order = tslib_1.__decorate([
    XEntity_1.XEntity
], Order);
exports.Order = Order;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdC9vcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBK0M7QUFDL0MsNENBQThDO0FBQzlDLCtDQUEyQztBQUUzQyxJQUFhLEtBQUssR0FBbEI7Q0FXQyxDQUFBO0FBREc7SUFEQyxnQkFBUyxDQUFDLHdCQUFVLEVBQUMscUJBQXFCLEVBQUMsVUFBVSxDQUFDOzswQ0FDN0I7QUFWakIsS0FBSztJQURqQixpQkFBTztHQUNLLEtBQUssQ0FXakI7QUFYWSxzQkFBSyJ9