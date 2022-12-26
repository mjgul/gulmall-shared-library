import { Component, OnInit } from '@angular/core';
import { Cloth, Color, Icloth, Iitem, Item, ItemService, Size } from 'api-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-api-testing',
  templateUrl: './api-testing.component.html',
  styleUrls: ['./api-testing.component.css']
})
export class ApiTestingComponent implements OnInit {
  myItems: Observable <Item[]>| undefined;
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }


  // GETTING ALL OF THE ITEMS.
  // ONLY GET THOSE WHICH HAS STATUS ACTIVE.
   getAllItems = async() => {
     this.myItems = (await this.itemService.getAllItem());
  }

}
