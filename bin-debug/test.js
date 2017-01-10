var GridSprite = (function (_super) {
    __extends(GridSprite, _super);
    function GridSprite() {
        _super.call(this);
        this.drawGrid();
    }
    var d = __define,c=GridSprite,p=c.prototype;
    p.drawGrid = function () {
        this.graphics.beginFill(0x0000ff);
        this.graphics.drawRect(0, 0, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0x0000ff);
        this.graphics.drawRect(50, 50, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(50, 0, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(0, 50, 50, 50);
        this.graphics.endFill();
    };
    return GridSprite;
}(egret.Sprite));
egret.registerClass(GridSprite,'GridSprite');
//# sourceMappingURL=test.js.map