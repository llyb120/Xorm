import { getConnection } from './index';
import { EntityMap, EntityDescirption } from './decorator/XEntity';
import { X } from './x';
// import { QueryBuilder } from './querybuilder';

type Operator = ">" | "<" | "=" | "<>" | ">=" | "<=";

export type OrderOption<T> = {
    [key in keyof T]?: "asc" | "desc" | 'ASC' | 'DESC'
}
export type GroupOption<T> = keyof T;

export type WhereOptionValue = number | string | boolean;
export type WhereOptionLike = ['like', string] | ['notlike',string];
export type WhereOptionIn = ['in', any[]] | ['not in',any[]];
export type WhereOptionCompare = [Operator, any];
export type WhereOptionBetween = ['between',any,any]

/**
 * 聚合查询
 */
export type WhereOptions = {
    lt? : any,
    gt? : any,
    let? : any,
    get? : any,
    eq? : any,
    neq? : any,
    like? : any,
    slike? : any,
    in? : any[],
    between? : [any,any],
    notlike? : any,
    notin? : any[]
}

/**
 * 追加统计字段
 */
type ThisEntity<T> = {
    [key in keyof T]?: string;
}
export type AddonFields<T> = {
    sum? : ThisEntity<T>,
    avg? :  ThisEntity<T>,
    count? : ThisEntity<T>,
}

export type SingleWhereOption<T> = {
    [key in keyof T]?: WhereOptionValue | WhereOptionLike | WhereOptionIn | WhereOptionCompare | WhereOptionBetween | WhereOptions;
}
export type WhereOption<T> = SingleWhereOption<T> & {
    and?: WhereOption<T>
    or?: WhereOption<T>
}


export type AddOnOption<T> = {
    [key in keyof T]? : any;
}

// export type 
/**
 * {
 *  order : 
 * }
 */
export interface FindOption<T> {
    where?: WhereOption<T> | object;
    group?: GroupOption<T>;
    order?: OrderOption<T>;
    limit?: number[] | number;
    addon? : AddOnOption<T>;
    extFields? : AddonFields<T>; 
}


export interface FetchOption<T> extends FindOption<T>{
    page? : number;
    rows? : number;
}

// export class Repository<T>{

//     constructor(public factory: { new(): T }) {
//     }

//     updateById(primaryKey: number | string, model: Partial<T>) {
//         return X.of(this.factory).update(primaryKey as string,model);
//         // var desc = EntityMap.get(this.factory.name);
//         // if(!desc){
//         //     return false;
//         // }
//         // var condition = {};
//         // condition[desc.primary] = 
//         // return getConnection(desc.database).update({})
//     }


//     persist(entities: T[]): T[];
//     persist(entity: T): T;
//     persist(entity: any): any {
//         return X.save(entity);
//     }

//     save(entities: T[]): T[];
//     save(entity: T): T;
//     save(entity: any): any {
//         return X.save(entity)
//     }

//     /**
//      * typeorm中没有这个方法
//      */
//     // insert(data: T) {
//     //     var desc = EntityMap.get(this.factory.name);
//     //     if (!desc) {
//     //         return data;
//     //     }
//     //     return getConnection(desc.database).insert(data as Partial<T>, desc);
//     // }


    
//     findOne(
//         findOption: FindOption<T>
//     ) : Promise<T>{
//         return X.of(this.factory).findOne(findOption);

//         // findOption.limit = 1;
//         // var ret = await this.find(findOption);
//         // if(ret){
//         //     return ret[0];
//         // }
//         // return new this.factory;
//     }

//     find(
//         findOption : FindOption<T>
//     ) : Promise<T[]>{
//         return X.of(this.factory).find(findOption);

//         // var desc = EntityMap.get(this.factory.name);
//         // if(!desc){
//         //     return [];
//         // }
//         // /**
//         //  * 兼容typeorm的部分暂时不要这些
//         //  */
//         // var result = await getConnection(desc.database).find<T>(findOption,desc);
//         // for(let item of result){
//         //     //新版API
//         //     if (this.factory.prototype.onGet) {
//         //         this.factory.prototype.onGet.call(item);
//         //     }
//         //     //兼容以前的写法
//         //     if(this.factory.prototype.onLoad){
//         //         this.factory.prototype.onLoad.call(item);
//         //     }
//         // }
//         // return result;

//     }


//     // createQueryBuilder(alias : string) : QueryBuilder<T>{
//     //     return new QueryBuilder(this.factory,alias);
//     // }

// }