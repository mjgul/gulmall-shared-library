import { Injectable } from "@angular/core";
import {
  Icategory,
  IsubCategory,
  IchildSubCat,
} from "../../interfaces/category";

@Injectable({
  providedIn: "root",
})
export class CategoriesDataManipulationService {
  constructor() {}

  // MAPS SERVER CATEGORY TO INTERFACE CATEGORY.
  /**
   * TAKES THE CATEGORIES AND CONVERT THEM INTO CATEGORY CLASS.
   * @param categories []
   * @returns Icategory[]
   */
  public toCategory = (categories: any[]): Icategory[] => {
    return categories.map(
      (category): Icategory => ({
        id: category.ID,
        name: category.name.en,
        icon: category.icon,
      })
    );
  };
  
  /**
   * TAKES THE SUB CATEGORY ITEMS AND CONVERT THEM INTO SUB CATEGORY CLASS.
   * @param subCategories []
   * @returns IsubCategory[]
   */
  public toSubcategory = (subCategories: any[]): IsubCategory[] => {
    return subCategories.map(
      (subCat): IsubCategory => ({
        id: subCat.ID,
        name: subCat.name.en,
        catId: "",
        icon: subCat.icon,
        //catId:subCategories?.catId
      })
    );
  };

  /**
   * TAKES THE CHILD CATEGORY ITEMS AND CONVERT THEM INTO SUB CATEGORY CHILD CLASS.
   * @param childCategory []
   * @returns IchildSubCat[]
   */
  public toChildSubCategory = (childCategory: any[]): IchildSubCat[] => {
    return childCategory.map(
      (childCat): IchildSubCat => ({
        id: childCat.ID,
        name: childCat.name.en,
        isGenderBased: true,
        subCatId: "",
        icon: childCat.icon,
      })
    );
  };
}
