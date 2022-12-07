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
     
  }




  navigate(where:string) {
    this.router.navigate([where]);
  }
}
