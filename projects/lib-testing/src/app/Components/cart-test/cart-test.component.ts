
import { Component, OnInit } from "@angular/core";
import { CartItem } from "api-lib";
import { ShoppingCart,ItemService } from 'api-lib';
import { Cloth } from "api-lib";
import { Item } from "api-lib";
import { Color,Icategory } from 'api-lib';
import { Size } from "api-lib";
import { Observable } from "rxjs";
@Component({
    selector: "lib-class-test",
    templateUrl: "./cart-test.component.html",
    styleUrls: ["./cart-test.component.css"],
  })

  export class CartTestComponent implements OnInit {
    items:Item[] = [];
    constructor(private itemService:ItemService){}
    cart: ShoppingCart = new ShoppingCart();
    ngOnInit(): void {
    this.getAllItems();
    // same car objects
      

    
    // this.cart.addItem(clothObj1);


    console.log("Cart Item: ", this.cart.getCartDetails() )
      }

      addToCart(item:Item){

      }

     async getAllItems(){
        let items:Observable<Item[]> = (await this.itemService.getAllItem());
          items.subscribe((res:Item[])=>{
            console.log("ITEM:S ",res)
            console.log( res[0].getCategory().getName());
            console.log( res[0].getChildSubCat().getId());
          })
      }

  }