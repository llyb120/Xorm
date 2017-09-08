"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var MysqlConnectionManager = (function () {
    function MysqlConnectionManager(config) {
        this.config = config;
    }
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
                    reject();
                    return;
                }
                connection.query(sql, function (err, vals, fields) {
                    if (err) {
                        reject();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kcml2ZXIvbXlzcWwvbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDZCQUErQjtBQUkvQjtJQUdJLGdDQUFtQixNQUFtQjtRQUFuQixXQUFNLEdBQU4sTUFBTSxDQUFhO0lBQ3RDLENBQUM7SUFFRDs7T0FFRztJQUNILHNDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzFCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDOUIsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUM5QixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1NBRXpCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBSyxHQUFMLFVBQU0sR0FBVztRQUFqQixpQkFnQkM7UUFmRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixLQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFDLEdBQUcsRUFBRSxVQUFVO2dCQUNwQyxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDO29CQUNKLE1BQU0sRUFBRSxDQUFDO29CQUNULE1BQU0sQ0FBQztnQkFDWCxDQUFDO2dCQUNELFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLFVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxNQUFNO29CQUNqQyxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDO3dCQUNKLE1BQU0sRUFBRSxDQUFBO3dCQUNSLE1BQU0sQ0FBQztvQkFDWCxDQUFDO29CQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLDZCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQXJDWSx3REFBc0IifQ==