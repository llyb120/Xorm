// import { XEntity } from '../decorator/XEntity';
import { X } from '../x';
// import { PrimaryColumn } from "../decorator/PrimaryColumn";
// import {  ManyToOne } from '../decorator/Link';


@X.Entity({
    primary : item => item.member_id
})
export class Member{

    public member_id : number;  

    public member_name : string;

    public member_add_time : string;
 
    onGet(){
        this.member_name = 'guichu';
    }
    
}

// Member.prototype.constructor = function(){
    // console.log(12321)
// }
// var con = Object.getOwnPropertyDescriptor(Member.prototype,'constructor');
// con.value = class{
//     a = 1;
// }



// X.registerEntity(Member,{
//     primary : e => e.member_id 
// });







