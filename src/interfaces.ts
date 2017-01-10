interface Dialogable{
    portrait:egret.Bitmap;
    name:string;
}
interface Scene{
    east:Scene;
    west:Scene;
    north:Scene;
    south:Scene;
}