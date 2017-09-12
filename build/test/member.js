"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var XEntity_1 = require("../decorator/XEntity");
var PrimaryColumn_1 = require("../decorator/PrimaryColumn");
var Member = (function () {
    function Member() {
    }
    Member.prototype.onGet = function () {
        this.member_name = 'guichu';
    };
    return Member;
}());
tslib_1.__decorate([
    PrimaryColumn_1.PrimaryColumn(),
    tslib_1.__metadata("design:type", Number)
], Member.prototype, "member_id", void 0);
Member = tslib_1.__decorate([
    XEntity_1.XEntity()
], Member);
exports.Member = Member;
var Profile = (function () {
    function Profile() {
    }
    return Profile;
}());
tslib_1.__decorate([
    PrimaryColumn_1.PrimaryColumn(),
    tslib_1.__metadata("design:type", Number)
], Profile.prototype, "member_id", void 0);
Profile = tslib_1.__decorate([
    XEntity_1.XEntity
], Profile);
exports.Profile = Profile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rlc3QvbWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdEQUErQztBQUUvQyw0REFBMkQ7QUFHM0QsSUFBYSxNQUFNO0lBQW5CO0lBYUEsQ0FBQztJQUpHLHNCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBRUwsYUFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBVkc7SUFEQyw2QkFBYSxFQUFFOzt5Q0FDVTtBQUhqQixNQUFNO0lBRGxCLGlCQUFPLEVBQUU7R0FDRyxNQUFNLENBYWxCO0FBYlksd0JBQU07QUFnQm5CLElBQWEsT0FBTztJQUFwQjtJQVFBLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFMRztJQURDLDZCQUFhLEVBQUU7OzBDQUNVO0FBSGpCLE9BQU87SUFEbkIsaUJBQU87R0FDSyxPQUFPLENBUW5CO0FBUlksMEJBQU8ifQ==