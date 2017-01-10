
class NPC implements Dialogable{
    portrait:egret.Bitmap;
    name:string;
    public constructor(portrait:egret.Bitmap, name:string){
        this.portrait=portrait;
        this.name=name;
    }
}