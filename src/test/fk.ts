import { Member } from './member';
import { X } from '../x';

type O<U> = {
    c : U
    where : {
        [key in keyof U] : any 
    }
} 
function d<T>( d : O<T>){
    try{

    }catch{

    }
}

function M(obj){
    return X.of(obj);
}

X[Member]

d({
    c : Member,
    where : {
        
    }
})