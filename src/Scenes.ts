class SceneHome extends egret.DisplayObjectContainer /*implements Scene*/{
    /*south=new SceneTown;
    north=null;
    west=null;
    east=null;*/
    public constructor(){
        super();
        //背景底色
        var bgMask=new egret.Shape();
        bgMask.graphics.beginFill(0x000000);
        bgMask.graphics.drawRect(0,0,STAGE_WIDTH,STAGE_HEIGHT);
        this.addChild(bgMask);
        //地图
        var bg=Util.createBitmapByName("map_room_home_jpg");
        bg.x=Util.SetToMiddle(STAGE_WIDTH,bg.width,bg.anchorOffsetX);
        bg.y=Util.SetToMiddle(STAGE_HEIGHT,bg.height,bg.anchorOffsetY);
        this.addChild(bg);

        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouchTap,this);
    }
    touchBegin: Vector2 = new Vector2;
    private onTouchTap(evt: egret.TouchEvent) {
        console.log("tap");
    }
    private onTouchBegin(evt: egret.TouchEvent) {
        console.log("beg");
        this.touchBegin.x = evt.stageX;
        this.touchBegin.y = evt.stageY;
        //TODO 主人公原地走动
    }
    private onTouchMove(evt: egret.TouchEvent) {
        console.log("mov");
        if (Math.abs(this.x) <= STAGE_WIDTH / 2 || Math.abs(this.y) <= STAGE_HEIGHT / 2) {
            //this.x = evt.stageX - this.touchBegin.x;
            this.y = evt.stageY - this.touchBegin.y;
        }
    }
    private onTouchEnd(evt: egret.TouchEvent) {
        if(Math.abs( this.y)>200){

        }
    }

}

class SceneClassroom extends egret.DisplayObjectContainer /*implements Scene*/{
    /*south=null;
    north=null;
    west=null;
    east=new SceneClassroom;*/
    public constructor(){
        super();
        //背景底色
        var bgMask=new egret.Shape();
        bgMask.graphics.beginFill(0xa2a2a2);
        bgMask.graphics.drawRect(0,0,STAGE_WIDTH,STAGE_HEIGHT);
        this.addChild(bgMask);
        //地图
        var bg=Util.createBitmapByName("map_room_classroom_jpg");
        bg.x=Util.SetToMiddle(STAGE_WIDTH,bg.width,bg.anchorOffsetX);
        bg.y=Util.SetToMiddle(STAGE_HEIGHT,bg.height,bg.anchorOffsetY);
        this.addChild(bg);
    }

}
class SceneTown extends egret.DisplayObjectContainer /*implements Scene*/{
    /*south=null;
    north=new SceneHome;
    west=null;
    east=null;*/
    public constructor(){
        super();
        //背景底色
        var bgMask=new egret.Shape();
        bgMask.graphics.beginFill(0xa2a2a2);
        bgMask.graphics.drawRect(0,0,STAGE_WIDTH,STAGE_HEIGHT);
        this.addChild(bgMask);
        //地图
        var bg=Util.createBitmapByName("map_world_town_jpg");
        bg.x=Util.SetToMiddle(STAGE_WIDTH,bg.width,bg.anchorOffsetX);
        bg.y=Util.SetToMiddle(STAGE_HEIGHT,bg.height,bg.anchorOffsetY);
        this.addChild(bg);
    }

}