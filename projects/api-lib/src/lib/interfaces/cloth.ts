import { Size } from "../classes/generic/size";
import { Color } from "../classes/generic/color";
import { Iimage } from "./image";

export interface Icloth {
    id:string;
    price:number;
    name:string;
    feature:string[];
    available_color:Color[];
    available_size:Size[];
    images:Iimage[];
}