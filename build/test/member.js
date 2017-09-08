"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var xentity_1 = require("../decorator/xentity");
var x_1 = require("../x");
var Member = (function () {
    function Member() {
    }
    return Member;
}());
Member = tslib_1.__decorate([
    xentity_1.XEntity()
], Member);
exports.Member = Member;
var member = x_1.X(Member);
//# sourceMappingURL=member.js.map