import { XEntity } from '../decorator/XEntity';
import { OneToMany } from '../decorator/Link';
import { OrderGoods } from './order_goods';
@XEntity
export class Order{
    order_id : number;
    
    order_sn : string;

    order_amount : number;

    order_goods : OrderGoods[]
}