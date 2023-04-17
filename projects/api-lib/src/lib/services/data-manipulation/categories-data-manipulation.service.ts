import { Injectable } from '@angular/core';
import { Icategory,IsubCategory,IchildSubCat } from '../../interfaces/category';

@Injectable({
    providedIn: 'root'
  })

export class CategoriesDataManipulationService {
    constructor() { }

    // MAPS SERVER CATEGORY TO INTERFACE CATEGORY.
    public toCategory = (categories:any[]):Icategory[] => {
         return categories.map((category): Icategory => ({
          id: category.ID,
          name: category.name.en,
          icon: category.icon
      }))
      }

    public toSubcategory = (subCategories:any[]):IsubCategory[] => {
      return subCategories.map((subCat): IsubCategory => ({
        id: subCat.ID,
        name: subCat.name.en,
        catId:"",
        icon:subCat.icon
        //catId:subCategories?.catId
    }))
    }

    public toChildSubCategory = (childCategory:any[]):IchildSubCat[] => {
      return childCategory.map((childCat): IchildSubCat => ({
        id: childCat.ID,
        name: childCat.name.en,
        isGenderBased:true,
        subCatId:"",
        icon:childCat.icon
    }))
    }
}