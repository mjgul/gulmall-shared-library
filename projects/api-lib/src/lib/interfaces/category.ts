export interface Icategory {
    id:string;
    name:string;
    icon:string;
}

export interface IsubCategory {
    id:string;
    catId:string;
    name:string;
    icon:string;
}

export interface IchildSubCat {
    id:string;
    subCatId:string;
    name:string;
    isGenderBased:boolean;
    icon:string;
}