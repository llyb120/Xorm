import Member from './test/model';


class c{
    static ccc(){
        console.log(this);
    }


}

class a extends c{
}
a .ccc()