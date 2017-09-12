import { getConnection } from './index';
import { EntityMap } from './decorator/XEntity';
import { X } from './x';

type Operator = ">" | "<" | "=" | "<>" | ">=" | "<=";

export type OrderOption<T> = {
    [key in keyof T]?: "asc" | "desc" | 'ASC' | 'DESC'
}
export type GroupOption<T> = keyof T;

export type WhereOptionValue = any;
export type WhereOptionLike = ['like', string];
export type WhereOptionIn = ['in', any[]];
export type WhereOptionCompare = [Operator, any];

export type SingleWhereOption<T> = {
    [key in keyof T]?: WhereOptionValue | WhereOptionLike | WhereOptionIn | WhereOptionCompare;
}
export type WhereOption<T> = SingleWhereOption<T> & {
    and?: WhereOption<T>
    or?: WhereOption<T>
}

// export type 
/**
 * {
 *  order : 
 * }
 */
export interface FindOption<T> {
    where?: WhereOption<T>;
    group?: GroupOption<T>;
    order?: OrderOption<T>;
    limit?: number[] | number;
}

export class Repository<T>{

    constructor(public factory: { new(): T }) {

    }

    updateById<K extends keyof T>(primaryKey: T[K], model: T) {

    }


    persist(entities: T[]): T[];
    persist(entity: T): T;
    persist(entity: any): any {
        return X.save(entity);
    }

    save(entities: T[]): T[];
    save(entity: T): T;
    save(entity: any): any {
        return X.save(entity)
    }

    /**
     * typeorm中没有这个方法
     */
    insert(data: T) {
        var desc = EntityMap.get(this.factory.prototype);
        if (!desc) {
            return data;
        }
        return getConnection(desc.database).insert(data as Partial<T>, desc);
    }


    
    async findOne(
        findOption: FindOption<T>
    ) : Promise<T>{
        findOption.limit = 1;
        var ret = await this.find(findOption);
        if(ret){
            return ret[0];
        }
        return new this.factory;
    }

    async find(
        findOption : FindOption<T>
    ) : Promise<T[]>{
        var desc = EntityMap.get(this.factory.prototype);
        if(!desc){
            return [];
        }
        return getConnection(desc.database).find<T>(findOption,desc);
    }


}