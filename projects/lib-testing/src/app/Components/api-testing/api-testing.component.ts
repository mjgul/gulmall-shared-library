import { Component, OnInit } from '@angular/core';
import { Cloth, Color, Icloth, Iitem, Item, ItemService,CategoriesService, TypeSizeService, Size, Icategory, IsubCategory, IchildSubCat } from 'api-lib';
import { IsizeType } from 'dist/api-lib/lib/interfaces/sizeType';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-api-testing',
  templateUrl: './api-testing.component.html',
  styleUrls: ['./api-testing.component.css']
})
export class ApiTestingComponent implements OnInit {
  myItems: Observable <Item[]>| undefined;
  allCategories: Observable<Icategory[]> | undefined;
  allSubCategories: Observable<IsubCategory[]> | undefined;
  childSubCategories:Observable<IchildSubCat[]> | undefined;
  itemAvailableSize:Observable<any>|undefined;
  itemAvailableTypes:Observable<IsizeType[]>|undefined;

  constructor(private itemService:ItemService, private category:CategoriesService, private typeSize:TypeSizeService) { }

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

  getAvailableSize = async(child_cat_id:string,type:string) => {
    this.itemAvailableSize = (await this.typeSize.getAvailableSize(child_cat_id,type));
    this.itemAvailableSize?.subscribe((res:any)=>{
      console.log("RES available size: ",res);;
    })
  }


  getAllTypes = async () => {
    this.itemAvailableTypes = (await this.typeSize.getTypes());
    this.itemAvailableTypes?.subscribe((res:any)=>{
      console.log("RES available types: ",res);;
    })
  }
}
