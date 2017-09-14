"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const x_1 = require("./x");
const querybuilder_1 = require("./querybuilder");
class Repository {
    constructor(factory) {
        this.factory = factory;
    }
    updateById(primaryKey, model) {
        return x_1.X.of(this.factory).update(primaryKey, model);
        // var desc = EntityMap.get(this.factory.name);
        // if(!desc){
        //     return false;
        // }
        // var condition = {};
        // condition[desc.primary] = 
        // return getConnection(desc.database).update({})
    }
    persist(entity) {
        return x_1.X.save(entity);
    }
    save(entity) {
        return x_1.X.save(entity);
    }
    /**
     * typeorm中没有这个方法
     */
    // insert(data: T) {
    //     var desc = EntityMap.get(this.factory.name);
    //     if (!desc) {
    //         return data;
    //     }
    //     return getConnection(desc.database).insert(data as Partial<T>, desc);
    // }
    findOne(findOption) {
        return x_1.X.of(this.factory).findOne(findOption);
        // findOption.limit = 1;
        // var ret = await this.find(findOption);
        // if(ret){
        //     return ret[0];
        // }
        // return new this.factory;
    }
    find(findOption) {
        return x_1.X.of(this.factory).find(findOption);
        // var desc = EntityMap.get(this.factory.name);
        // if(!desc){
        //     return [];
        // }
        // /**
        //  * 兼容typeorm的部分暂时不要这些
        //  */
        // var result = await getConnection(desc.database).find<T>(findOption,desc);
        // for(let item of result){
        //     //新版API
        //     if (this.factory.prototype.onGet) {
        //         this.factory.prototype.onGet.call(item);
        //     }
        //     //兼容以前的写法
        //     if(this.factory.prototype.onLoad){
        //         this.factory.prototype.onLoad.call(item);
        //     }
        // }
        // return result;
    }
    createQueryBuilder(alias) {
        return new querybuilder_1.QueryBuilder(this.factory, alias);
    }
}
exports.Repository = Repository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMkJBQXdCO0FBQ3hCLGlEQUE4QztBQXdDOUM7SUFFSSxZQUFtQixPQUFxQjtRQUFyQixZQUFPLEdBQVAsT0FBTyxDQUFjO0lBQ3hDLENBQUM7SUFFRCxVQUFVLENBQUMsVUFBMkIsRUFBRSxLQUFpQjtRQUNyRCxNQUFNLENBQUMsS0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQW9CLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsK0NBQStDO1FBQy9DLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsSUFBSTtRQUNKLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsaURBQWlEO0lBQ3JELENBQUM7SUFLRCxPQUFPLENBQUMsTUFBVztRQUNmLE1BQU0sQ0FBQyxLQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFJRCxJQUFJLENBQUMsTUFBVztRQUNaLE1BQU0sQ0FBQyxLQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILG9CQUFvQjtJQUNwQixtREFBbUQ7SUFDbkQsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsNEVBQTRFO0lBQzVFLElBQUk7SUFJSixPQUFPLENBQ0gsVUFBeUI7UUFFekIsTUFBTSxDQUFDLEtBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU5Qyx3QkFBd0I7UUFDeEIseUNBQXlDO1FBQ3pDLFdBQVc7UUFDWCxxQkFBcUI7UUFDckIsSUFBSTtRQUNKLDJCQUEyQjtJQUMvQixDQUFDO0lBRUQsSUFBSSxDQUNBLFVBQTBCO1FBRTFCLE1BQU0sQ0FBQyxLQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFM0MsK0NBQStDO1FBQy9DLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsSUFBSTtRQUNKLE1BQU07UUFDTix3QkFBd0I7UUFDeEIsTUFBTTtRQUNOLDRFQUE0RTtRQUM1RSwyQkFBMkI7UUFDM0IsY0FBYztRQUNkLDBDQUEwQztRQUMxQyxtREFBbUQ7UUFDbkQsUUFBUTtRQUNSLGdCQUFnQjtRQUNoQix5Q0FBeUM7UUFDekMsb0RBQW9EO1FBQ3BELFFBQVE7UUFDUixJQUFJO1FBQ0osaUJBQWlCO0lBRXJCLENBQUM7SUFHRCxrQkFBa0IsQ0FBQyxLQUFjO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLDJCQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBRUo7QUF2RkQsZ0NBdUZDIn0=