import { Repository } from './../repository';
import { getEntityManager } from './../entity_manager';
import { Member } from './member';
import { getConnection } from '../index';
import { IDriverBase } from '../driver/driver';
import { X } from "../x";
import { EntityMap } from "../decorator/XEntity";
X.start(
    {
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
    }
).then(async managers => {
    var c = X(Member);
    c.member_name = 'cubi';
    X.find(Member, {
        where: {

        }
    })
    var ret = await X.find(Member,{
        where: {
            member_name: ['like', 'cubi'],
            member_id: ['in', [10, 20, 30]],
            member_add_time: ['>', new Date().getTime() / 1000],
            and: {
                member_id: 1,
            },
            or: {
                member_name: "cubi"
            }
        },
        order: {
            member_id: "asc"
        },
        group: 'member_id',
        limit: 10
    })
    console.log(ret[0].member_id)


    var a = getEntityManager().getRepository(Member).createQueryBuilder("cubi")
    return;

    return;
    console.log(X.getChanged(c))

    var b = new Repository(Member);

    X.find(Member, {

    })



    await X.save(c);

    console.log(c);
}).catch((e) => {
    console.log(e)
    console.log("Fuck")
})


// class c<T>{
//     static cubi<U = this>() : this{

//     }
// }
