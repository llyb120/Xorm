import { X } from '../x';

@X.Entity({
    primary : "gc_id"
})
export class GoodsClass{

    gc_id : number;

    gc_parent_id : number;

    
    children : GoodsClass[];
    
    @X.ManyToOne(GoodsClass,GoodsClass,{
        from : item => item.gc_id,
        to : item => item.gc_id,
        reverse : item => item.children
    })
    parent : GoodsClass;
}