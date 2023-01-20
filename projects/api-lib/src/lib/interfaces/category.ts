import { Iname } from "./name";

export interface Icategory {
    id:string;
    name:string
}

export interface IsubCategory {
    id:string;
    catId:string;
    name:string
}

export interface IchildSubCat {
    id:string;
    subCatId:string;
    name:string;
    isGenderBased:boolean;
}