"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var XEntity_1 = require("./decorator/XEntity");
var manager_1 = require("./driver/mysql/manager");
var constant_1 = require("./constant");
var repository_1 = require("./repository");
var gc_1 = require("./gc");
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
            var changed = gc_1.ObservingObject.getChanged(model);
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
            if (changed.includes(desc.primary) || !(desc.primary in model)) {
                var ret_1 = this.getRepository(constructor).insert(model);
                return ret_1;
            }
            else {
                if (!(desc.primary in model)) {
                    return model;
                }
                this.getRepository(constructor).updateById(model[desc.primary], model);
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
                                    observed = gc_1.ObservingObject.addObserveObject(item);
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
                            observed = gc_1.ObservingObject.addObserveObject(result);
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
 ```````````* 得到一个连接
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUFtRztBQUluRyxrREFBZ0U7QUFDaEUsdUNBQXVDO0FBQ3ZDLDJDQUFzRDtBQUN0RCwyQkFBdUM7QUFJdkM7SUFBQTtRQUVZLGlCQUFZLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7SUFzTDNELENBQUM7SUFwS0csNkJBQUksR0FBSixVQUFRLE1BQVc7UUFDZixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLEdBQUcsTUFBYSxDQUFDO1lBQ3ZCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQzs7Z0JBQ2IsR0FBRyxDQUFDLENBQWMsSUFBQSxXQUFBLGlCQUFBLE1BQU0sQ0FBQSw4QkFBQTtvQkFBbkIsSUFBSSxPQUFLLG1CQUFBO29CQUNWLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUM5Qjs7Ozs7Ozs7O1lBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksS0FBSyxHQUFNLE1BQU0sQ0FBQztZQUN0QixJQUFJLE9BQU8sR0FBRyxvQkFBZSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRCxRQUFRO1lBQ1IsSUFBSSxJQUFJLEdBQUcsbUJBQVMsQ0FBQyxHQUFHLENBQUUsS0FBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQztZQUNELGFBQWE7WUFDYixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9B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