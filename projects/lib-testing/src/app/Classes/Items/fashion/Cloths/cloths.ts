import { Item } from "../../Item";

export class Cloth extends Item {

    private color:string;
    private size:string;

    constructor(name:string, description:string, price:number,color:string,size:string){
        super(name,description,price);
        this.color=color;
        this.size=size;
    }

    public getItemSize=():string =>{
        return this.size;
    }

    public getItemColor=():string =>{
        return this.color;
    }

   public override addToCart(){
    console.log("Cloth Added In Cart");
   return {color_id:this.color, size_id:this.size, item_id:this.getItemId()};
   }

}