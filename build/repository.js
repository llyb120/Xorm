"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBZ0ZBLDhCQUE4QjtBQUU5QixrREFBa0Q7QUFDbEQsUUFBUTtBQUVSLG1FQUFtRTtBQUNuRSx3RUFBd0U7QUFDeEUsMERBQTBEO0FBQzFELHdCQUF3QjtBQUN4QiwrQkFBK0I7QUFDL0IsZUFBZTtBQUNmLGlDQUFpQztBQUNqQyx3Q0FBd0M7QUFDeEMsNERBQTREO0FBQzVELFFBQVE7QUFHUixtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBQzdCLGtDQUFrQztBQUNsQyxpQ0FBaUM7QUFDakMsUUFBUTtBQUVSLGdDQUFnQztBQUNoQywwQkFBMEI7QUFDMUIsK0JBQStCO0FBQy9CLGdDQUFnQztBQUNoQyxRQUFRO0FBRVIsVUFBVTtBQUNWLHdCQUF3QjtBQUN4QixVQUFVO0FBQ1YsMkJBQTJCO0FBQzNCLDBEQUEwRDtBQUMxRCwwQkFBMEI7QUFDMUIsOEJBQThCO0FBQzlCLGVBQWU7QUFDZixtRkFBbUY7QUFDbkYsV0FBVztBQUlYLGVBQWU7QUFDZixvQ0FBb0M7QUFDcEMsc0JBQXNCO0FBQ3RCLHlEQUF5RDtBQUV6RCxtQ0FBbUM7QUFDbkMsb0RBQW9EO0FBQ3BELHNCQUFzQjtBQUN0QixnQ0FBZ0M7QUFDaEMsZUFBZTtBQUNmLHNDQUFzQztBQUN0QyxRQUFRO0FBRVIsWUFBWTtBQUNaLHFDQUFxQztBQUNyQyx3QkFBd0I7QUFDeEIsc0RBQXNEO0FBRXRELDBEQUEwRDtBQUMxRCx3QkFBd0I7QUFDeEIsNEJBQTRCO0FBQzVCLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsbUNBQW1DO0FBQ25DLGlCQUFpQjtBQUNqQix1RkFBdUY7QUFDdkYsc0NBQXNDO0FBQ3RDLHlCQUF5QjtBQUN6QixxREFBcUQ7QUFDckQsOERBQThEO0FBQzlELG1CQUFtQjtBQUNuQiwyQkFBMkI7QUFDM0Isb0RBQW9EO0FBQ3BELCtEQUErRDtBQUMvRCxtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLDRCQUE0QjtBQUU1QixRQUFRO0FBR1IsK0RBQStEO0FBQy9ELDBEQUEwRDtBQUMxRCxXQUFXO0FBRVgsSUFBSSJ9