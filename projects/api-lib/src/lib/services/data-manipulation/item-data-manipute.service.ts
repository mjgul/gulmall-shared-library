import { Injectable } from "@angular/core";
import { Color } from "../../classes/generic/color";
import { Size } from "../../classes/generic/size";
import { Cloth } from "../../classes/items/fashion/cloths/cloths";
import { Item } from "../../classes/items/item";
import {
  Icategory,
  IchildSubCat,
  IsubCategory,
} from "../../interfaces/category";
import { Image } from "../../classes/generic/image";
import { itemInterface } from "../../interfaces/item";

@Injectable({
  providedIn: "root",
})
export class ItemDataManiputeService {
  constructor() {}

  public toClass = (items: itemInterface[]): Item[] => {
    let classifiedItems: Item[] = [];
    
    items.forEach((item: itemInterface) => {
      classifiedItems.push(this.toCloth(item));
    });
    console.log("ITEM IN DATA MANIPULATION ", classifiedItems);
    return classifiedItems;
  };

  private toCloth = (item: itemInterface): Cloth => {
    let clothAvailableColor: Color[] = [];
    let clothAvailableSize: Size[] = [];
    let category: Icategory;
    let subCategor: IsubCategory;
    let childCat: IchildSubCat;
    let images:Image[]=[];
    
    if(item.images){
      item.images.forEach((img:any) => {
        let image: Image = new Image(img.color,img.image);
        images.push(image);
      });
    }
    
    category = {
      id: item.category.ID,
      name: item.category.name,
      icon: item.category.icon,
    };
    subCategor = {
      id: item.category.ID,
      name: item.sub_category.name,
      icon: item.sub_category.icon,
      catId: item.sub_category.ID,
    };
    childCat = {
      id: item.ID,
      name: item.name,
      icon: item.images[0].image,
      subCatId: item.sub_category.ID,
      isGenderBased: item.category.gender_flag,
    };
    item.color.forEach((color: any) => {
      let itemColor: Color = new Color(color.name,color.cssHex,color.ID);
      clothAvailableColor.push(itemColor);
    });

    item.size.forEach((size: any) => {
      let itemSize: Size = new Size(size.name,size.ID);

      clothAvailableSize.push(itemSize);
    });

    let cloth: Cloth = new Cloth(
      item.country,
      item.currency,
      category,
      subCategor,
      childCat,
      images,
      item.price,
      item.name,
      clothAvailableColor,
      clothAvailableSize,
      item.publicId,
      item.ownerId,
      item.qty,
      item.remaining_qty
    );

    return cloth;
  };
}
