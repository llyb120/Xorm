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
    var members = [];
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
    it("test transition will failed", async () => {
        await x_1.X.transition(async (x) => {
            // await x.delete(members); 
            members[0].member_name = "jfkd;asfjka;fjkas;";
            await x.save(members[0]);
            throw new Error('fuck');
        });
        let m = await x_1.X.of(member_1.Member).findOne({
            where: {
                member_name: members[0].member_name
            }
        });
        should.not.exist(m);
    });
    it("test transition will success", async () => {
        await x_1.X.transition(async (x) => {
            // await x.delete(members); 
            members[0].member_name = 'jkdlfja;fjdk;afjk;a';
            await x.save(members[0]);
        });
        let m = await x_1.X.of(member_1.Member).findOne({
            where: {
                member_name: members[0].member_name
            }
        });
        should.exist(m);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBc0Q7QUFDdEQsZ0RBQTZDO0FBQzdDLGtCQUFrQjtBQUNsQixrQkFBZ0I7QUFDaEIsNEJBQXlCO0FBRXpCLDRDQUF5QztBQUN6Qyx3REFBb0Q7QUFHcEQsUUFBUTtBQUNSLHdCQUFVLENBQUE7QUFDVixJQUFJLE1BQU0sR0FBZ0I7SUFDdEIsTUFBTSxFQUFFLFNBQVM7SUFDakIsTUFBTSxFQUFFLE9BQU87SUFDZixNQUFNLEVBQUUsV0FBVztJQUNuQixNQUFNLEVBQUUsSUFBSTtJQUNaLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFVBQVUsRUFBRSxPQUFPO0lBQ25CLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsS0FBSztJQUNMLG1CQUFtQjtJQUNuQixHQUFHO0lBQ0gsS0FBSztJQUNMLGtCQUFrQjtJQUNsQixHQUFHO0lBQ0gsS0FBSztJQUNMLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLE9BQU8sRUFBRSxLQUFLO0NBQ2pCLENBQUM7QUFFRixlQUFNLENBQUM7QUFJUCxRQUFRLENBQUMsT0FBTyxFQUFFO0lBQ2QsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEtBQUs7UUFDNUIsSUFBSSxDQUFDO1lBQ0QsTUFBTSxLQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxTQUFTLENBQUM7SUFDZCxFQUFFLENBQUMsVUFBVSxFQUFFLEtBQUs7UUFDaEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUM7UUFD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