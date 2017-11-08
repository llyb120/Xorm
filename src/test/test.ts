import { OrderGoods } from './../example/order_goods';
import { Member } from './../example/member';
// import "mocha";
import "should";
import { X } from "../x";
import { MysqlConfig } from "../index";
import { Order } from '../example/order';
import { GoodsClass } from '../example/goods_class';
import { ObservingObject } from '../gc';
import { config } from './db';

//import
OrderGoods


Member;



describe('start', () => {
    it("should start success", async () => {
        try {
            await X.startORM(config);
        }
        catch (e) {
            should.not.exist(config);
        }
    });

    var member_id;
    it("add user", async () => {
        var member = new Member;
        member.member_name = 'bin';
        await X.save(member);
        should.exists(member.member_id);
        member.member_id.should.above(0);
        member_id = member.member_id;

    });

    it("query", async () => {
        await X.query("insert into ra_member(member_id,member_name)values(null,'bin')");
    })

    it("count user", async () => {
        const num = await X.of(Member).count({
            where: {
                member_id: ['>=', 0]
            }
        });
        should.exist(num);
        num.should.above(0);
    });

    it("another count",async() => {
        const num = await X.of(Member).find({
            extFields : {
                sum : {
                    member_id : "cc"
                },
                count : {
                    member_id : 'cubi'
                }
            }
        });
        should.exist(num[0]);
        (num[0] as any).cc.should.above(0);
        (num[0] as any).cubi.should.above(0);
        // console.log((num[0] as any))
   })

    var members: Member[] = [];
    it("search user", async () => {
        members = await X.of(Member).find({
            where: {
                member_name: {
                    eq: 'bin',
                    lt: 0
                }
            }
        });
        members.length.should.eql(0);
        members = await X.of(Member).find({
            where: {
                member_name: 'bin'
            }
        });
        members.length.should.above(0);
    });

    it("find user by primary key",async() => {
        let ret = await X.of(Member).findOne({
            where : {
                member_id : members[0]
            }
        });
        should.exist(ret);
        console.log(ret.member_name);
    });

    it("search user by in primary key",async() => {
        let ret = await X.of(Member).find({
            where: {
                member_id : members
            }
        });
        ret.length.should.above(0);
    });

    it("test transition will failed", async () => {
        await X.transition(async x => {
            // await x.delete(members); 
            members[0].member_name = "jfkd;asfjka;fjkas;"
            await x.save(members[0]);
            throw new Error('fuck');
        });

        let m = await X.of(Member).findOne({
            where: {
                member_name: members[0].member_name
            }
        });

        should.not.exist(m);
    });

    it("test transition will success", async () => {
        await X.transition(async x => {
            // await x.delete(members); 
            members[0].member_name = 'jkdlfja;fjdk;afjk;a'
            await x.save(members[0]);
        });
        let m = await X.of(Member).findOne({
            where: {
                member_name:  members[0].member_name
            }
        });
        should.exist(m);
    })


    it("delete user", (done) => {
        should.exist(members);
        X.delete(members).then(flag => {
            flag.should.equal(true);

            X.of(Member).find({
                where: {
                    member_name: 'bin'
                }
            }).then(ms => {
                ms.length.should.eql(0);
                done()
            });
        });
    });

    /**
     * 测试附加字段
     */
    it("test addon", (done) => {
        X.of(Order).findOne({
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
    })


    /**
     * 测试树模式
     */
    it("test tree class", async () => {
        try {
            let gc = await X.of(GoodsClass).findOne();
            should.exist(gc);
            if (gc) {
                await X.makeAddon(gc, 'children');
                should.exist(gc.children);
                gc.children.length.should.above(0);
                await X.makeAddon(gc, 'parent')
                should.exist(gc.parent);
            }
        }
        catch (e) {
            should.not.exist(e);
        }

    });

}); 