export class MultiLingualName {
    private name!:string

    constructor(name:string) {
        console.log("Name ++", "value : ", name);
        this.setName(name);
    }
     /**
     * Set name with multiple languages.
     * @param lang string
     * @param name string
     */
    protected setName=(name:string):void=>{
        this.name = name;
    }
    /**
     * 
     * @param lang string
     * @returns string
     */
    getName=():string=>{
        return this.name;
    }
}