import { EntityMap, EntityDescirption, InitEntityDescirption } from './XEntity';
import { ORMCONFIG } from './../constant';
export function PrimaryColumn(column?: any) {
    return function (target: Object, key: string) {
        var info : EntityDescirption = EntityMap.get(target) || InitEntityDescirption();
        info.primary = key;
        EntityMap.set(target,info);
    }
}