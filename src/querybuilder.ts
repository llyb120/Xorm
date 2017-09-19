// import { IDriverBase } from './driver/driver';

// /**
//  * 为了兼容typeorm而写，实际可以抛弃这个做查询
//  */
// export class QueryBuilder<T>{
//     constructor(
//         private factory: { new(): T },
//         private alias: string
//     ) {

//     }

//     andWhere(condition: string, replacement: object): QueryBuilder<T> {
//         return this;
//     }

//     orWhere(condition: string, replacement: object): QueryBuilder<T> {
//         return this;
//     }

//     where(condition: string, replacement: object): QueryBuilder<T> {
//         return this;
//     }

//     async getCount(): Promise<number> {

//     }

//     getMany(): Promise<T[]> {

//     }

//     getManyAndCount() {

//     }

//     getOne(): Promise<T> {

//     }

//     getSql(): string {

//     }
// }