import { XOrmStart, getConnection } from '../index';
import { IDriverBase } from '../driver/driver';
console.log(123)
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
    
})
