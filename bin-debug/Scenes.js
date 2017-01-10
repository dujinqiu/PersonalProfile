var SceneHome = (function (_super) {
    __extends(SceneHome, _super);
    /*south=new SceneTown;
    north=null;
    west=null;
    east=null;*/
    function SceneHome() {
        _super.call(this);
        this.touchBegin = new Vector2;
        //背景底色
        var bgMask = new egret.Shape();
        bgMask.graphics.beginFill(0x000000);
        bgMask.graphics.drawRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);
        this.addChild(bgMask);
        //地图
        var bg = Util.createBitmapByName("map_room_home_jpg");
        bg.x = Util.SetToMiddle(STAGE_WIDTH, bg.width, bg.anchorOffsetX);
        bg.y = Util.SetToMiddle(STAGE_HEIGHT, bg.height, bg.anchorOffsetY);
        this.addChild(bg);
        bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        bg.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        bg.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    }
    var d = __define,c=SceneHome,p=c.prototype;
    p.onTouchTap = function (evt) {
        console.log("tap");
    };
    p.onTouchBegin = function (evt) {
        console.log("beg");
        this.touchBegin.x = evt.stageX;
        this.touchBegin.y = evt.stageY;
        //TODO 主人公原地走动
    };
    p.onTouchMove = function (evt) {
        console.log("mov");
        if (Math.abs(this.x) <= STAGE_WIDTH / 2 || Math.abs(this.y) <= STAGE_HEIGHT / 2) {
            this.x = evt.stageX - this.touchBegin.x;
            this.y = evt.stageY - this.touchBegin.y;
        }
    };
    p.onTouchEnd = function (evt) {
        console.log("end");
    };
    return SceneHome;
}(egret.DisplayObjectContainer));
egret.registerClass(SceneHome,'SceneHome');
var SceneClassroom = (function (_super) {
    __extends(SceneClassroom, _super);
    /*south=null;
    north=null;
    west=null;
    east=new SceneClassroom;*/
    function SceneClassroom() {
        _super.call(this);
        //背景底色
        var bgMask = new egret.Shape();
        bgMask.graphics.beginFill(0xa2a2a2);
        bgMask.graphics.drawRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);
        this.addChild(bgMask);
        //地图
        var bg = Util.createBitmapByName("map_room_classroom_jpg");
        bg.x = Util.SetToMiddle(STAGE_WIDTH, bg.width, bg.anchorOffsetX);
        bg.y = Util.SetToMiddle(STAGE_HEIGHT, bg.height, bg.anchorOffsetY);
        this.addChild(bg);
    }
    var d = __define,c=SceneClassroom,p=c.prototype;
    return SceneClassroom;
}(egret.DisplayObjectContainer));
egret.registerClass(SceneClassroom,'SceneClassroom');
var SceneTown = (function (_super) {
    __extends(SceneTown, _super);
    /*south=null;
    north=new SceneHome;
    west=null;
    east=null;*/
    function SceneTown() {
        _super.call(this);
        //背景底色
        var bgMask = new egret.Shape();
        bgMask.graphics.beginFill(0xa2a2a2);
        bgMask.graphics.drawRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);
        this.addChild(bgMask);
        //地图
        var bg = Util.createBitmapByName("map_world_town_jpg");
        bg.x = Util.SetToMiddle(STAGE_WIDTH, bg.width, bg.anchorOffsetX);
        bg.y = Util.SetToMiddle(STAGE_HEIGHT, bg.height, bg.anchorOffsetY);
        this.addChild(bg);
    }
    var d = __define,c=SceneTown,p=c.prototype;
    return SceneTown;
}(egret.DisplayObjectContainer));
egret.registerClass(SceneTown,'SceneTown');
//# sourceMappingURL=Scenes.js.map