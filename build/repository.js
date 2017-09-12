"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_1 = require("./index");
var XEntity_1 = require("./decorator/XEntity");
var x_1 = require("./x");
var querybuilder_1 = require("./querybuilder");
var Repository = (function () {
    function Repository(factory) {
        this.factory = factory;
    }
    Repository.prototype.updateById = function (primaryKey, model) {
    };
    Repository.prototype.persist = function (entity) {
        return x_1.X.save(entity);
    };
    Repository.prototype.save = function (entity) {
        return x_1.X.save(entity);
    };
    /**
     * typeorm中没有这个方法
     */
    Repository.prototype.insert = function (data) {
        var desc = XEntity_1.EntityMap.get(this.factory.name);
        if (!desc) {
            return data;
        }
        return index_1.getConnection(desc.database).insert(data, desc);
    };
    Repository.prototype.findOne = function (findOption) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ret;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        findOption.limit = 1;
                        return [4 /*yield*/, this.find(findOption)];
                    case 1:
                        ret = _a.sent();
                        if (ret) {
                            return [2 /*return*/, ret[0]];
                        }
                        return [2 /*return*/, new this.factory];
                }
            });
        });
    };
    Repository.prototype.find = function (findOption) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var desc, result, result_1, result_1_1, item, e_1, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        desc = XEntity_1.EntityMap.get(this.factory.name);
                        if (!desc) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, index_1.getConnection(desc.database).find(findOption, desc)];
                    case 1:
                        result = _b.sent();
                        try {
                            for (result_1 = tslib_1.__values(result), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
                                item = result_1_1.value;
                                //新版API
                                if (this.factory.prototype.onGet) {
                                    this.factory.prototype.onGet.call(item);
                                }
                                //兼容以前的写法
                                if (this.factory.prototype.onLoad) {
                                    this.factory.prototype.onLoad.call(item);
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (result_1_1 && !result_1_1.done && (_a = result_1.return)) _a.call(result_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    Repository.prototype.createQueryBuilder = function (alias) {
        return new querybuilder_1.QueryBuilder(this.factory, alias);
    };
    return Repository;
}());
exports.Repository = Repository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUF3QztBQUN4QywrQ0FBc0U7QUFDdEUseUJBQXdCO0FBQ3hCLCtDQUE4QztBQW1DOUM7SUFFSSxvQkFBbUIsT0FBcUI7UUFBckIsWUFBTyxHQUFQLE9BQU8sQ0FBYztJQUN4QyxDQUFDO0lBRUQsK0JBQVUsR0FBVixVQUE4QixVQUFnQixFQUFFLEtBQVE7SUFFeEQsQ0FBQztJQUtELDRCQUFPLEdBQVAsVUFBUSxNQUFXO1FBQ2YsTUFBTSxDQUFDLEtBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUlELHlCQUFJLEdBQUosVUFBSyxNQUFXO1FBQ1osTUFBTSxDQUFDLEtBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMkJBQU0sR0FBTixVQUFPLElBQU87UUFDVixJQUFJLElBQUksR0FBRyxtQkFBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxxQkFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBSUssNEJBQU8sR0FBYixVQUNJLFVBQXlCOzs7Ozs7d0JBRXpCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dCQUNYLHFCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUE7OzhCQUEzQixTQUEyQjt3QkFDckMsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQzs0QkFDSixNQUFNLGdCQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQzt3QkFDbEIsQ0FBQzt3QkFDRCxzQkFBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUM7Ozs7S0FDM0I7SUFFSyx5QkFBSSxHQUFWLFVBQ0ksVUFBMEI7O2dCQUV0QixJQUFJLGdDQVFBLElBQUk7Ozs7K0JBUkQsbUJBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7d0JBQzNDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQzs0QkFDTixNQUFNLGdCQUFDLEVBQUUsRUFBQzt3QkFDZCxDQUFDO3dCQUlZLHFCQUFNLHFCQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBSSxVQUFVLEVBQUMsSUFBSSxDQUFDLEVBQUE7O2lDQUEzRCxTQUEyRDs7NEJBQ3hFLEdBQUcsQ0FBQSxZQUFhLGlCQUFBLE1BQU0sQ0FBQTs7Z0NBQ2xCLE9BQU87Z0NBQ1AsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQ0FDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDNUMsQ0FBQztnQ0FDRCxTQUFTO2dDQUNULEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7b0NBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQzdDLENBQUM7NkJBQ0o7Ozs7Ozs7Ozt3QkFDRCxzQkFBTyxNQUFNLEVBQUM7Ozs7S0FFakI7SUFHRCx1Q0FBa0IsR0FBbEIsVUFBbUIsS0FBYztRQUM3QixNQUFNLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVMLGlCQUFDO0FBQUQsQ0FBQyxBQTVFRCxJQTRFQztBQTVFWSxnQ0FBVSJ9