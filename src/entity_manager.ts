import { hasConnection } from './index';
import { Repository } from "./repository";

/**
 * 备注：
 *  该类存在只为了兼容旧项目中的typeorm，除此之外没有任何意义
 */
// export class EntityManager {
//     static instance: {
//         [key: string]: EntityManager
//     };

//     static getRepository<T>(model: T) {

//     }


//     static getInstance(name = 'default'): EntityManager {
//         if (!EntityManager.instance[name]) {
//             return undefined;
//         }
//         return EntityManager.instance[name];
//     }
// }

var respInstance = new Map<any,Repository<any>>()

var funcs = {
    getRepository<T>(model: {new() : T}){
        var resp = respInstance.get(model.prototype) || (() => {
            var resp = new Repository(model)
            respInstance.set(model.prototype,resp);
            return resp;
        })();
        return resp as Repository<T>;
    },

    getEntityManager(){
        return funcs;
    }
}

export default funcs;

export function getEntityManager(){
    return funcs;
}