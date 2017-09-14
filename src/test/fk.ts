import { getEntityManager } from '../index';
import { X } from '../x';
import { Member } from './member';
import { FindOption } from '../repository';
class b{
    public casdffasfasd : number;
}


interface Option<U>{
    where : {
        [key in keyof U]? : any
    }
};
class d<U>{
    test(op : FindOption<U>){
    }

    of<K>(factory : new() => K) : d<K>{
        // return this;
        return this as d<K>;
    }
}


var e = new d;
e.of(b).test({
    where : {
        casdffasfasd : 1,
        and : {
            casdffasfasd
        }
    }
})
// e.of(b).
e.test(b,{
    where : {
        
    }
})
e.of