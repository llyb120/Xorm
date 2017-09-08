export enum ORMMODE{
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
    }
}
= 
{
    MODE : ORMMODE.DESIGN,
    MODELS : {},
    CONNECTION_MANAGER : {
        
    }
}  