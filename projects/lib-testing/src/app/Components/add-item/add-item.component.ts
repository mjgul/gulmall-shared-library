import { Component, OnInit } from '@angular/core';
import { CategoriesService, Cloth, Color, Icategory, IchildSubCat, IsubCategory, Item, Size, Image } from 'api-lib';
import { Observable } from 'rxjs';
@Component({
  selector: 'lib-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  allCategories: Observable<Icategory[]> | undefined;
  items:Item[]=[];
  constructor(private categories:CategoriesService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  addItem = () =>{
    let category:Icategory = {id:"12",icon:"",name:{en:"",ar:""}};
    let subCat:IsubCategory={id:"12",icon:"",name:{en:"",ar:""},catId:""};
    let child:IchildSubCat= {id:"12",icon:"",name:{en:"",ar:""},subCatId:"",isGenderBased:false};    
    let color:Color[] = [new Color('en',"")];
    let size:Size[] = [new Size('en',"")]
    let image:Image = new Image();
    let item:Cloth = new Cloth("Oman",'OMR',category,subCat,child,image,12,'12',color,size);
    this.items.push(item);
    
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
