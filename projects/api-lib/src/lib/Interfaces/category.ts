import { Iname } from "./name";

export interface Icategory {
    id:string;
    name:Iname
    genderBased:boolean;
}

export interface IsubCategory {
    id:string;
    name:Iname
}

export interface IchildSubCat {
    id:string;
    name:Iname
}