import { XOrmConfig } from './config';


export enum ORMMODE {
    DESIGN,
    PRODUCT
}
export var ORMCONFIG : {
    MODE : ORMMODE,
    MODELS : {
        [type : string] : Function[]
    },
    CONNECTION_MANAGER : {
        [type : string] : any
    },
    CONFIGS : {
        [key : string] : XOrmConfig
    }
}
= 
{
    MODE : ORMMODE.DESIGN,
    MODELS : {},
    CONNECTION_MANAGER : {
        
    },
    CONFIGS : {}
}  