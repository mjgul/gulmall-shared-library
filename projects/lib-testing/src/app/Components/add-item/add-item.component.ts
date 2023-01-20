import { Component, OnInit } from '@angular/core';
import { CategoriesService, Cloth, Color, Icategory, Item, Size, UtilService } from 'api-lib';
import { Iname } from 'dist/api-lib/lib/interfaces/name';
import { Observable } from 'rxjs';
// COPY AND PASTE IN API-LIB
export interface IColor {
  name:Iname
  colorCode:string,
  id:string
}
@Component({
  selector: 'lib-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  allCategories: Observable<Icategory[]> | undefined;
  items:Item[]=[];
  constructor(private categories:CategoriesService,private type:UtilService) { }

  ngOnInit(): void {
    this.getWeight();
  }

  getWeight= async ()=>{
    let weight = (await this.type.getWeight());
    weight.subscribe((res:any)=>{
      console.log("Weight: ", res)
    })
  }

  addItem = () =>{
    let item:Cloth = new Cloth();
    this.items.push(item);
    item.setCategoryId("123");
    item.setSubCategoryId("");
    item.setChildSubCategoryId("");
    
  }

  // CREATE INTERFACE IN API-LIB
  
  addAvailableColors=(colorId:IColor,colorsArray:Color[])=>{
    let color:Color = new Color();
    colorsArray.push(color);
  }

  addAvailableSize=()=>{
    
  }

  // GET ALL CATEGORIES
  // RETURNS THE LIST OF CATEGORY
  getAllCategories = async() => {
    this.allCategories =  (await this.categories.getAllCategories());
    this.allCategories.subscribe((res:any)=>{
      console.log("All categories",res);
    })
    }

}
