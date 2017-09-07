

import {X} from "../x";
// import { IModel } from '../header/model';
import {  XModel } from '../decorator/model';


@XModel
export class Member{
    findOne: {};
    find: {};
    d: number;
    public e: number;
}


var a = X(Member);
a.e = 1;

a.e
