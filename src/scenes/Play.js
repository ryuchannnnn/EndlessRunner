class Play extends Phaser.Scene
{
    constructor()
    {
        super('playScene');
    }

    preload()
    {
        this.load.image('waterBackground', './assets/waterBackground.png');

        this.load.atlas('submarine', './assets/submarineSprSheet.png', './assets/submarine.json');
        this.anims.create({
                key:"subMove",
                frameRate: 6,
                frames: this.anims.generateFrameNames("submarine", 
                {
                    prefix: "submarine0",
                    suffix: ".png",
                    start: 0,
                    end: 6
                }
                ),
                repeat:-1
            }
        );
    }

    create()
    {
        this.waterBackground = this.add.tileSprite(0, 0, 840, 480, 'waterBackground').setOrigin(0, 0);
        // keyboard keys for moving 
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        // keyA = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        // keyD = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.D);
        keyUpArr = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDownArr = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        // keyLeftArr = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        // keyRightArr = this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // keyboard keys for game settings
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
        
        this.p1Submarine = new Submarine(this, 0, 30, 'submarine', 'submarine01').setOrigin(0,0);

        let subAnim: Phaser.GameObjects.Sprite = this.add.sprite(0,30, "submarine", "submarine01.png");
        subAnim.play("subMove");

        // tester
        // this.add.text(320,150, "Endless Runner Play");
    }

    update()
    {
        this.waterBackground.tilePositionX -= 4.5;
    }
}