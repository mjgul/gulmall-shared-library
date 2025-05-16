import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  ApiLibModule,
  Category,
  Icategory,
  IchildSubCat,
  Image,
  IsubCategory,
  MamalsService,
  CartService,
  Icart,
  ItemService
} from "api-lib";
import { Fruit } from "projects/api-lib/src/lib/classes/items/mart/fruit";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ApiLibModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "test-app";
  category: Icategory = { id: "123", name: "Fruit", icon: "icon" };
  image: Image[] = [new Image("Blank", "sadfsdf")];
  constructor(private mam: MamalsService, private cart: CartService, private item:ItemService) {}

  async otp() {
    console.log("HELLO");
    let response = await this.mam.sendOtp({ phone: "447918841539" });
    response.subscribe((res: any) => {
      console.log("send otp", res);
    });
  }

  async verify() {
    console.log("Verify");
    let response = await this.mam.verifyOtp({
      phone: "447918841539",
      otp: "727881",
    });
    response.subscribe((res: any) => {
      console.log("verify otp", res);
    });
  }
 async testAddToCart() {
    console.log("TEAT")
    let obj: Icart = {
      
      currency: "GBP",
      delivery_status: "PENDING",
      discount: "20%",
      item_id: "67a55acaf2874493dd7dfa7b",
      payment_method: "63690dbd0ea3bcf8f8bc9051",
      quantity: 2,
      user_id: "68164479a76e409613625196",
      category: "Fashion",
      sub_category: "Clothing",
      seller_id: "680825a371b05e63c57295fb",
      order_date:new Date()
    };
    (await this.cart.addToCart([obj])).subscribe
    ((res: any) => {
      console.log("ADD CART RESPONSE", res);
    });
  }

  async testGetAllCart(){
    (await this.cart.getCartsByDate("2025-05-10")).subscribe(res=>{

      console.log("GET ALL CART RES: ", res)
    })
  }

  async testCartByDateAndShippingStatus(){
    (await this.cart.getAllCart()).subscribe(res=>{
      console.log("GET ALL CART RES: ", res)
    })
  }

  async testGetAllItem(){
    (await this.item.getAllItem(1)).subscribe((res:any)=>{
      console.log("ITEMS", res)
    })
  }

  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   document.getElementById("fruitForm")?.addEventListener("submit", function (e) {
  //     e.preventDefault();

  //     const getInput = (id: string): string =>
  //       (document.getElementById(id) as HTMLInputElement).value;

  //     const fruit = new Fruit(
  //       getInput("country"),
  //       getInput("currency"),
  //       {
  //         id: getInput("categoryId"),
  //         name: getInput("categoryName"),
  //       } as Icategory,
  //       { id: getInput("subCatId"),
  //         catId:getInput("categoryId"),
  //         name: getInput("categoryName")} as IsubCategory,
  //         { id: getInput("categoryId"),

  //           subCatId: getInput("subCatId"),
  //           isGenderBased: false,
  //           name: getInput("categoryName")} as IchildSubCat,
  //       parseFloat(getInput("price")),
  //       getInput("title"),
  //       parseInt(getInput("publicId")),
  //       getInput("ownerId"),
  //       parseInt(getInput("quantity")),
  //       parseInt(getInput("remainingQty")),
  //       getInput("origin"),
  //       parseFloat(getInput("weight")),
  //       getInput("unitType") as "piece" | "kg" | "box"
  //     );

  //     // Display fruit blueprint in output
  //     const output = document.getElementById("output");
  //     output!.textContent = JSON.stringify(
  //       {
  //         bluePrint: fruit.itemBluePrint(),
  //         origin: fruit.getFruitOrigin(),
  //         weight: fruit.getFruitWeight(),
  //         unitType: fruit.getFruitUnitType(),
  //         itemName: fruit.getItemTitle().getName()
  //       },
  //       null,
  //       2
  //     );
  //   });
  // }
}
