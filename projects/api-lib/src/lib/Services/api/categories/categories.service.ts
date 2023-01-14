import { Injectable } from '@angular/core';
import { JGSApiService } from "../../../api-lib.service";
import { CategoriesDataManipulationService } from "../../data-manipulation/categories-data-manipulation.service";
import { map, tap } from 'rxjs';
import { Icategory } from '../../../interfaces/category';
@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  constructor(private api:JGSApiService, private categoryDataManipulation:CategoriesDataManipulationService) { }

  // GET ALL CATEGORIES.
  /**
   * 
   * @returns returns list of category.
   */
  getAllCategories = async() => {
    let apiRoute: any = {};
    apiRoute.apiroute = `get-categories`;
    // returns categories 
    return (await this.api.GET(apiRoute)) .pipe(
      tap (_ => console.log('fetched categories')),
      map((items:any) =>
       this.categoryDataManipulation.toCategory(items.data))
    )
  }

  // GET SUB CATEGORIES BY CATEGORY ID.
  /**
   * @returns returns list of sub-category based on category.
   */
  getSubCategoryByCategoryId = async (cat_id:string) => {
   let apiRoute:any = {};
   apiRoute.apiroute = `get-sub-categories`;
   // returns list of subcategories.
   apiRoute.data = {cat_id};
   return (await this.api.POST(apiRoute)).pipe(
    tap (_ => console.log('fetched sub categories')),
    map((items:any) =>
     this.categoryDataManipulation.toSubcategory(items.data))
  )
  }

  // GET CHILD-OF-SUB-CATEGORY BASED ON SUB-CATEGORY.
  getChildBySubCategoryId = async (chaild_cat_id:string):Promise<any> => {
    let apiRoute:any = {};
    apiRoute.apiroute = `get-child-categories`;
    // returns list of child categories based on sub-categories.
    apiRoute.data = {chaild_cat_id};
    return (await this.api.POST(apiRoute)).pipe(
      tap (_ => console.log('fetched sub categories')),
      map((items:any) =>
       this.categoryDataManipulation.toChildSubCategory(items.data))
    )
  }

  /**
   * RETURN AVAILABLE SIZE OF ITEM.
   * @param child_id string 
   * @param type string
   */
  getAvailableSize = async (child_cat_id:string,type:string):Promise<any> => {
    let apiRoute:any = {};
    apiRoute.apiroute = `get-size-chart`;
    apiRoute.data = {child_cat_id,type};
    return (await this.api.POST(apiRoute));
  }
}
