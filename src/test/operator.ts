import { X } from '../x';
import { config } from './db';
import { Member } from '../example/member';
describe("operator", () => {
    it("start", async () => {
        await X.startORM(config);
    });

    it("test notlike", async () => {
        let ret = await X.of(Member).findOne({
            where: {
                member_name: {
                    notlike: '%admin%'
                }
            }
        });

        ret.member_id.should.above(1);
        // ret.should.above(0);
    });

    it('test notin', async () => {
        let ret = await X.of(Member).find({
            where: {
                member_id: {
                    notin: [1]
                }
            },
            order: {
                member_id: 'asc'
            },
            limit: 1
        });

        // console.log(ret)

        ret.length.should.eql(1);
        ret[0].member_id.should.above(1);
    });
});