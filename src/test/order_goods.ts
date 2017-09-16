import { PrimaryColumn } from './../decorator/PrimaryColumn';
import { XEntity } from '../decorator/XEntity';
import { ManyToOne} from '../decorator/Link';
import { Order } from './order';
import { X } from '../x';
export class OrderGoods{

    rec_id : number;

    order_id : number;

    goods_name : string;


    order : Order;
}

X.registerEntity(OrderGoods,item => item.rec_id);
X.addManyToOneLink(OrderGoods,Order,{
    from(item){
        return item.order_id;
    },
    to(item){
        return item.order_id
    },
    reverse(item){
        return item.order_goods;
    }
})
