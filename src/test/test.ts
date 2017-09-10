import { Repository } from './../repository';
import { getEntityManager } from './../entity_manager';
import { Member } from './member';
import {  getConnection } from '../index';
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
    var a = getEntityManager().getRepository(Member);
    a.findOne({
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
        group: {
            member_id: true
        },
        offset: 1,
        limit: 10
    })
    return;
    console.log(X.getChanged(c))

    var b = new Repository(Member);


    await X.save(c);

    console.log(c);
}).catch((e) => {
    console.log(e)
    console.log("Fuck")
})



