import { Component, OnInit } from '@angular/core';
import { Cloth, Color, Icloth, Iitem, Item, ItemService,CategoriesService, Size } from 'api-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-api-testing',
  templateUrl: './api-testing.component.html',
  styleUrls: ['./api-testing.component.css']
})
export class ApiTestingComponent implements OnInit {
  myItems: Observable <Item[]>| undefined;
  allCategories: Observable<any> | undefined;
  allSubCategories: Observable<any> | undefined;
  childSubCategories:Observable<any> | undefined;
  constructor(private itemService:ItemService, private category:CategoriesService) { }

  ngOnInit(): void {
  }


  // GETTING ALL OF THE ITEMS.
  // ONLY GET THOSE WHICH HAS STATUS ACTIVE.
   getAllItems = async() => {
     this.myItems = (await this.itemService.getAllItem());
     
  }

  // RETURNS THE LIST OF CATEGORY
  getAllCategories = async() => {
  this.allCategories =  (await this.category.getAllCategories());
  }

  // RETURNS THE LIST OF SUB-CATEGORY.
  getSubCategoryByCategoryId = async (categoryId:string) => {
    this.allSubCategories = (await this.category.getSubCategoryByCategoryId(categoryId));
  }

  // RETURN LIST OF CHILDREN.
  getChildOfSubCat = async (subCategoryId:string) => {
    this.childSubCategories = (await this.category.getChildBySubCategoryId(subCategoryId));
    this.childSubCategories?.subscribe((res:any)=>{
      console.log("CHILD", res)
    })
  }

}
