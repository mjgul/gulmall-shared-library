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

    public override itemBluePrint(){
        return `${this.getItemName().replace(/\ /g, '-')}_${this.getItemId()}_${this.color}_${this.size}`;
      }

}