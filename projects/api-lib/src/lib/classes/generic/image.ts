export class Image {
    private color!:string;
    private url!:string;
    
    constructor(color:string,url:string){
        
        if(typeof(color) != 'string' ){
            this.color = 'black'
        } else {
            this.color = color;
        }

        if(typeof(url) != 'string'){
            this.url = 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'
        } else {
            this.url = url;
        }
        
        
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