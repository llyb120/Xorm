"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
member_1.Member;
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
    it("add user", async () => {
        var member = new member_1.Member;
        member.member_name = 'bin';
        await x_1.X.save(member);
        should.exists(member.member_id);
        member.member_id.should.above(0);
        member_id = member.member_id;
    });
    it("query", async () => {
        await x_1.X.query("insert into ra_member(member_id,member_name)values(null,'bin')");
    });
    it("count user", async () => {
        const num = await x_1.X.of(member_1.Member).count({
            where: {
                member_id: ['>=', 0]
            }
        });
        should.exist(num);
        num.should.above(0);
    });
    var members = null;
    it("search user", async () => {
        members = await x_1.X.of(member_1.Member).find({
            where: {
                member_name: {
                    eq: 'bin',
                    lt: 0
                }
            }
        });
        members.length.should.eql(0);
        members = await x_1.X.of(member_1.Member).find({
            where: {
                member_name: 'bin'
            }
        });
        members.length.should.above(0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBc0Q7QUFDdEQsZ0RBQTZDO0FBQzdDLGtCQUFrQjtBQUNsQixrQkFBZ0I7QUFDaEIsNEJBQXlCO0FBRXpCLDRDQUF5QztBQUN6Qyx3REFBb0Q7QUFHcEQsUUFBUTtBQUNSLHdCQUFVLENBQUE7QUFDVixJQUFJLE1BQU0sR0FBaUI7SUFDdkIsTUFBTSxFQUFFLFNBQVM7SUFDakIsTUFBTSxFQUFFLE9BQU87SUFDZixNQUFNLEVBQUUsV0FBVztJQUNuQixNQUFNLEVBQUUsSUFBSTtJQUNaLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFVBQVUsRUFBRSxPQUFPO0lBQ25CLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsS0FBSztJQUNMLG1CQUFtQjtJQUNuQixHQUFHO0lBQ0gsS0FBSztJQUNMLGtCQUFrQjtJQUNsQixHQUFHO0lBQ0gsS0FBSztJQUNMLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLE9BQU8sRUFBRSxLQUFLO0NBQ2pCLENBQUM7QUFFRixlQUFNLENBQUM7QUFJUCxRQUFRLENBQUMsT0FBTyxFQUFFO0lBQ2QsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEtBQUs7UUFDNUIsSUFBRyxDQUFDO1lBQ0EsTUFBTSxLQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDRCxLQUFLLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxTQUFTLENBQUM7SUFDZCxFQUFFLENBQUMsVUFBVSxFQUFFLEtBQUs7UUFDaEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUM7UUFD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