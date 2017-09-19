import { ManyToOne,  } from '../decorator/Link';
import { Order } from './order';
import { X } from '../x';
import { Member } from './member';
@X.Entity({
   primary : 'rec_id' 
})
export class OrderGoods{

    rec_id : number;

    order_id : number;

    goods_name : string;


    @ManyToOne(OrderGoods,Order,{
        from : og => og.order_id,
        to : o => o.order_id,
        reverse : o => o.order_goods
    })
    order : Order;
}
