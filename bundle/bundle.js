(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("test/test.js", function(exports, require, module, __filename, __dirname){

"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// import { Repository } from './../repository';
// import { getEntityManager } from './../entity_manager';
// import { getConnection } from '../index';
// import { IDriverBase } from '../driver/driver';
var x_1 = require("../x");
var member_1 = require("./member");
// console.log("cubi")
// var a=  new Member;
// var b = new Profile
// a.member_add_time = 123;
// console.log(a)
// var d = EntityWatchingMap.get(a);
// console.log(d)
x_1.X.start({
    "name": "default",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "123",
    "database": "yoehi",
    // "autoSchemaSync": false,`
    // "entities": [
    // ],
    // "subscribers": [
    // 
    // ],
    // "migrations": [
    // 
    // ],
    "tablesPrefix": "ra_"
}).then(function (managers) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var ret;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, x_1.X.find(member_1.Member, {
                    where: {
                        member_name: ['like', 'cubi'],
                        member_id: ['in', [10, 20, 30]],
                        member_add_time: ['>', new Date().getTime() / 1000],
                        and: {
                            member_id: 1,
                        },
                        or: {
                            member_name: "cubi"
                        }
                    },
                    order: {
                        member_id: "asc"
                    },
                    group: 'member_id',
                    limit: 10
                })];
            case 1:
                ret = _a.sent();
                console.log(ret[0].member_id);
                x_1.getEntityManager().getRepository(member_1.Member);
                // var a = getEntityManager().getRepository(Member).createQueryBuilder("cubi")
                return [2 /*return*/];
        }
    });
}); }).catch(function (e) {
    console.log(e);
    console.log("Fuck");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL3Rlc3QvdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsaUJBbUZBOzs7QUF2RkEsZ0RBQWdEO0FBQ2hELDBEQUEwRDtBQUMxRCw0Q0FBNEM7QUFDNUMsa0RBQWtEO0FBQ2xELDBCQUEyQztBQUUzQyxtQ0FBMkM7QUFJM0Msc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFFdEIsMkJBQTJCO0FBRTNCLGlCQUFpQjtBQUNqQixvQ0FBb0M7QUFDcEMsaUJBQWlCO0FBQ2pCLEtBQUMsQ0FBQyxLQUFLLENBQ0g7SUFDSSxNQUFNLEVBQUUsU0FBUztJQUNqQixNQUFNLEVBQUUsT0FBTztJQUNmLE1BQU0sRUFBRSxXQUFXO0lBQ25CLE1BQU0sRUFBRSxJQUFJO0lBQ1osVUFBVSxFQUFFLE1BQU07SUFDbEIsVUFBVSxFQUFFLEtBQUs7SUFDakIsVUFBVSxFQUFFLE9BQU87SUFDbkIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixLQUFLO0lBQ0wsbUJBQW1CO0lBQ25CLEdBQUc7SUFDSCxLQUFLO0lBQ0wsa0JBQWtCO0lBQ2xCLEdBQUc7SUFDSCxLQUFLO0lBQ0wsY0FBYyxFQUFFLEtBQUs7Q0FDeEIsQ0FDSixDQUFDLElBQUksQ0FBQyxVQUFNLFFBQVE7Ozs7b0JBRVAscUJBQU0sS0FBQyxDQUFDLElBQUksQ0FBQyxlQUFNLEVBQUM7b0JBQzFCLEtBQUssRUFBRTt3QkFDSCxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO3dCQUM3QixTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUMvQixlQUFlLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7d0JBQ25ELEdBQUcsRUFBRTs0QkFDRCxTQUFTLEVBQUUsQ0FBQzt5QkFDZjt3QkFDRCxFQUFFLEVBQUU7NEJBQ0EsV0FBVyxFQUFFLE1BQU07eUJBQ3RCO3FCQUNKO29CQUNELEtBQUssRUFBRTt3QkFDSCxTQUFTLEVBQUUsS0FBSztxQkFDbkI7b0JBQ0QsS0FBSyxFQUFFLFdBQVc7b0JBQ2xCLEtBQUssRUFBRSxFQUFFO2lCQUNaLENBQUMsRUFBQTs7c0JBakJRLFNBaUJSO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUc3QixvQkFBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxlQUFNLENBQUMsQ0FBQztnQkFFekMsOEVBQThFO2dCQUM5RSxzQkFBTzs7O0tBZ0JWLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDO0lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDdkIsQ0FBQyxDQUFDLENBQUEifQ==
});
___scope___.file("x.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var XEntity_1 = require("./decorator/XEntity");
var manager_1 = require("./driver/mysql/manager");
var constant_1 = require("./constant");
var repository_1 = require("./repository");
var index_1 = require("./index");
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
var respInstance = new Map();
var XEntityManager = (function () {
    function XEntityManager() {
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
            var desc = XEntity_1.EntityMap.get(model.__proto__);
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
                var ret_1 = getEntityManager().getRepository(constructor).insert(model);
                return ret_1;
            }
            else {
                if (!(desc.primary in model)) {
                    return model;
                }
                getEntityManager().getRepository(constructor).updateById(model[desc.primary], model);
            }
            // var primary = 'id';
            // var struct;
            // if(struct = EntityMap.get(model.__proto__)){
            //     if(struct.primary){
            //         primary = struct.primary;
            //     }
            // }
            // //如果主键改变了，视为新插入，否则视为更新
            // if(changed.includes(primary)){
            // }
        }
        var e_1, _a;
    };
    XEntityManager.prototype.query = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length == 2) {
            return index_1.getConnection(args[0]).query(args[1]);
        }
        return index_1.getConnection().query(args[0]);
    };
    /**
     * 对find方法的封装，有提示，有提示，有提示，重点要说三遍
     * @param entity
     * @param option
     */
    XEntityManager.prototype.find = function (entity, option) {
        console.log(entity);
        return this.getRepository(entity).find(option);
    };
    XEntityManager.prototype.findOne = function (entity, option) {
        return this.getRepository(entity).findOne(option);
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
                ret.push(val);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return ret;
        var e_2, _c;
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
    };
    XEntityManager.prototype.getRepository = function (model) {
        var resp = respInstance.get(model.prototype) || (function () {
            console.error(model);
            var resp = new repository_1.Repository(model);
            respInstance.set(model.prototype, resp);
            return resp;
        })();
        return resp;
    };
    return XEntityManager;
}());
exports.XEntityManager = XEntityManager;
exports.X = new XEntityManager;
function getEntityManager() {
    return exports.X;
}
exports.getEntityManager = getEntityManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQW1HO0FBSW5HLGtEQUFnRTtBQUNoRSx1Q0FBdUM7QUFDdkMsMkNBQXNEO0FBQ3RELGlDQUF3QztBQUt4Qzs7O0dBR0c7QUFDSCxzREFBc0Q7QUFDdEQsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2QixxQ0FBcUM7QUFDckMsUUFBUTtBQUNSLG1DQUFtQztBQUNuQyxtREFBbUQ7QUFDbkQseUNBQXlDO0FBQ3pDLHFDQUFxQztBQUNyQyxZQUFZO0FBQ1osVUFBVTtBQUNWLHFDQUFxQztBQUNyQyxvQkFBb0I7QUFDcEIsSUFBSTtBQUNKLElBQUksWUFBWSxHQUFHLElBQUksR0FBRyxFQUF1QixDQUFBO0FBRWpEO0lBQUE7SUE2SkEsQ0FBQztJQWxKRyw2QkFBSSxHQUFKLFVBQVEsTUFBVztRQUNmLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sR0FBRyxNQUFhLENBQUM7WUFDdkIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDOztnQkFDYixHQUFHLENBQUMsQ0FBYyxJQUFBLFdBQUEsaUJBQUEsTUFBTSxDQUFBLDhCQUFBO29CQUFuQixJQUFJLE9BQUssbUJBQUE7b0JBQ1YsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQUssQ0FBQyxDQUFDLENBQUM7aUJBQzlCOzs7Ozs7Ozs7WUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxLQUFLLEdBQU0sTUFBTSxDQUFDO1lBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsUUFBUTtZQUNSLElBQUksSUFBSSxH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
});
___scope___.file("decorator/XEntity.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = require("../constant");
exports.EntityMap = new Map();
function XEntity(first) {
    var type = 'default';
    var final = function (target) {
        var info;
        if (!exports.EntityMap.has(target.prototype)) {
            info = InitEntityDescirption();
            exports.EntityMap.set(target.prototype, info);
        }
        else {
            info = exports.EntityMap.get(target.prototype);
        }
        info.database = type;
        info.tableName = target.name.replace(/^[A-Z]/, function (a) {
            return a.toLowerCase();
        }).replace(/[A-Z][a-z]/g, function (a) {
            return '_' + a.toLowerCase();
        });
        //大概会用到吧
        constant_1.ORMCONFIG.MODELS[type] = constant_1.ORMCONFIG.MODELS[type] || [];
        constant_1.ORMCONFIG.MODELS[type].push(target);
        var fn = target.prototype.constructor;
        return function () {
            fn();
            var watching = {
                changed: new Set()
            };
            var proxy = new Proxy(this, {
                set: function (obj, key, val) {
                    watching.changed.add(key);
                    return obj[key] = val;
                }
            });
            exports.EntityWatchingMap.set(proxy, watching);
            return proxy;
        };
    };
    if (first) {
        if (typeof first == 'function') {
            return final(first);
        }
        else {
            return final;
        }
    }
    return final;
    // function(target : Function){
    // ORMCONFIG[type] = ORMCONFIG[type]
    // }
}
exports.XEntity = XEntity;
exports.EntityWatchingMap = new WeakMap();
function InitEntityDescirption() {
    return {
        fields: [],
        primary: 'id',
        database: 'default',
        tableName: ''
    };
}
exports.InitEntityDescirption = InitEntityDescirption;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWEVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RlY29yYXRvci9YRW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esd0NBQXdDO0FBSTdCLFFBQUEsU0FBUyxHQUFHLElBQUksR0FBRyxFQUE0QixDQUFDO0FBZTNELGlCQUF3QixLQUEwQztJQUM5RCxJQUFJLElBQUksR0FBRyxTQUFTLENBQUM7SUFDckIsSUFBSSxLQUFLLEdBQUcsVUFBUyxNQUFpQjtRQUNsQyxJQUFJLElBQXdCLENBQUU7UUFDOUIsRUFBRSxDQUFBLENBQUMsQ0FBQyxpQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2pDLElBQUksR0FBRyxxQkFBcUIsRUFBRSxDQUFDO1lBQy9CLGlCQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0QsSUFBSSxHQUFHLGlCQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQXNCLENBQUM7UUFDaEUsQ0FBQztRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLFVBQVMsQ0FBQztZQUNwRCxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUMsVUFBUyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUTtRQUNSLG9CQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLG9CQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0RCxvQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEMsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7UUFDdEMsTUFBTSxDQUFDO1lBQ0gsRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLFFBQVEsR0FBRztnQkFDWCxPQUFPLEVBQUUsSUFBSSxHQUFHLEVBQVU7YUFDN0IsQ0FBQTtZQUNELElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLElBQVcsRUFBRTtnQkFDL0IsR0FBRyxFQUFFLFVBQUMsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRO29CQUM5QixRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQzFCLENBQUM7YUFDSixDQUFDLENBQUM7WUFDSCx5QkFBaUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFBO0lBQ0wsQ0FBQyxDQUFBO0lBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQztRQUNOLEVBQUUsQ0FBQSxDQUFDLE9BQU8sS0FBSyxJQUFJLFVBQVUsQ0FBQyxDQUFBLENBQUM7WUFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNiLCtCQUErQjtJQUMzQixvQ0FBb0M7SUFDeEMsSUFBSTtBQUNSLENBQUM7QUFsREQsMEJBa0RDO0FBT1UsUUFBQSxpQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBeUIsQ0FBQztBQVVwRTtJQUNJLE1BQU0sQ0FBQztRQUNILE1BQU0sRUFBRyxFQUFFO1FBQ1gsT0FBTyxFQUFHLElBQUk7UUFDZCxRQUFRLEVBQUcsU0FBUztRQUNwQixTQUFTLEVBQUcsRUFBRTtLQUNqQixDQUFBO0FBQ0wsQ0FBQztBQVBELHNEQU9DIn0=
});
___scope___.file("constant.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORMMODE;
(function (ORMMODE) {
    ORMMODE[ORMMODE["DESIGN"] = 0] = "DESIGN";
    ORMMODE[ORMMODE["PRODUCT"] = 1] = "PRODUCT";
})(ORMMODE = exports.ORMMODE || (exports.ORMMODE = {}));
exports.ORMCONFIG = {
    MODE: ORMMODE.DESIGN,
    MODELS: {},
    CONNECTION_MANAGER: {},
    CONFIGS: {}
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0U6L21qd29yay9Yb3JtL3NyYy9jb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQVksT0FHWDtBQUhELFdBQVksT0FBTztJQUNmLHlDQUFNLENBQUE7SUFDTiwyQ0FBTyxDQUFBO0FBQ1gsQ0FBQyxFQUhXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQUdsQjtBQUNVLFFBQUEsU0FBUyxHQWFwQjtJQUNJLElBQUksRUFBRyxPQUFPLENBQUMsTUFBTTtJQUNyQixNQUFNLEVBQUcsRUFBRTtJQUNYLGtCQUFrQixFQUFHLEVBRXBCO0lBQ0QsT0FBTyxFQUFHLEVBQUU7Q0FDZixDQUFBIn0=
});
___scope___.file("driver/mysql/manager.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mysql = require("mysql");
var MysqlConnectionManager = (function () {
    function MysqlConnectionManager(config) {
        this.config = config;
    }
    MysqlConnectionManager.prototype.buildWhere = function (whereOption, desc) {
        var buffer = [];
        //build and
        if (whereOption.and) {
            var str = this.buildWhere(whereOption.and, desc).trim();
            if (str != '') {
                buffer.push(' and (' + str + ')');
            }
            delete whereOption.and;
        }
        //build or
        if (whereOption.or) {
            var str = this.buildWhere(whereOption.or, desc);
            if (str.trim() != '') {
                buffer.push(' or ( ' + str + ')');
            }
            delete whereOption.or;
        }
        for (var name in whereOption) {
            var val = whereOption[name];
            var fieldName = desc.tableName + '.' + name;
            "";
            if (Array.isArray(val)) {
                if (val[0] == 'like') {
                    buffer.push(" and " + fieldName + " like '" + val[1] + "'");
                }
                else if (val[0] == 'in') {
                    buffer.push(" and " + fieldName + " in ( " + val[1].map(function (item) { return "'" + item + "'"; }).join(',') + " )");
                }
            }
            else {
                if (val == null) {
                    buffer.push(" and " + fieldName + " is null");
                }
                else {
                    buffer.push(" and " + fieldName + " = '" + val + "'");
                }
            }
        }
        return buffer.join(" ").replace(/^\s*(and|or)/, "");
    };
    MysqlConnectionManager.prototype.buildSql = function (findOption, desc) {
        var where;
        var group = '';
        var sql = "\n            select * from `" + this.config.database + "`.`" + (this.config.tablesPrefix + desc.tableName) + "` as " + desc.tableName + "\n        ";
        if (findOption.where) {
            var str = this.buildWhere(findOption.where, desc);
            if (str != '') {
                sql += ' where ' + str;
            }
        }
        if (findOption.group) {
            sql += ' group by ' + (desc.tableName + "." + findOption.group);
        }
        if (findOption.order) {
            var buf = [];
            for (var name in findOption.order) {
                buf.push(desc.tableName + "." + name + " " + findOption.order[name]);
            }
            sql += " order by " + buf.join(",");
        }
        if (findOption.limit) {
            if (Array.isArray(findOption.limit)) {
                sql += ' limit ' + findOption.limit[0] + ' , ' + findOption.limit[1];
            }
            else {
                sql += ' limit ' + findOption.limit;
            }
        }
        return sql;
    };
    MysqlConnectionManager.prototype.find = function (findOption, desc) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var sql, ret;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = this.buildSql(findOption, desc);
                        return [4 /*yield*/, this.query(sql)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret || []];
                }
            });
        });
    };
    MysqlConnectionManager.prototype.insert = function (data, desc) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var fields, values, key, dbname, sql, ret;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fields = [], values = [];
                        for (key in data) {
                            if (typeof data[key] == 'function')
                                continue;
                            fields.push("`" + key + "`");
                            if (data[key] == null) {
                                values.push('null');
                            }
                            else {
                                values.push("'" + data[key] + "'");
                            }
                        }
                        dbname = this.config.database;
                        sql = "\n            insert into `" + dbname + "`.`" + (this.config.tablesPrefix + desc.tableName) + "`\n                (\n                    " + fields.join(",") + "\n                )\n                values\n                (\n                    " + values.join(",") + "\n                );\n        ";
                        return [4 /*yield*/, this.query(sql)];
                    case 1:
                        ret = _a.sent();
                        data[desc.primary] = ret.insertId;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * 创建对应的连接池
     */
    MysqlConnectionManager.prototype.start = function () {
        this.pool = mysql.createPool({
            host: this.config.host,
            user: this.config.username,
            password: this.config.password,
            database: this.config.database,
            port: this.config.port,
        });
    };
    MysqlConnectionManager.prototype.query = function (sql) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                    return;
                }
                connection.query(sql, function (err, vals, fields) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(vals);
                });
            });
        });
    };
    return MysqlConnectionManager;
}());
exports.MysqlConnectionManager = MysqlConnectionManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RyaXZlci9teXNxbC9tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDZCQUErQjtBQU8vQjtJQXVISSxnQ0FBbUIsTUFBbUI7UUFBbkIsV0FBTSxHQUFOLE1BQU0sQ0FBYTtJQUN0QyxDQUFDO0lBdEhPLDJDQUFVLEdBQWxCLFVBQXNCLFdBQTJCLEVBQUUsSUFBdUI7UUFDdEUsSUFBSSxNQUFNLEdBQWEsRUFBRSxDQUFDO1FBQzFCLFdBQVc7UUFDWCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEQsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFDRCxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUM7UUFDM0IsQ0FBQztRQUNELFVBQVU7UUFDVixFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDaEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBQ0QsT0FBTyxXQUFXLENBQUMsRUFB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
});
___scope___.file("repository.js", function(exports, require, module, __filename, __dirname){

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
        var desc = XEntity_1.EntityMap.get(this.factory.prototype);
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
            var desc;
            return tslib_1.__generator(this, function (_a) {
                desc = XEntity_1.EntityMap.get(this.factory.prototype);
                if (!desc) {
                    return [2 /*return*/, []];
                }
                return [2 /*return*/, index_1.getConnection(desc.database).find(findOption, desc)];
            });
        });
    };
    Repository.prototype.createQueryBuilder = function (alias) {
        return new querybuilder_1.QueryBuilder(this.factory, alias);
    };
    return Repository;
}());
exports.Repository = Repository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL3JlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaUNBQXdDO0FBQ3hDLCtDQUFnRDtBQUNoRCx5QkFBd0I7QUFDeEIsK0NBQThDO0FBbUM5QztJQUVJLG9CQUFtQixPQUFxQjtRQUFyQixZQUFPLEdBQVAsT0FBTyxDQUFjO0lBQ3hDLENBQUM7SUFFRCwrQkFBVSxHQUFWLFVBQThCLFVBQWdCLEVBQUUsS0FBUTtJQUV4RCxDQUFDO0lBS0QsNEJBQU8sR0FBUCxVQUFRLE1BQVc7UUFDZixNQUFNLENBQUMsS0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBSUQseUJBQUksR0FBSixVQUFLLE1BQVc7UUFDWixNQUFNLENBQUMsS0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCwyQkFBTSxHQUFOLFVBQU8sSUFBTztRQUNWLElBQUksSUFBSSxHQUFHLG1CQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsTUFBTSxDQUFDLHFCQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFJSyw0QkFBTyxHQUFiLFVBQ0ksVUFBeUI7Ozs7Ozt3QkFFekIsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ1gscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQTs7OEJBQTNCLFNBQTJCO3dCQUNyQyxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDOzRCQUNKLE1BQU0sZ0JBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDO3dCQUNsQixDQUFDO3dCQUNELHNCQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBQzs7OztLQUMzQjtJQUVLLHlCQUFJLEdBQVYsVUFDSSxVQUEwQjs7Z0JBRXRCLElBQUk7O3VCQUFHLG1CQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUNoRCxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7b0JBQ04sTUFBTSxnQkFBQyxFQUFFLEVBQUM7Z0JBQ2QsQ0FBQztnQkFDRCxzQkFBTyxxQkFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUksVUFBVSxFQUFDLElBQUksQ0FBQyxFQUFDOzs7S0FDaEU7SUFHRCx1Q0FBa0IsR0FBbEIsVUFBbUIsS0FBYztRQUM3QixNQUFNLENBQUMsSUFBSSwyQkFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVMLGlCQUFDO0FBQUQsQ0FBQyxBQTdERCxJQTZEQztBQTdEWSxnQ0FBVSJ9
});
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = require("./constant");
/**
 * 启动函数，调用该函数才会生效
 */
// export function XOrmStart(configs: XOrmConfig[] | XOrmConfig): Promise<IDriverBase[]> {
//     if (!configs) {
//         throw new Error("Xorm 配置文件错误");
//     }
//     if(!Array.isArray(configs)){
//         configs = [configs];
//     }
//     //开始启动连接池
//     var promises: Promise<any>[] = [];
//     configs.forEach(config => {
//         let manager: IDriverBase;
//         switch (config.type) {
//             case 'mysql':
//                 manager = new MysqlConnectionManager(config);
//                 break;
//             default:
//                 throw new Error("未被识别的数据库驱动：" + config.type);
//         }
//         ORMCONFIG.CONFIGS[config.name] = config;
//         promises.push(new Promise(async function (resolve, reject) {
//             await manager.start();
//             ORMCONFIG.CONNECTION_MANAGER[config.name] = manager;
//             resolve(manager);
//         }))
//     });
//     //返回对应的连接实例
//     return Promise.all(promises);
// }
/**
 * 得到一个连接
 */
function getConnection(type) {
    if (type === void 0) { type = 'default'; }
    return hasConnection(type) ? constant_1.ORMCONFIG.CONNECTION_MANAGER[type] : undefined;
}
exports.getConnection = getConnection;
/**
 * 判断是否存在这个数据库连接
 * @param type
 */
function hasConnection(type) {
    if (type === void 0) { type = 'default'; }
    return constant_1.ORMCONFIG.CONNECTION_MANAGER[type];
}
exports.hasConnection = hasConnection;
// /**
//  * 兼容typeorm
//  */
// export function getEntityManager(): EntityManager {
// } 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0U6L21qd29yay9Yb3JtL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLHVDQUF1QztBQUd2Qzs7R0FFRztBQUVILDBGQUEwRjtBQUMxRixzQkFBc0I7QUFDdEIsMENBQTBDO0FBQzFDLFFBQVE7QUFDUixtQ0FBbUM7QUFDbkMsK0JBQStCO0FBQy9CLFFBQVE7QUFDUixnQkFBZ0I7QUFDaEIseUNBQXlDO0FBQ3pDLGtDQUFrQztBQUNsQyxvQ0FBb0M7QUFDcEMsaUNBQWlDO0FBQ2pDLDRCQUE0QjtBQUM1QixnRUFBZ0U7QUFDaEUseUJBQXlCO0FBRXpCLHVCQUF1QjtBQUN2QixnRUFBZ0U7QUFFaEUsWUFBWTtBQUNaLG1EQUFtRDtBQUVuRCx1RUFBdUU7QUFDdkUscUNBQXFDO0FBQ3JDLG1FQUFtRTtBQUNuRSxnQ0FBZ0M7QUFDaEMsY0FBYztBQUNkLFVBQVU7QUFDVixrQkFBa0I7QUFDbEIsb0NBQW9DO0FBQ3BDLElBQUk7QUFFSjs7R0FFRztBQUNILHVCQUE4QixJQUFnQjtJQUFoQixxQkFBQSxFQUFBLGdCQUFnQjtJQUMxQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLG9CQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBQ2hGLENBQUM7QUFGRCxzQ0FFQztBQUVEOzs7R0FHRztBQUNILHVCQUE4QixJQUFnQjtJQUFoQixxQkFBQSxFQUFBLGdCQUFnQjtJQUMxQyxNQUFNLENBQUMsb0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRkQsc0NBRUM7QUFFRCxNQUFNO0FBQ04sZUFBZTtBQUNmLE1BQU07QUFDTixzREFBc0Q7QUFFdEQsSUFBSSJ9
});
___scope___.file("querybuilder.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * 为了兼容typeorm而写，实际可以抛弃这个做查询
 */
var QueryBuilder = (function () {
    function QueryBuilder(factory, alias) {
        this.factory = factory;
        this.alias = alias;
    }
    QueryBuilder.prototype.andWhere = function (condition, replacement) {
        return this;
    };
    QueryBuilder.prototype.orWhere = function (condition, replacement) {
        return this;
    };
    QueryBuilder.prototype.where = function (condition, replacement) {
        return this;
    };
    QueryBuilder.prototype.getCount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    QueryBuilder.prototype.getMany = function () {
    };
    QueryBuilder.prototype.getManyAndCount = function () {
    };
    QueryBuilder.prototype.getOne = function () {
    };
    QueryBuilder.prototype.getSql = function () {
    };
    return QueryBuilder;
}());
exports.QueryBuilder = QueryBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlidWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi9tandvcmsvWG9ybS9zcmMvcXVlcnlidWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBOztHQUVHO0FBQ0g7SUFDSSxzQkFDWSxPQUFxQixFQUNyQixLQUFhO1FBRGIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFRO0lBR3pCLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsU0FBaUIsRUFBRSxXQUFtQjtRQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsU0FBaUIsRUFBRSxXQUFtQjtRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sU0FBaUIsRUFBRSxXQUFtQjtRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFSywrQkFBUSxHQUFkOzs7Ozs7S0FFQztJQUVELDhCQUFPLEdBQVA7SUFFQSxDQUFDO0lBRUQsc0NBQWUsR0FBZjtJQUVBLENBQUM7SUFFRCw2QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDZCQUFNLEdBQU47SUFFQSxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLG9DQUFZIn0=
});
___scope___.file("test/member.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var XEntity_1 = require("../decorator/XEntity");
var PrimaryColumn_1 = require("../decorator/PrimaryColumn");
var Member = (function () {
    function Member() {
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi9tandvcmsvWG9ybS9zcmMvdGVzdC9tZW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0RBQStDO0FBRS9DLDREQUEyRDtBQUczRCxJQUFhLE1BQU07SUFBbkI7SUFVQSxDQUFDO0lBQUQsYUFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBUEc7SUFEQyw2QkFBYSxFQUFFOzt5Q0FDVTtBQUhqQixNQUFNO0lBRGxCLGlCQUFPLEVBQUU7R0FDRyxNQUFNLENBVWxCO0FBVlksd0JBQU07QUFhbkIsSUFBYSxPQUFPO0lBQXBCO0lBUUEsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQUxHO0lBREMsNkJBQWEsRUFBRTs7MENBQ1U7QUFIakIsT0FBTztJQURuQixpQkFBTztHQUNLLE9BQU8sQ0FRbkI7QUFSWSwwQkFBTyJ9
});
___scope___.file("decorator/PrimaryColumn.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XEntity_1 = require("./XEntity");
function PrimaryColumn(column) {
    return function (target, key) {
        var info = XEntity_1.EntityMap.get(target) || XEntity_1.InitEntityDescirption();
        info.primary = key;
        XEntity_1.EntityMap.set(target, info);
    };
}
exports.PrimaryColumn = PrimaryColumn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbWFyeUNvbHVtbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RlY29yYXRvci9QcmltYXJ5Q29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWdGO0FBRWhGLHVCQUE4QixNQUFZO0lBQ3RDLE1BQU0sQ0FBQyxVQUFVLE1BQWMsRUFBRSxHQUFXO1FBQ3hDLElBQUksSUFBSSxHQUFzQixtQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSwrQkFBcUIsRUFBRSxDQUFDO1FBQy9FLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLG1CQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUE7QUFDTCxDQUFDO0FBTkQsc0NBTUMifQ==
});
___scope___.file("decorator/PrimaryGeneratedColumn.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrimaryColumn_1 = require("./PrimaryColumn");
function PrimaryGeneratedColumn(column) {
    return PrimaryColumn_1.PrimaryColumn(column);
}
exports.PrimaryGeneratedColumn = PrimaryGeneratedColumn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpbWFyeUdlbmVyYXRlZENvbHVtbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovbWp3b3JrL1hvcm0vc3JjL2RlY29yYXRvci9QcmltYXJ5R2VuZXJhdGVkQ29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQWdEO0FBQ2hELGdDQUF1QyxNQUFZO0lBQy9DLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFGRCx3REFFQyJ9
});
___scope___.file("driver/driver.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi9tandvcmsvWG9ybS9zcmMvZHJpdmVyL2RyaXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0=
});
___scope___.file("header/config.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9FOi9tandvcmsvWG9ybS9zcmMvaGVhZGVyL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0=
});
});
FuseBox.target = "universal"

FuseBox.import("default/test/test.js");
FuseBox.main("default/test/test.js");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((d||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(d){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!d&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=m[a];if(!s){if(d&&"electron"!==h.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),v=i(c),p=s.f[v];return!p&&v.indexOf("*")>-1&&(l=v),p||l||(v=t(c,"/","index.js"),p=s.f[v],p||(v=c+".js",p=s.f[v]),p||(p=s.f[c+".jsx"]),p||(v=c+"/index.jsx",p=s.f[v])),{file:p,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:v}}function s(e,r,n){if(void 0===n&&(n={}),!d)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);h.dynamic(a,o),r(h.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=g[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=m[t.pkgName];if(u){var p={};for(var g in u.f)a.test(g)&&(p[g]=c(t.pkgName+"/"+g));return p}}if(!i){var h="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return h?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var w=i.locals={},y=n(t.validPath);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return c(e,{pkg:_,path:y,v:t.versions})},d||!v.require.main?w.require.main={filename:"./",paths:[]}:w.require.main=v.require.main;var j=[w.module.exports,w.require,w.module,t.validPath,y,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),w.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof window&&window.navigator,v=d?window:global;d&&(v.global=window),e=d&&"undefined"==typeof __fbx__dnm__?e:module.exports;var p=d?window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};d||(v.require=require);var m=p.p=p.p||{},g=p.e=p.e||{},h=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){g[e]=g[e]||[],g[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=m[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=m.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(m[e])return n(m[e].s);var t=m[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=m,r.isBrowser=d,r.isServer=!d,r.plugins=[],r}();return d||(v.FuseBox=h),e.FuseBox=h}(this))