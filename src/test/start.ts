import { X } from '../x';
import { config } from './db';
export async function start(){
    X.startORM(config);
}