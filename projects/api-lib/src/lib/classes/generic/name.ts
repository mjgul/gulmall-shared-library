export class MultiLingualName {
    private en!:string;
    private ar!:string;

    constructor(lang:string,name:string) {
        this.setName(lang,name);
    }
     /**
     * Set name with multiple languages.
     * @param lang string
     * @param name string
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
    /**
     * 
     * @param lang string
     * @returns string
     */
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