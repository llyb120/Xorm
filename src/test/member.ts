import { XEntity } from '../decorator/XEntity';
import { X } from '../x';
import { PrimaryColumn } from "../decorator/PrimaryColumn";
import {  ManyToOne } from '../decorator/Link';

@X.Entity
export class Member{

    @X.PrimaryColumn()
    public member_id : number;  

    public member_name : string;

    public member_add_time : string;
 
    onGet(){
        this.member_name = 'guichu';
    }
    
}









