import { Iname } from "./name";

export interface Icategory {
    id:string;
    name:Iname
}

export interface IsubCategory {
    id:string;
    catId:string;
    name:Iname
}

export interface IchildSubCat {
    id:string;
    subCatId:string;
    name:Iname;
    isGenderBased:boolean;
}