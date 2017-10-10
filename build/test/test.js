"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_goods_1 = require("./../example/order_goods");
const member_1 = require("./../example/member");
// import "mocha";
require("should");
const x_1 = require("../x");
const order_1 = require("../example/order");
const goods_class_1 = require("../example/goods_class");
const db_1 = require("./db");
//import
order_goods_1.OrderGoods;
member_1.Member;
describe('start', () => {
    it("should start success", async () => {
        try {
            await x_1.X.startORM(db_1.config);
        }
        catch (e) {
            should.not.exist(db_1.config);
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
    it("another count", async () => {
        const num = await x_1.X.of(member_1.Member).find({
            extFields: {
                sum: {
                    member_id: "cc"
                },
                count: {
                    member_id: 'cubi'
                }
            }
        });
        should.exist(num[0]);
        num[0].cc.should.above(0);
        num[0].cubi.should.above(0);
        // console.log((num[0] as any))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBc0Q7QUFDdEQsZ0RBQTZDO0FBQzdDLGtCQUFrQjtBQUNsQixrQkFBZ0I7QUFDaEIsNEJBQXlCO0FBRXpCLDRDQUF5QztBQUN6Qyx3REFBb0Q7QUFFcEQsNkJBQThCO0FBRTlCLFFBQVE7QUFDUix3QkFBVSxDQUFBO0FBR1YsZUFBTSxDQUFDO0FBSVAsUUFBUSxDQUFDLE9BQU8sRUFBRTtJQUNkLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLO1FBQzVCLElBQUksQ0FBQztZQUNELE1BQU0sS0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFNLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQU0sQ0FBQyxDQUFDO1FBQzdCLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksU0FBUyxDQUFDO0lBQ2QsRUFBRSxDQUFDLFVBQVUsRUFBRSxLQUFLO1FBQ2hCLElBQUksTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzNCLE1BQU0sS0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFFakMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUs7UUFDYixNQUFNLEtBQUMsQ0FBQyxLQUFLLENBQUMs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