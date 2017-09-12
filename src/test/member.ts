import { PrimaryColumn } from './../decorator/PrimaryColumn';
import { XEntity } from '../decorator/XEntity';
import { X } from '../x';
import { PrimaryColumn } from "../decorator/PrimaryColumn";

@XEntity()
export class Member{

    @PrimaryColumn()
    public member_id : number;  

    public member_name : string;

    public member_add_time : string;
 
    
}

@XEntity
class Profile{

    @PrimaryColumn()
    public member_id : number;


    // public 

}


var member = X(Member);