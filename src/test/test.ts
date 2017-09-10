import { EntityMap } from './../decorator/XEntity';
import { Member } from './member';
import { XOrmStart, getConnection } from '../index';
import { IDriverBase } from '../driver/driver';
import { X } from "../x";
XOrmStart(
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
    c.member_id = 1;
    console.log(EntityMap)
    console.log(X.getChanged(c))
    X.save(c);
}).catch((e) => {
    console.log(e)
    console.log("Fuck")
})