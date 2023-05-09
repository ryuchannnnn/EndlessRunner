class Play extends Phaser.Scene
{
    constructor()
    {
        super('playScene');
    }

    preload()
    {
        this.load.image('underWaterBackground', './assets/background.png');
        this.load.image('dolphin', './assets/dolphin.png');
        // this.load.image('shark', './assets/shark.png', {frameWidth:64, frameHeight:32, startFrame:0, endFrame:7});
    }

    create()
    {
        this.underWaterBackground = this.add.tileSprite(0,0,840,480,'underWaterBackground').setOrigin(0,0);
        this.p1Dolphin = new Dolphin(this,game.config.width/2, game.config.height - borderUISize - borderPadding, 'dolphin').setOrigin(0.5,0);
        
    }

    update()
    {
        this.underWaterBackground.tilePositionX -= 4.5;
    }
}