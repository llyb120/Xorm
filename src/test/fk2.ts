import { ManyToOne } from './../decorator/Link';
import { Member } from './member';
type d = keyof Member; 
interface Test<T> {
    c : ( a : T) =>any;
    d : (a : T) => any;
}
// function a(i : any);
function a<T>(p1 :  (new() => T),p2 : Test<T>){

}
a(Member,{
    c(item){
        item.member_id
    },
    d(itm){
        itm.member_add_time
    }
})
