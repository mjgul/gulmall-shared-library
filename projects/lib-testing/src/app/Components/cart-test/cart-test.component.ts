import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { CartItem } from "../../Classes/cart/cart";
import { ShoppingCart } from '../../Classes/cart/shopping-cart';
import { Cloth } from "../../Classes/Items/fashion/Cloths/cloths";
import { Item } from "../../Classes/Items/Item";
import { Car } from "../../Classes/Items/vehicle/car/car";
@Component({
    selector: "lib-class-test",
    templateUrl: "./cart-test.component.html",
    styleUrls: ["./cart-test.component.css"],
  })

  export class CartTestComponent implements OnInit {
    items:Item[] = [];
    cart: ShoppingCart = new ShoppingCart();
    ngOnInit(): void {
    let car = new Car("toyota","lsakjfadsl",1200,1);
    // CLOTH 
    let cloth = new Cloth("3 piece  suit","kjsadf",30,"orange",'m');
    let cloth1 = new Cloth("3 piece suit","kjsadf",30,"orange",'l');
    let cloth2 = new Cloth("3 piece suit","kjsadf",30,"orange",'l');
    let cloth3 = new Cloth("3 piece suit","kjsadf",30,"orange",'s');
    // CAR
    let car1 = new Car("toyota","corolla",1200,1);
    let car2 = new Car("toyota","lsakjfadsl",1200,2);
    let car3 = new Car("toyota","lsakjfadsl",1200,3);
    let car4 = new Car("toyota","lsakjfadsl",1200,3);
    let car5 = new Car("toyota","lsakjfadsl",1200,3);

    this.items.push(car);
    this.items.push(cloth);
    this.items.push(cloth1);
    this.items.push(cloth2);
   
  
   
    // same car objects
    let cartItem = new CartItem(car);
    let cartItem1 = new CartItem(car);
    let cartItem2 = new CartItem(car);
    // diff car objects
    let carObj1 = new CartItem(car1);
    let carObj2 = new CartItem(car2);
    let carObj3 = new CartItem(car3);
    let carObj4 = new CartItem(car4);
    let carObj5 = new CartItem(cloth2);
    // same cloth objects
    let clothObj = new CartItem(cloth);
    let clothObj1 = new CartItem(cloth1);
    let clothObj2 = new CartItem(cloth3);


    this.cart.addItem(cartItem);
    this.cart.addItem(cartItem1);
    this.cart.addItem(cartItem2);
  
  
    this.cart.addItem(carObj1);
    this.cart.addItem(carObj2);
    this.cart.addItem(carObj3)

    this.cart.addItem(clothObj);
    this.cart.addItem(clothObj1);
    this.cart.addItem(carObj4);
    this.cart.addItem(carObj5);
    this.cart.addItem(clothObj2);
    this.cart.addItem(clothObj2);
    this.cart.addItem(clothObj2);
    this.cart.addItem(clothObj2);


    console.log("Cart Item: ", this.cart.getCartDetails() )
      }

    addToCart(item:Item){
   
    }
  }