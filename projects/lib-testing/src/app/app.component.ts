import { Component } from '@angular/core';
import { MediaService } from 'api-lib';
import { ItemService } from 'api-lib';
import { MamalsService } from 'api-lib';
import { CartService } from 'api-lib';
import { Router } from '@angular/router';
export interface Cart {
  mammal_id:string;
  item_id:string;
  quantity:number;
  price:number;
  color_selected:string;
  size_selected:string;
  discount:string;
  payement_method:string;
}
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
    private cart:CartService,
     private router:Router){
      //this.addToCart();
      //this.getReceiptUsingCartId("6392494eba3612f1479f21d1");
      this.getAllCart();
  }



  addToCart = async() => {
   let obj:Cart  =  {
      mammal_id:"6362226f605d6df44f2ea018",
      item_id:"637fdb345b36af712791b69a",
      quantity:1,   
      price:123, 
      color_selected:"6352f8123e006819c56246c7" , 
      size_selected: "63879b45484a65a982757720",
      discount:"0%" ,
      payement_method:"636917f6df1f45e09bcb67fc"
    };

    (await this.cart.addToCart(obj))
    .subscribe((res:any)=>{
      console.log("Cart Testing:", res);
    })

  }

  getReceiptUsingCartId = async (cart_id:string)=> {
    //"6392494eba3612f1479f21d1"
    let id = cart_id;
    (await this.cart.getReceiptUsingCartId(id))
    .subscribe((res:any)=>{
      console.log("Receipt:", res);
    })
  }


  getAllCart = async () => {
    (await this.cart.getAllCart())
    .subscribe((res:any)=>{
      console.log("Receipt:", res);
    })
  }



  navigate(where:string) {
    this.router.navigate([where]);
  }
}
