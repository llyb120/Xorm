import { X } from './x';
/**
 * 授权
 */
export class Permission{

    constructor(
        public role : string,
        
    ){

    }
    
}

//注册一个超级用户
X.createRole("su");