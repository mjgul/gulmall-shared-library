export class MultiLingualName {
    private en!:string;
    private ar!:string;

    constructor() {}
     /**
     * Set name with multiple languages.
     * @param lang string
     * @param colorName string
     */
     setName=(lang:string,name:string):void=>{
        switch (lang) {
            case 'en':
            this.en = name;
            break;

            case 'en':
            this.en = name;
            break;
        
            default:
                break;
        }
    }
    
    getName=(lang:string):string=>{
        switch (lang) {
            case 'en':
                return this.en;
            case 'ar':
                return this.ar;
            default:
                return "";
        }
    }
}