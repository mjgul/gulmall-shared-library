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
  constructor() { }

  ngOnInit(): void {
    
  }

  addItem = () =>{
    
    
      
  
    
    
    
  }


}
