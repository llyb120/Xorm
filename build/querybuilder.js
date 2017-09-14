"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 为了兼容typeorm而写，实际可以抛弃这个做查询
 */
class QueryBuilder {
    constructor(factory, alias) {
        this.factory = factory;
        this.alias = alias;
    }
    andWhere(condition, replacement) {
        return this;
    }
    orWhere(condition, replacement) {
        return this;
    }
    where(condition, replacement) {
        return this;
    }
    async getCount() {
    }
    getMany() {
    }
    getManyAndCount() {
    }
    getOne() {
    }
    getSql() {
    }
}
exports.QueryBuilder = QueryBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlidWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3F1ZXJ5YnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOztHQUVHO0FBQ0g7SUFDSSxZQUNZLE9BQXFCLEVBQ3JCLEtBQWE7UUFEYixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQVE7SUFHekIsQ0FBQztJQUVELFFBQVEsQ0FBQyxTQUFpQixFQUFFLFdBQW1CO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUFpQixFQUFFLFdBQW1CO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELEtBQUssQ0FBQyxTQUFpQixFQUFFLFdBQW1CO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRO0lBRWQsQ0FBQztJQUVELE9BQU87SUFFUCxDQUFDO0lBRUQsZUFBZTtJQUVmLENBQUM7SUFFRCxNQUFNO0lBRU4sQ0FBQztJQUVELE1BQU07SUFFTixDQUFDO0NBQ0o7QUF2Q0Qsb0NBdUNDIn0=