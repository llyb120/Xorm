import { ManyToOne } from './../decorator/Link';
import { Member } from './member';
type d = keyof Member; 
interface Test<T> {
    c : ( a : T) =>any;
    d : (a : T) => any;
}
// function a(i : any);
function a<T>(p1 : (type?:any) => (new() => T),p2 : Test<T>){

}
a(type => Member,{
    c(item){
        item.member_id
    },
    d(itm){
        itm.member_add_time
    }
})
a(type => Member,{
})

a({
    c(){

   },
    d(){

    }
})
a(Member,m => m.member_id)
a(Member,m => m.member_add_time)

ManyToOne(type => Member,m => m )