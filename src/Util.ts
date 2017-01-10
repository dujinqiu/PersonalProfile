class Util {
    /**
     * 
     * @param sceneLen:屏幕长度
     */
    public static SetToMiddle(sceneLen: number, thingLen: number, offSet: number): number {
        return sceneLen / 2 - thingLen / 2 + offSet;
    }
    public static SetToScreenCenter(obj: egret.DisplayObject): void {
        obj.x = STAGE_WIDTH / 2 - obj.width / 2 + obj.anchorOffsetX;
        obj.y = STAGE_HEIGHT / 2 - obj.height / 2 + obj.anchorOffsetY;
    }
    /**
    * 文字打字机效果
    * obj           文本对象
    * content       文字
    * interval      打字间隔 毫秒
    */
    public static typerEffect(obj, content: string = "", interval: number = 200, backFun: Function = null): void {
        var strArr: Array<any> = content.split("");
        var len: number = strArr.length;
        for (var i = 0; i < len; i++) {
            egret.setTimeout(function () {
                obj.appendText(strArr[Number(this)]);
                if ((Number(this) >= len - 1) && (backFun != null)) {
                    backFun();
                }
            }, i, interval * i);
        }
    }
    /**
     * 位置放在屏幕外
     * 传入vector某个分量为正负1即为向该方向移出屏幕
     * 例：传入(1,0)即为图片移到屏幕右方
     */
    public static placeOutsideScreen(obj: egret.DisplayObject, x:number, y:number) {
        obj.x = x * (STAGE_WIDTH + obj.anchorOffsetX);
        obj.y = y * (STAGE_HEIGHT + obj.anchorOffsetY);
    }

    public static newScene_pop(popFrom: Vector2, obj: egret.DisplayObjectContainer, time: number) {
        obj.anchorOffsetX = popFrom.x / STAGE_WIDTH;
        obj.anchorOffsetY = popFrom.y / STAGE_HEIGHT;
        var originalWidth = obj.width;
        var originalHeight = obj.height;
        obj.scaleX= obj.scaleY = 0.01;

        var funcChange = function (): void {
            console.log(obj.scaleX);
        }
        
        var tw = egret.Tween.get(obj , { onChange: funcChange, onChangeObj: obj });
        tw.to({
            "scaleX":1,
            "scaleY":1
        }, time);
        //tw.call(change);
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    public static createBitmapByName(name: string): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}
class Util_pixel {
    public static StandToBlock(obj: egret.DisplayObject): void {
        obj.x = obj.x / PIXEL_SCALE;
        obj.y = obj.y / PIXEL_SCALE;
    }
}
