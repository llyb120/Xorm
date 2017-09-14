"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const XEntity_1 = require("../decorator/XEntity");
const PrimaryColumn_1 = require("../decorator/PrimaryColumn");
let Member = class Member {
    onGet() {
        this.member_name = 'guichu';
    }
};
tslib_1.__decorate([
    PrimaryColumn_1.PrimaryColumn(),
    tslib_1.__metadata("design:type", Number)
], Member.prototype, "member_id", void 0);
Member = tslib_1.__decorate([
    XEntity_1.XEntity()
], Member);
exports.Member = Member;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rlc3QvbWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtEQUErQztBQUUvQyw4REFBMkQ7QUFJM0QsSUFBYSxNQUFNLEdBQW5CO0lBU0ksS0FBSztRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO0lBQ2hDLENBQUM7Q0FFSixDQUFBO0FBVkc7SUFEQyw2QkFBYSxFQUFFOzt5Q0FDVTtBQUhqQixNQUFNO0lBRGxCLGlCQUFPLEVBQUU7R0FDRyxNQUFNLENBYWxCO0FBYlksd0JBQU0ifQ==