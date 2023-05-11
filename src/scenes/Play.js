class Play extends Phaser.Scene 
{
    constructor() 
    {
        super("playScene");
    }

    preload()
    {
        this.anims.create({
            key: "subMove",
            frameRate: 6,
            frames: this.anims.generateFrameNames("submarine", 
            {
                prefix: "submarine0",
                start: 1,
                end: 6,
                frames:[1,2,3,4,5,6]
            }),
            repeat: -1,
        });
    }

    create()
    {
        // background
        this.waterBackground = this.add.tileSprite(0,0,840,480,'waterBackground').setOrigin(0,0);
        // this.add.text(20,20, "Play");
        
        // animation for ship (player controllable)
        this.p1Submarine = new Submarine(this,0,30, 'submarine','submarine01').setOrigin(0,0);
        this.p1Submarine.setScale(2);
        this.p1Submarine.play("subMove");
        
        // keyboard input
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyUpArr = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDownArr = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        
        // random spawn points 
        this.randomX1 = Phaser.Math.Between(630, game.config.width);
        this.randomY1 = Phaser.Math.Between(0, game.config.height);
        this.randomX2 = Phaser.Math.Between(630, game.config.width);
        this.randomY2 = Phaser.Math.Between(0, game.config.height);
        this.randomX3 = Phaser.Math.Between(630, game.config.width);
        this.randomY3 = Phaser.Math.Between(0, game.config.height);

        // shark
        this.shark1 = new Shark(this, this.randomX1, this.randomY1, 'shark', 0).setOrigin(0,0);
        this.shark2 = new Shark(this, this.randomX2, this.randomY2, 'shark', 0).setOrigin(0,0);
        this.shark3 = new Shark(this, this.randomX3, this.randomY3, 'shark', 0).setOrigin(0,0);

        // audio 
        // https://opengameart.org/content/underwater-theme
        this.music = this.sound.add("music");
        var musicConfig = 
        {
            mute: false,
            volume: 0.10, 
            rate: 1,
            detune: 0, 
            seek: 0,
            loop: true,
            delay: 0
        }
        this.music.play(musicConfig);
    }

    update()
    {
        this.waterBackground.tilePositionX -= 4.5;
        this.shark1.update();
        this.shark2.update();
        this.shark3.update();

    }
}