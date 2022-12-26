import { Size } from "../classes/generic/size";
import { Color } from "../classes/generic/color";
import { Iname } from "./name";
import { Iimage } from "./image";

export interface Icloth {
    id:string;
    price:number;
    name:Iname;
    feature:Iname[];
    available_color:Color[];
    available_size:Size[];
    images:Iimage[];
}