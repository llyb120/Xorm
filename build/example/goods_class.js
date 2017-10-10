"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const x_1 = require("../x");
let GoodsClass = GoodsClass_1 = class GoodsClass {
};
tslib_1.__decorate([
    x_1.X.ManyToOne(GoodsClass_1, GoodsClass_1, {
        from: item => item.gc_id,
        to: item => item.gc_id,
        reverse: item => item.children
    }),
    tslib_1.__metadata("design:type", GoodsClass)
], GoodsClass.prototype, "parent", void 0);
GoodsClass = GoodsClass_1 = tslib_1.__decorate([
    x_1.X.Entity({
        primary: "gc_id"
    })
], GoodsClass);
exports.GoodsClass = GoodsClass;
var GoodsClass_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHNfY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhhbXBsZS9nb29kc19jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0QkFBeUI7QUFLekIsSUFBYSxVQUFVLGtCQUF2QjtDQWVDLENBQUE7QUFERztJQUxDLEtBQUMsQ0FBQyxTQUFTLENBQUMsWUFBVSxFQUFDLFlBQVUsRUFBQztRQUMvQixJQUFJLEVBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLO1FBQ3pCLEVBQUUsRUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUs7UUFDdkIsT0FBTyxFQUFHLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUTtLQUNsQyxDQUFDO3NDQUNPLFVBQVU7MENBQUM7QUFkWCxVQUFVO0lBSHRCLEtBQUMsQ0FBQyxNQUFNLENBQUM7UUFDTixPQUFPLEVBQUcsT0FBTztLQUNwQixDQUFDO0dBQ1csVUFBVSxDQWV0QjtBQWZZLGdDQUFVIn0=