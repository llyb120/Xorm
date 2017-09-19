// 不再兼容TYPEORM



// import { EntityMap, EntityDescirption, InitEntityDescirption } from './XEntity';
// import { ORMCONFIG } from './../constant';
// export function PrimaryColumn(column?: any) {
//     return function (target: Object, key: string) {
//         var info: EntityDescirption = EntityMap.get(target.constructor.name) || InitEntityDescirption();
//         info.primary = key;
//         EntityMap.set(target.constructor.name, info);
//     }
// }


// export function PrimaryGeneratedColumn(column : any){
//     return PrimaryColumn(column);
// }
