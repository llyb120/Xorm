"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var XEntity_1 = require("./decorator/XEntity");
var manager_1 = require("./driver/mysql/manager");
var constant_1 = require("./constant");
var repository_1 = require("./repository");
/**
 * 得到一个模型对象的实例，需要放入监视对象中
 * @param model
 */
// function X<Model>(model: { new(): Model }): Model {
//     var ins = new model;
//     var watching = {
//         changed: new Set<string>()
//     }
//     var proxy = new Proxy(ins, {
//         set: (obj: any, key: any, val: any) => {
//             watching.changed.add(key);
//             return obj[key] = val;
//         }
//     });
//     watchMap.set(proxy, watching);
//     return proxy;
// }
// var respInstance = new Map<any, Repository<any>>()
var XEntityManager = (function () {
    function XEntityManager() {
        this.repoInstance = new Map();
    }
    XEntityManager.prototype.save = function (models) {
        if (Array.isArray(models)) {
            models = models;
            var ret = [];
            try {
                for (var models_1 = tslib_1.__values(models), models_1_1 = models_1.next(); !models_1_1.done; models_1_1 = models_1.next()) {
                    var model_1 = models_1_1.value;
                    ret.push(this.save(model_1));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (models_1_1 && !models_1_1.done && (_a = models_1.return)) _a.call(models_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return ret;
        }
        else {
            var model = models;
            var changed = this.getChanged(model);
            //查找描述信息
            var desc = XEntity_1.EntityMap.get(model.__proto__.constructor.name);
            if (!desc) {
                return model;
            }
            //没有发生任何改变的情况
            if (!changed || !changed.length) {
                return model;
            }
            //查询主键，如果没有的情况，默认为“ID"
            var constructor = model.__proto__.constructor;
            //删除对changed的引用
            var _changed = XEntity_1.EntityWatchingMap.get(model.__proto__.constructor.name);
            if (_changed) {
                _changed.changed = new Set();
            }
            if (changed.includes(desc.primary) || !(desc.primary in model)) {
                var ret_1 = getEntityManager().getRepository(constructor).insert(model);
                return ret_1;
            }
            else {
                if (!(desc.primary in model)) {
                    return model;
                }
                getEntityManager().getRepository(constructor).updateById(model[desc.primary], model);
            }
        }
        var e_1, _a;
    };
    XEntityManager.prototype.query = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length == 2) {
            return this.getConnection(args[0]).query(args[1]);
        }
        return this.getConnection().query(args[0]);
    };
    /**
     * 对find方法的封装，有提示，有提示，有提示，重点要说三遍
     * 为了效率着想，暂时不自动检测内部属性变化
     * 提供第三个属性来强制要求返回观测对象
     * @param entity
     * @param option
     */
    XEntityManager.prototype.find = function (entity, option, observable) {
        if (observable === void 0) { observable = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, ret, result_1, result_1_1, item, observed, e_2, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getRepository(entity).find(option)];
                    case 1:
                        result = _b.sent();
                        if (observable) {
                            ret = [];
                            try {
                                for (result_1 = tslib_1.__values(result), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
                                    item = result_1_1.value;
                                    observed = XEntity_1.ObserveObjectChanged(item);
                                    //劫持API，这才是你的亲爹
                                    observed.__proto__ = entity.prototype;
                                    ret.push(observed);
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (result_1_1 && !result_1_1.done && (_a = result_1.return)) _a.call(result_1);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                            return [2 /*return*/, ret];
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * findOne默认追加observable
     * 可以检测到该元素内部的变动
     * @param entity
     * @param option
     */
    XEntityManager.prototype.findOne = function (entity, option) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, observed;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRepository(entity).findOne(option)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            observed = XEntity_1.ObserveObjectChanged(result);
                            //劫持API，这才是你的亲爹
                            observed.__proto__ = entity.prototype;
                            return [2 /*return*/, observed];
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 得到一个模型中发生了改变的东西，便于以后注册钩子函数
     * @param model
     */
    XEntityManager.prototype.getChanged = function (model) {
        if (!model) {
            return [];
        }
        var changed = XEntity_1.EntityWatchingMap.get(model).changed;
        var ret = [];
        try {
            for (var _a = tslib_1.__values(changed.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var val = _b.value;
                if (val == '__proto__')
                    continue;
                ret.push(val);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return ret;
        var e_3, _c;
    };
    /**
     * 启动函数，只有调用了这个并且传入对应的数据库连接配置，XORM才会生效
     * @param configs
     */
    XEntityManager.prototype.start = function (configs) {
        if (!configs) {
            throw new Error("Xorm 配置文件错误");
        }
        if (!Array.isArray(configs)) {
            configs = [configs];
        }
        //开始启动连接池
        var promises = [];
        configs.forEach(function (config) {
            var manager;
            switch (config.type) {
                case 'mysql':
                    manager = new manager_1.MysqlConnectionManager(config);
                    break;
                default:
                    throw new Error("未被识别的数据库驱动：" + config.type);
            }
            constant_1.ORMCONFIG.CONFIGS[config.name] = config;
            promises.push(new Promise(function (resolve, reject) {
                return tslib_1.__awaiter(this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, manager.start()];
                            case 1:
                                _a.sent();
                                constant_1.ORMCONFIG.CONNECTION_MANAGER[config.name] = manager;
                                resolve(manager);
                                return [2 /*return*/];
                        }
                    });
                });
            }));
        });
        //返回对应的连接实例
        return Promise.all(promises);
    };
    XEntityManager.prototype.transition = function (command) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    XEntityManager.prototype.getRepository = function (model) {
        var _this = this;
        // return new Repository(model);
        //让单例见鸡儿去吧
        var resp = this.repoInstance.get(model.name) || (function () {
            var resp = new repository_1.Repository(model);
            _this.repoInstance.set(model.name, resp);
            return resp;
        })();
        return resp;
    };
    /**
 * 得到一个连接
 */
    XEntityManager.prototype.getConnection = function (type) {
        if (type === void 0) { type = 'default'; }
        return this.hasConnection(type) ? constant_1.ORMCONFIG.CONNECTION_MANAGER[type] : undefined;
    };
    /**
     * 判断是否存在这个数据库连接
     * @param type
     */
    XEntityManager.prototype.hasConnection = function (type) {
        if (type === void 0) { type = 'default'; }
        return constant_1.ORMCONFIG.CONNECTION_MANAGER[type];
    };
    return XEntityManager;
}());
exports.XEntityManager = XEntityManager;
exports.X = new XEntityManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUF5SDtBQUl6SCxrREFBZ0U7QUFDaEUsdUNBQXVDO0FBQ3ZDLDJDQUFzRDtBQUt0RDs7O0dBR0c7QUFDSCxzREFBc0Q7QUFDdEQsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2QixxQ0FBcUM7QUFDckMsUUFBUTtBQUNSLG1DQUFtQztBQUNuQyxtREFBbUQ7QUFDbkQseUNBQXlDO0FBQ3pDLHFDQUFxQztBQUNyQyxZQUFZO0FBQ1osVUFBVTtBQUNWLHFDQUFxQztBQUNyQyxvQkFBb0I7QUFDcEIsSUFBSTtBQUNKLHFEQUFxRDtBQUVyRDtJQUFBO1FBRVksaUJBQVksR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQztJQThNM0QsQ0FBQztJQTVMRyw2QkFBSSxHQUFKLFVBQVEsTUFBVztRQUNmLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sR0FBRyxNQUFhLENBQUM7WUFDdkIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDOztnQkFDYixHQUFHLENBQUMsQ0FBYyxJQUFBLFdBQUEsaUJBQUEsTUFBTSxDQUFBLDhCQUFBO29CQUFuQixJQUFJLE9BQUssbUJBQUE7b0JBQ1YsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQUssQ0FBQyxDQUFDLENBQUM7aUJBQzlCOzs7Ozs7Ozs7WUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxLQUFLLEdBQU0sTUFBTSxDQUFDO1lBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsUUFBUTtZQUNSLElBQUksSUFBSSxHQUFHLG1CQUFTLENBQUMsR0FBRyxDQUFF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