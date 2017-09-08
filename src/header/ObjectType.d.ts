
export declare type ObjectType<T> = {
    new() : T
} | Function;


export declare interface ObjectLiteral{
    [key : string] : any;
}