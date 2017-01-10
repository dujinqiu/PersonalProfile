const STAGE_WIDTH = 640;
const STAGE_HEIGHT = 1136;
const PIXEL_SCALE = 48;

class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView: LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();//TODO
        this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event: RES.ResourceEvent): void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event: RES.ResourceEvent): void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }


    private createGameScene(): void {
        var pages = [];
        var scenehome: egret.DisplayObjectContainer = new SceneHome;
        this.addChild(scenehome);
        scenehome.touchEnabled=true;

        var heroic = new NPC(Util.createBitmapByName("Actor1_jpg"), "主人公");
        var dialog = new Dialog(heroic, "这是一个简介");
        this.addChild(dialog);
        Util.SetToScreenCenter(dialog);

        var scenetown: egret.DisplayObjectContainer = new SceneTown;
        Util.placeOutsideScreen(scenetown, 0, 1);
        scenetown.touchEnabled=true;
        this.addChild(scenetown);

        var sceneSchool: egret.DisplayObjectContainer = new SceneClassroom;
        Util.placeOutsideScreen(sceneSchool, 0, 2);
        this.addChild(sceneSchool);
        sceneSchool.touchEnabled=true;

        var shape=new egret.Shape;
        shape.graphics.drawRect(0,0,STAGE_WIDTH,STAGE_HEIGHT);
        shape.alpha=0;
        this.addChild(shape);
        shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.func,this);
        shape.touchEnabled=true;

    }
    func(evt:egret.TouchEvent){
        console.log("hhh");
    }
}
