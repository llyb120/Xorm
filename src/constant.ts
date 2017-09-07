export enum ORMMODE{
    DESIGN,
    PRODUCT
}
export var ORMCONFIG : {
    MODE : ORMMODE,
    MODELS : {
        [type : string] : Function[]
    }
}
= 
{
    MODE : ORMMODE.DESIGN,
    MODELS : {}
}  