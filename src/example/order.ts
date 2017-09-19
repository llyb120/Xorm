import { OrderGoods } from './order_goods';
import { X } from '../x';

@X.Entity({
    primary : 'order_id'
})
export class Order{
    order_id : number;
    
    order_sn : string;

    order_amount : number;

    order_goods : OrderGoods[]
}

// X.registerEntity(Order,{
//     primary : o => o.order_id
// })