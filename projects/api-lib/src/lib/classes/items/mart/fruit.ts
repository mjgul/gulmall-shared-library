import {
    Icategory,
    IchildSubCat,
    IsubCategory,
  } from "../../../interfaces/category";
  import { Image } from "../../generic/image";
  
  import { Item } from "../item";
  
  export class Fruit extends Item {
    
    private origin: string = ""
    private weight: number = 0
    private unitType: 'piece' | 'kg' | 'box' = "kg"
  
    /**
     *
     * @param country
     * @param currency
     * @param category
     * @param subCategory
     * @param subCatChilc
     * @param images
     * @param price
     * @param title
     */
    constructor(
      country: string,
      currency: string,
      category: Icategory,
      subcat:IsubCategory,
      item:IchildSubCat,
      price: number,
      title: string,
      publicId:number,
      ownerId:string,
      quantity:number,
      remainingQty:number,
      origin:string,
      weight:number,
      unitType:'piece' | 'kg' | 'box',
      
    ) {
      super();
      this.setCountry(country);
      this.setCurrency(currency);
      this.setCategory(category);
      this.setSubCategory(subcat)
      this.setSubCatChild(item)
      this.setItemPrice(price);
      this.setItemTitle(title);
      this.setPublicId(publicId)
      this.setOwnerId(ownerId)
      this.setQuantity(quantity)
      this.setRemainingQuantity(remainingQty)
      this.setFruitOrigin(origin)
      this.setFruitWeight(weight)
      this.setFruitUnitType(unitType)
    }
  
   
  
    public override itemBluePrint() {
      // "itemID_BLUE_L"
      return `${this.getCategory().getName()}_${this.getSubCategory().getName()}_${this.getItemTitle().getName()}_${this.getFruitUnitType()}_${this.getFruitWeight()}`;
    }

    public setFruitOrigin = (origin:string) => {
        this.origin = origin;
    }

    public setFruitWeight = (weight:number) => {
        this.weight = weight;
    }

    public setFruitUnitType = (unitType:'piece' | 'kg' | 'box') => {
        this.unitType = unitType;
    }

    public getFruitOrigin = ():string => {
        return this.origin;
    }

    public getFruitWeight = ():string => {
        return this.weight + 'kg'
    }

    public getFruitUnitType = ():string => {
        return this.unitType 
    }


    public override getRequiredFields() {
        throw new Error("Method not implemented.");
    }
  }
  