import { XEntityConfig } from '../header/config';
import { ORMCONFIG } from '../constant';

/**
 * 默认的
 * @param target 
 */
export function XEntity(target : Function) : void;
/**
 * 归属于哪个数据库，默认为default
 * @param from 
 */
export function XEntity(from? : string) :Function;

export function XEntity(config? : XEntityConfig) : Function;

export function XEntity(first? : Function | string | XEntityConfig) : any{
    var type = 'default';
    var final = function(target : Function){
        ORMCONFIG.MODELS[type] = ORMCONFIG.MODELS[type] || [];
        ORMCONFIG.MODELS[type].push(target);
    }
    if(first){
        if(typeof first == 'function'){
            
            return;
        }
        else{
            return final;
        }
    }
    return final;
    // function(target : Function){
        // ORMCONFIG[type] = ORMCONFIG[type]
    // }
}