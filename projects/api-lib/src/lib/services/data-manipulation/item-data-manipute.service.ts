import { Injectable } from "@angular/core";
import { Color } from "../../classes/generic/color";
import { Size } from "../../classes/generic/size";
import { Cloth } from "../../classes/items/fashion/cloths/cloths";
import { Item } from "../../classes/items/item";
import { Shoes } from "../../classes/items/fashion/foot-wear/shoes";
import { Icategory, IchildSubCat, IsubCategory } from "../../interfaces/category";

@Injectable({
  providedIn: "root",
})
export class ItemDataManiputeService {
  constructor() {}

  public toClass = (items: any): Item[] => {
    let filteredItems = items.filter((item: any) => item.Price != 0);
    let classifiedItems: Item[] = [];
    filteredItems.forEach((item: any) => {
      console.log("ITEM CAT: ", item);
      switch (item.category.name.en) {
        case "Clothing":
          classifiedItems.push(this.toCloth(item));
          break;
        case "active":
          classifiedItems.push(this.toShoes(item));
          break;
        default:
          break;
      }
    });
    console.log("ITEM IN DATA MANIPULATION ", classifiedItems);
    return classifiedItems;
  };

  public toCloth = (item: any): Cloth => {
    let clothAvailableColor: Color[] = [];
    let clothAvailableSize: Size[] = [];
    let category:Icategory;
    let subCategor:IsubCategory;
    let childCat:IchildSubCat;
    category = {id: item.category.ID,name: item.category.name.en,icon: item.category.icon};
    subCategor = {id: item.category.ID,name: item.category.name.en,icon: item.category.icon,catId:item.category.ID};
    childCat = {id: item.ID,name: item.category.name.en,icon: item.category.icon,subCatId:item.sub_category.ID,isGenderBased:item.gender_flag};
    item.available_color.forEach((color: any) => {
      let itemColor: Color = new Color(localStorage.getItem("language")|| "en",color.name.en);
      clothAvailableColor.push(itemColor);
    });

    item.available_color.forEach((size: any) => {
      let itemSize: Size = new Size(localStorage.getItem("language")||"en",size.name.en);
      clothAvailableSize.push(itemSize);
    });

    

    let cloth: Cloth = new Cloth();
    cloth.setAvailableColor(clothAvailableColor);
    cloth.setAvailableSize(clothAvailableSize);
    cloth.setCategory(category);
    cloth.setSubCatChild(childCat);
    cloth.setImages(item.images.low_quility);
    cloth.setItemPrice(item.price);
    return cloth;
  };

  public toShoes = (item: any): Shoes => {
    let clothAvailableColor: Color[] = [];
    let clothAvailableSize: Size[] = [];

    item.available_color.forEach((color: any) => {
      let itemColor: Color = new Color(localStorage.getItem("language")||"","");
      clothAvailableColor.push(color);
    });

    item.available_color.forEach((x: any) => {
      let dummyColor: Size = new Size(localStorage.getItem("language")||"","");
      clothAvailableSize.push(dummyColor);
    });

    let shoe: Shoes = new Shoes();
    return shoe;
  };
}
