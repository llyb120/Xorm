"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var x_1 = require("../x");
// import { IModel } from '../header/model';
var model_1 = require("../decorator/model");
var Member = (function () {
    function Member() {
    }
    return Member;
}());
Member = tslib_1.__decorate([
    model_1.XModel
], Member);
exports.Member = Member;
var a = x_1.X(Member);
a.e = 1;
a.e;
