"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// import { XEntity } from '../decorator/XEntity';
const x_1 = require("../x");
// import { PrimaryColumn } from "../decorator/PrimaryColumn";
// import {  ManyToOne } from '../decorator/Link';
let Member = class Member {
    onGet() {
        this.member_name = 'guichu';
    }
};
Member = tslib_1.__decorate([
    x_1.X.Entity({
        primary: item => item.member_id
    })
], Member);
exports.Member = Member;
// Member.prototype.constructor = function(){
// console.log(12321)
// }
// var con = Object.getOwnPropertyDescriptor(Member.prototype,'constructor');
// con.value = class{
//     a = 1;
// }
// X.registerEntity(Member,{
//     primary : e => e.member_id 
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rlc3QvbWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtEQUFrRDtBQUNsRCw0QkFBeUI7QUFDekIsOERBQThEO0FBQzlELGtEQUFrRDtBQU1sRCxJQUFhLE1BQU0sR0FBbkI7SUFRSSxLQUFLO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7SUFDaEMsQ0FBQztDQUVKLENBQUE7QUFaWSxNQUFNO0lBSGxCLEtBQUMsQ0FBQyxNQUFNLENBQUM7UUFDTixPQUFPLEVBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTO0tBQ25DLENBQUM7R0FDVyxNQUFNLENBWWxCO0FBWlksd0JBQU07QUFjbkIsNkNBQTZDO0FBQ3pDLHFCQUFxQjtBQUN6QixJQUFJO0FBQ0osNkVBQTZFO0FBQzdFLHFCQUFxQjtBQUNyQixhQUFhO0FBQ2IsSUFBSTtBQUlKLDRCQUE0QjtBQUM1QixrQ0FBa0M7QUFDbEMsTUFBTSJ9