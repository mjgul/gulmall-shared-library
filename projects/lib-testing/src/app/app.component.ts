import { Component } from '@angular/core';
import { MediaService } from 'api-lib';
import { ItemService } from 'api-lib';
import { MamalsService } from 'api-lib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Library';
  constructor(private test:MediaService,
    private itemService:ItemService,
    private mamals:MamalsService,
     private router:Router){
      this.getUsers();
      this.getItems();
      this.getItemsWithStatus("inactive");
      this.getItemById("635c38c5fac4c1329eb00b41");
      this.deleteItemById("637fdb345b36af712791b69a");
  }

  getUsers = async ()=>{
   (await this.mamals.getAllUser())
  .subscribe((res:any)=>{
    console.log("response:", res);
  })
  }

  getItems =async () => {
    (await this.itemService.getAllItem())
  .subscribe((res:any)=>{
    console.log("All Items with Status:", res);
  })
  }

  getItemsWithStatus =async (_status:string) => {
    (await this.itemService.getAllItemWithStatus(_status))
  .subscribe((res:any)=>{
    console.log("All Items with Status:", res);
  })
  }

  getItemById =async (Id:string) => {
    (await this.itemService.getItemById(Id))
  .subscribe((res:any)=>{
    console.log("Items with Id:", res);
  })
  }


  deleteItemById =async (Id:string) => {
    (await this.itemService.deleteItemById(Id))
  .subscribe((res:any)=>{
    console.log("Items delete by Id:", res);
  })
  }


  navigate(where:string) {
    this.router.navigate([where]);
  }
}
