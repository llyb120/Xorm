import { Member } from './../example/member';
// import "mocha";
import "should";
import {X} from "../x";
import { MysqlConfig } from "../index";


describe('start',() => {
    it("should start success",(done) => {
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
            "tablesPrefix": "ra_"
        };
        X.startORM(config as MysqlConfig).then((managers : any) => {
            should.exists(managers);
            done();
        }).catch(e => {
            should.not.exists(e);
        });
    });

    var member_id;
    it("add user", (done) => {
        var member = new Member;
        member.member_name = 'bin';
        X.save(member).then(() => {
            should.exists(member.member_id);
            member.member_id.should.above(0);
            member_id = member.member_id;
            done(); 
        });

    });

    var members : any = null;
    it("search user",(done) => {
        X.of(Member).find({
            where : {
                member_name : "bin"
            }
        }).then(_members => {
            _members.length.should.above(0);
            members = _members
            done();
        });
    });

    it("delete user",(done) => {
        should.exist(members);
        X.delete(members).then(flag => {
            flag.should.equal(true);

            X.of(Member).find({
                where : {
                    member_name : 'bin'
                }
            }).then(ms => {
                ms.length.should.eql(0);
                done()
            });
        });
    });



}); 