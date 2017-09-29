"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const order_goods_1 = require("./../example/order_goods");
const member_1 = require("./../example/member");
// import "mocha";
require("should");
const x_1 = require("../x");
const order_1 = require("../example/order");
const goods_class_1 = require("../example/goods_class");
//import
order_goods_1.OrderGoods;
var config = {
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
    "tablesPrefix": "ra_",
    "debug": false
};
let c = class c {
};
c = tslib_1.__decorate([
    x_1.X.Entity({
        primary: 'id'
    })
], c);
const cc = new c;
cc.id = 1;
describe('start', () => {
    it("should start success", async () => {
        try {
            await x_1.X.startORM(config);
        }
        catch (e) {
            should.not.exist(config);
        }
    });
    var member_id;
    it("add user", (done) => {
        var member = new member_1.Member;
        member.member_name = 'bin';
        x_1.X.save(member).then(() => {
            should.exists(member.member_id);
            member.member_id.should.above(0);
            member_id = member.member_id;
            done();
        });
    });
    var members = null;
    it("search user", (done) => {
        x_1.X.of(member_1.Member).find({
            where: {
                member_name: "bin"
            }
        }).then(_members => {
            _members.length.should.above(0);
            members = _members;
            done();
        });
    });
    it("delete user", (done) => {
        should.exist(members);
        x_1.X.delete(members).then(flag => {
            flag.should.equal(true);
            x_1.X.of(member_1.Member).find({
                where: {
                    member_name: 'bin'
                }
            }).then(ms => {
                ms.length.should.eql(0);
                done();
            });
        });
    });
    /**
     * 测试附加字段
     */
    it("test addon", (done) => {
        x_1.X.of(order_1.Order).findOne({
            order: {
                order_id: "desc"
            },
            addon: {
                order_goods: 1
            }
        }).then(order => {
            should.exist(order);
            if (order) {
                should.exist(order.order_goods);
                order.order_goods.length.should.above(0);
            }
            done();
            // order
        }).catch(e => {
            should.not.exist(e);
        });
    });
    /**
     * 测试树模式
     */
    it("test tree class", async () => {
        try {
            let gc = await x_1.X.of(goods_class_1.GoodsClass).findOne();
            should.exist(gc);
            if (gc) {
                await x_1.X.makeAddon(gc, 'children');
                should.exist(gc.children);
                gc.children.length.should.above(0);
                await x_1.X.makeAddon(gc, 'parent');
                should.exist(gc.parent);
            }
        }
        catch (e) {
            should.not.exist(e);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMERBQXNEO0FBQ3RELGdEQUE2QztBQUM3QyxrQkFBa0I7QUFDbEIsa0JBQWdCO0FBQ2hCLDRCQUF5QjtBQUV6Qiw0Q0FBeUM7QUFDekMsd0RBQW9EO0FBRXBELFFBQVE7QUFDUix3QkFBVSxDQUFBO0FBQ1YsSUFBSSxNQUFNLEdBQWlCO0lBQ3ZCLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLE1BQU0sRUFBRSxPQUFPO0lBQ2YsTUFBTSxFQUFFLFdBQVc7SUFDbkIsTUFBTSxFQUFFLElBQUk7SUFDWixVQUFVLEVBQUUsTUFBTTtJQUNsQixVQUFVLEVBQUUsS0FBSztJQUNqQixVQUFVLEVBQUUsT0FBTztJQUNuQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLEtBQUs7SUFDTCxtQkFBbUI7SUFDbkIsR0FBRztJQUNILEtBQUs7SUFDTCxrQkFBa0I7SUFDbEIsR0FBRztJQUNILEtBQUs7SUFDTCxjQUFjLEVBQUUsS0FBSztJQUNyQixPQUFPLEVBQUUsS0FBSztDQUNqQixDQUFDO0FBS0YsSUFBTSxDQUFDLEdBQVA7Q0FHQyxDQUFBO0FBSEssQ0FBQztJQUhOLEtBQUMsQ0FBQyxNQUFNLENBQUM7UUFDTixPQUFPLEVBQUcsSUFBSTtLQUNqQixDQUFDO0dBQ0ksQ0FBQyxDQUdOO0FBRUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDakIsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFJVixRQUFRLENBQUMsT0FBTyxFQUFFO0lBQ2QsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEtBQUs7UUFDNUIsSUFBRyxDQUFDO1lBQ0EsTUFBTSxLQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDRCxLQUFLLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lB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