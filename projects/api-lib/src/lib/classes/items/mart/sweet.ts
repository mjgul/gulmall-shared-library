import {
    Icategory,
    IchildSubCat,
    IsubCategory,
  } from "../../../interfaces/category";
  import { Image } from "../../generic/image";
  
  import { Item } from "../item";

  export class Sweet extends Item {
    
      public override getRequiredFields() {
          throw new Error("Method not implemented.");
      }
}