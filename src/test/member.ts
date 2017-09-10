import { XEntity } from '../decorator/xentity';
import { X } from '../x';
import { PrimaryColumn } from "../decorator/PrimaryColumn";

@XEntity()
export class Member{

    @PrimaryColumn()
    public member_id : number;  


    test(){
        
    }
    
}


var member = X(Member);