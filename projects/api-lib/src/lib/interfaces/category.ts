import { Iname } from "./name";

export interface Icategory {
    id:string;
    name:Iname;
    icon:string;
}

export interface IsubCategory {
    id:string;
    catId:string;
    name:Iname;
    icon:string;
}

export interface IchildSubCat {
    id:string;
    subCatId:string;
    name:Iname;
    isGenderBased:boolean;
    icon:string;
}