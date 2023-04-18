export class Image {
    private color!:string;
    private url!:string;
    constructor(color:string,url:string){
        this.color = color;
        this.url = url;
    }

    /**
     * GET THE COLOR OF IMAGE
     * @returns color id as string
     */
    public getImageColor=()=>{
        return this.color;
    }

    /**
     * GET THE URL OF IMAGE
     * @returns url of image as string
     */
    public getImageUrl=()=>{
        return this.url;
    }

}