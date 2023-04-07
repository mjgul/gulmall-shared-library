export class Image {
    private lowQualityImages:string[] =[];
    private highQualityImages:string[] = [];
    constructor(){}

    getLowQualityImages = () => {
        return this.lowQualityImages;
    }

    getHighQualityImages = ():string[] => {
        if(this.highQualityImages.length > 0){
            return this.highQualityImages;
        } else {
            return ["https://firebasestorage.googleapis.com/v0/b/gul-e-mall-app.appspot.com/o/default-images%2Fempty.jpeg?alt=media&token=c2f9b7c3-bb8e-49a4-985e-e282374aa84a"]
        }
    }

    setHighQualityImages = (images:string[]):void =>{
        this.highQualityImages = images;
    }

    setlowQualityImages = (images:string[]):void =>{
        this.lowQualityImages = images;
    }

}