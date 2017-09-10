import { getConnection } from './index';
import { EntityMap } from './decorator/XEntity';
import { X } from './x';

type Operator = ">" | "<" | "=" | "<>" | ">=" | "<=";

export type OrderOption<T> = {
    [key in keyof T]?: "asc" | "desc" | 'ASC' | 'DESC'
}
export type GroupOption<T> = {
    [key in keyof T]?: any;
}

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
    offset?: number;
    limit?: number;
}

export class Repository<T>{

    constructor(public factory: { new(): T }) {

    }

    updateById<K extends keyof T>(primaryKey: T[K], model: T) {

    }

    findOne(
        findOption: FindOption<T>
    ) {

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

}