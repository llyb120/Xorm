"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const x_1 = require("../x");
const db_1 = require("./db");
const member_1 = require("../example/member");
describe("operator", () => {
    it("start", async () => {
        await x_1.X.startORM(db_1.config);
    });
    it("test notlike", async () => {
        let ret = await x_1.X.of(member_1.Member).findOne({
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
        let ret = await x_1.X.of(member_1.Member).find({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGVzdC9vcGVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUF5QjtBQUN6Qiw2QkFBOEI7QUFDOUIsOENBQTJDO0FBQzNDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7SUFDakIsRUFBRSxDQUFDLE9BQU8sRUFBRSxLQUFLO1FBQ2IsTUFBTSxLQUFDLENBQUMsUUFBUSxDQUFDLFdBQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGNBQWMsRUFBRSxLQUFLO1FBQ3BCLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBQyxDQUFDLEVBQUUsQ0FBQyxlQUFNLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDakMsS0FBSyxFQUFFO2dCQUNILFdBQVcsRUFBRTtvQkFDVCxPQUFPLEVBQUUsU0FBUztpQkFDckI7YUFDSjtTQUNKLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5Qix1QkFBdUI7SUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsWUFBWSxFQUFFLEtBQUs7UUFDbEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxLQUFDLENBQUMsRUFBRSxDQUFDLGVBQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM5QixLQUFLLEVBQUU7Z0JBQ0gsU0FBUyxFQUFFO29CQUNQLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDYjthQUNKO1lBQ0QsS0FBSyxFQUFFO2dCQUNILFNBQVMsRUFBRSxLQUFLO2FBQ25CO1lBQ0QsS0FBSyxFQUFFLENBQUM7U0FDWCxDQUFDLENBQUM7UUFFSCxtQkFBbUI7UUFFbkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=