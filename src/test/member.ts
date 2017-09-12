import { XEntity } from '../decorator/XEntity';
import { X } from '../x';
import { PrimaryColumn } from "../decorator/PrimaryColumn";

@XEntity()
export class Member{

    @PrimaryColumn()
    public member_id : number;  

    public member_name : string;

    public member_add_time : string;
 
    onGet(){
        this.member_name = 'guichu';
    }
    
}

@XEntity
export class Profile{

    @PrimaryColumn()
    public member_id : number;


    // public 

}

