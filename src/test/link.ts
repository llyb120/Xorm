import { start } from "./start";
import { Order } from '../example/order';
import { X } from '../x';
import { ObservingObject } from '../gc';


describe("test link",async() => {
    await start();

    let order = await X.of(Order).findOne({
        addon : {
            order_goods : 1,
        }
    });

    order.order_sn = 'cubi123';
    await X.save(order);
    // order.order_id = 123;

    // let change = ObservingObject.getChanged(order);
    // console.log(change,'fuck')
});