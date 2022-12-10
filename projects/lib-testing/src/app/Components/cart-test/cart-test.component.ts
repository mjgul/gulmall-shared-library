import { Component, OnInit } from "@angular/core";
import { Cart } from "../../Classes/cart/cart";
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
    ngOnInit(): void {
    let car = new Car("toyota","lsakjfadsl",1200,1);
    let cloth = new Cloth("3 piece suit","kjsadf",30,"orange","21");
    let cloth1 = new Cloth("3 piece suit","kjsadf",30,"orange","22");
    let cloth2 = new Cloth("3 piece suit","kjsadf",30,"orange","23");
    this.items.push(car);
    this.items.push(cloth);
    this.items.push(cloth1);
    this.items.push(cloth2);
      }

    addToCart(item:Item){
    let result = item.addToCart();
    }
  }