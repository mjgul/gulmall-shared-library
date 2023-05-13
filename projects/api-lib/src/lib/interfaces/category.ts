export interface ProductType {
    id:string;
    name:string;
    icon:string;
  }
export interface Icategory extends ProductType {
      // Category specific properties
}

export interface IsubCategory extends ProductType {
    // SubCategory specific properties
    catId:string;
}

export interface IchildSubCat extends ProductType {
    // ChildItem specific properties
    subCatId:string;
    isGenderBased:boolean;
}