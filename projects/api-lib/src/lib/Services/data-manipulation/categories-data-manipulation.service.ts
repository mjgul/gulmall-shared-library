import { Injectable } from '@angular/core';
import { Icategory } from '../../interfaces/category';

@Injectable({
    providedIn: 'root'
  })

export class CategoriesDataManipulationService {
    constructor() { }

    public toCategory = (categories:any[]):Icategory[] => {
        let categoryList:any = [];
        console.log("Category from Server: ", categories);
        return categoryList;
      }
}