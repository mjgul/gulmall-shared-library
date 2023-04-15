
import { Component, OnInit } from "@angular/core";
import { CartItem } from "api-lib";
import { ShoppingCart } from 'api-lib';
import { Cloth } from "api-lib";
import { Item } from "api-lib";
import { Car } from "api-lib";
import { Color,Icategory } from 'api-lib';
import { Size } from "api-lib";
@Component({
    selector: "lib-class-test",
    templateUrl: "./cart-test.component.html",
    styleUrls: ["./cart-test.component.css"],
  })

  export class CartTestComponent implements OnInit {
    items:Item[] = [];
    
    cart: ShoppingCart = new ShoppingCart();
    ngOnInit(): void {
    
    // same car objects
  


    // this.cart.addItem(clothObj1);


    console.log("Cart Item: ", this.cart.getCartDetails() )
      }

      addToCart(item:Item){

      }

  }