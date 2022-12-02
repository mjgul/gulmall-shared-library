import { Name } from './name';
import {Image} from './image';

export interface Item {
    name:Name,
    feature:Name[],
    available_color:string[],
    available_size:string[],
    price:number,
    currency:string,
    images:Image
}