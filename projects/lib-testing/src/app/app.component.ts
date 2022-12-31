import { Component } from '@angular/core';
import { CategoriesService } from 'api-lib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Library';
  constructor(private router:Router, private category:CategoriesService){
     
  }


  navigate(where:string) {
    this.router.navigate([where]);
  }
}
