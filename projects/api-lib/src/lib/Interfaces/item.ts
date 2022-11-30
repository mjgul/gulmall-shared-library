import { Name } from './name';

export interface Item {
    name:Name,
    feature:Name[],
    available_color:string[],
    available_size:string[],
    price:number,
    currency:string
}