import { PrimaryColumn } from './../decorator/PrimaryColumn';
import { XEntity } from '../decorator/XEntity';
import { ManyToOne, test } from '../decorator/Link';
import { Order } from './order';
@XEntity
export class OrderGoods{

    @PrimaryColumn()
    rec_id : number;

    order_id : number;

    goods_name : string;

    @ManyToOne(Order,from => )
    order : Order;
}
