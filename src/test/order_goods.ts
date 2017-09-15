import { PrimaryColumn } from './../decorator/PrimaryColumn';
import { XEntity } from '../decorator/XEntity';
import { ManyToOne} from '../decorator/Link';
import { Order } from './order';
@XEntity
export class OrderGoods{

    @PrimaryColumn()
    rec_id : number;

    order_id : number;

    goods_name : string;

    @ManyToOne(Order,{
        to(item){
            return item.order_id
        },
        from(item){
            return "order_id";
        },
        reverse(item){
            return item.order_goods;
        }
    })
    order : Order;
}
