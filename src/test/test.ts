// import { Repository } from './../repository';
// import { getEntityManager } from './../entity_manager';
// import { getConnection } from '../index';
// import { IDriverBase } from '../driver/driver';
import { EntityMap, EntityWatchingMap } from '../decorator/XEntity';
import { Member,  } from './member';
import { Repository, WhereOption, type } from '../repository';
import { X } from '../x';
import { ObservingObject } from '../gc';
import { OrderGoods } from './order_goods';
import { Order } from './order';
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

    var a = new Member;
    a.member_id = 1; 
    // console.log(ObservingObject.getChanged(a));

    var ret = await X.of(Member).find({
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


    function b<T>(c : {new() : T},d : {
        [key in keyof T] : number
    }){

    }

    b(Member,{})

    console.log(X.toObject(d))
    console.log(d.order_sn)
    console.log(d.order_goods)
    // var b = ret[0];
    // for(var i in b){
    //     console.log(b[i]);
    // }
    // b.member_name = 1;
    // console.log(Object.entries(b));

    // return;

    // b.member_name = 'fuck';
    // console.log(X.getChanged(b));
    // X.save(b);

    // b = undefined;

    // X.transition(async x => {

    // });

    // setInterval(function () {
    //     console.log(EntityWatchingMap)
    // }, 10000)


    // getEntityManager().getRepository(Member);

    // var a = getEntityManager().getRepository(Member).createQueryBuilder("cubi")
    return;

    // return;
    // console.log(X.getChanged(c))

    // var b = new Repository(Member);

    // X.find(Member, {

    // })



    // await X.save(c);

    // console.log(c);
}).catch((e) => {
    console.log(e)
    console.log("Fuck")
})


