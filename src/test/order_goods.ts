import { XEntity } from '../decorator/XEntity';
import { ManyToOne } from '../decorator/Link';
import { Order } from './order';
@XEntity
export class OrderGoods{
    rec_id : number;

    order_id : number;


    @ManyToOne(Order,"Order.order_id","order_id")
    order : Order;
}
