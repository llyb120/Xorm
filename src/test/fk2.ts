import { ManyToOne } from './../decorator/Link';
import { Member } from './member';


class a{
    public a1 : number;
    public a2 : number;
}

class c {
    public e: a;
}

class b {
    public fucku:c ;
    public ccccc : number;
}

interface TTT<T, K extends keyof T>{
    where : {
        [key in K]? :  {
            [key in keyof T[K]]? : TTT<T[K],keyof T[K]> 
        } | boolean
    }
  
}



type test<T> = {
    where : Pick<T,keyof T>
}

var eee : test<b> = {
    where : {
        fucku : {
            e : {

            }
        }
    }
}

function test<T>(o: new() => T, o1: test<T>) {

}



