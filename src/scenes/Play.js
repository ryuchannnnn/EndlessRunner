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
        // backgroun image 
        this.underWaterBackground = this.add.tileSprite(0,0,840,480,'underWaterBackground').setOrigin(0,0);
        
        // moveable dolphin 
        this.p1Dolphin = new Dolphin(this,game.config.width/2, game.config.height - borderUISize - borderPadding, 'dolphin').setOrigin(0.5,0);
        
        // keyboard keys for moving 
        keyW = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.W);
        // keyA = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.S);
        // keyD = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.D);
        keyUpArr = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDownArr = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        // keyLeftArr = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        // keyRightArr = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // keyboard keys for game settings
        keyP = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.P);
        keyR = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.R);
        keyI = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.I);
        keyB = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.B);
        
        // tester
        // this.add.text(320,150, "Endless Runner Play");
    }

    update()
    {
        this.underWaterBackground.tilePositionX -= 4.5;
    }
}