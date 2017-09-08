import { hasConnection } from './index';

/**
 * 备注：
 *  该类存在只为了兼容旧项目中的typeorm，除此之外没有任何意义
 */
export class EntityManager{
    static instance : {
        [key : string] : EntityManager
    };

    static getRepository(){

    }


    static getInstance(name = 'default') : EntityManager{
        if(!EntityManager.instance[name]){
            return undefined;
        }
        return EntityManager.instance[name];
    }
}
