var Util = (function () {
    function Util() {
    }
    var d = __define,c=Util,p=c.prototype;
    /**
     *
     * @param sceneLen:屏幕长度
     */
    Util.SetToMiddle = function (sceneLen, thingLen, offSet) {
        return sceneLen / 2 - thingLen / 2 + offSet;
    };
    Util.SetToScreenCenter = function (obj) {
        obj.x = STAGE_WIDTH / 2 - obj.width / 2 + obj.anchorOffsetX;
        obj.y = STAGE_HEIGHT / 2 - obj.height / 2 + obj.anchorOffsetY;
    };
    /**
    * 文字打字机效果
    * obj           文本对象
    * content       文字
    * interval      打字间隔 毫秒
    */
    Util.typerEffect = function (obj, content, interval, backFun) {
        if (content === void 0) { content = ""; }
        if (interval === void 0) { interval = 200; }
        if (backFun === void 0) { backFun = null; }
        var strArr = content.split("");
        var len = strArr.length;
        for (var i = 0; i < len; i++) {
            egret.setTimeout(function () {
                obj.appendText(strArr[Number(this)]);
                if ((Number(this) >= len - 1) && (backFun != null)) {
                    backFun();
                }
            }, i, interval * i);
        }
    };
    /**
     * 位置放在屏幕外
     * 传入vector某个分量为正负1即为向该方向移出屏幕
     * 例：传入(1,0)即为图片移到屏幕右方
     */
    Util.placeOutsideScreen = function (obj, x, y) {
        obj.x = x * (STAGE_WIDTH + obj.anchorOffsetX);
        obj.y = y * (STAGE_HEIGHT + obj.anchorOffsetY);
    };
    Util.newScene_pop = function (popFrom, obj, time) {
        obj.anchorOffsetX = popFrom.x / STAGE_WIDTH;
        obj.anchorOffsetY = popFrom.y / STAGE_HEIGHT;
        var originalWidth = obj.width;
        var originalHeight = obj.height;
        obj.scaleX = obj.scaleY = 0.01;
        var funcChange = function () {
            console.log(obj.scaleX);
        };
        var tw = egret.Tween.get(obj, { onChange: funcChange, onChangeObj: obj });
        tw.to({
            "scaleX": 1,
            "scaleY": 1
        }, time);
        //tw.call(change);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Util.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Util;
}());
egret.registerClass(Util,'Util');
var Util_pixel = (function () {
    function Util_pixel() {
    }
    var d = __define,c=Util_pixel,p=c.prototype;
    Util_pixel.StandToBlock = function (obj) {
        obj.x = obj.x / PIXEL_SCALE;
        obj.y = obj.y / PIXEL_SCALE;
    };
    return Util_pixel;
}());
egret.registerClass(Util_pixel,'Util_pixel');
//# sourceMappingURL=Util.js.map