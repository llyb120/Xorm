"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const x_1 = require("./x");
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
}
exports.Repository = Repository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMkJBQXdCO0FBeUN4QjtJQUVJLFlBQW1CLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7SUFDeEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxVQUEyQixFQUFFLEtBQWlCO1FBQ3JELE1BQU0sQ0FBQyxLQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBb0IsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUM3RCwrQ0FBK0M7UUFDL0MsYUFBYTtRQUNiLG9CQUFvQjtRQUNwQixJQUFJO1FBQ0osc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QixpREFBaUQ7SUFDckQsQ0FBQztJQUtELE9BQU8sQ0FBQyxNQUFXO1FBQ2YsTUFBTSxDQUFDLEtBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUlELElBQUksQ0FBQyxNQUFXO1FBQ1osTUFBTSxDQUFDLEtBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsb0JBQW9CO0lBQ3BCLG1EQUFtRDtJQUNuRCxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUiw0RUFBNEU7SUFDNUUsSUFBSTtJQUlKLE9BQU8sQ0FDSCxVQUF5QjtRQUV6QixNQUFNLENBQUMsS0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTlDLHdCQUF3QjtRQUN4Qix5Q0FBeUM7UUFDekMsV0FBVztRQUNYLHFCQUFxQjtRQUNyQixJQUFJO1FBQ0osMkJBQTJCO0lBQy9CLENBQUM7SUFFRCxJQUFJLENBQ0EsVUFBMEI7UUFFMUIsTUFBTSxDQUFDLEtBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUzQywrQ0FBK0M7UUFDL0MsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixJQUFJO1FBQ0osTUFBTTtRQUNOLHdCQUF3QjtRQUN4QixNQUFNO1FBQ04sNEVBQTRFO1FBQzVFLDJCQUEyQjtRQUMzQixjQUFjO1FBQ2QsMENBQTBDO1FBQzFDLG1EQUFtRDtRQUNuRCxRQUFRO1FBQ1IsZ0JBQWdCO1FBQ2hCLHlDQUF5QztRQUN6QyxvREFBb0Q7UUFDcEQsUUFBUTtRQUNSLElBQUk7UUFDSixpQkFBaUI7SUFFckIsQ0FBQztDQU9KO0FBdkZELGdDQXVGQyJ9