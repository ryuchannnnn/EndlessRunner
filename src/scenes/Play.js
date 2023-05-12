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
        cursors = this.input.keyboard.createCursorKeys();
        
        // random spawn points 
        this.randomX1 = Phaser.Math.Between(630, game.config.width);
        this.randomY1 = Phaser.Math.Between(0, game.config.height);
        this.randomX2 = Phaser.Math.Between(630, game.config.width);
        this.randomY2 = Phaser.Math.Between(0, game.config.height);
        this.randomX3 = Phaser.Math.Between(630, game.config.width);
        this.randomY3 = Phaser.Math.Between(0, game.config.height);

        // random spawn points for coin
        this.coinX1 = Phaser.Math.Between(630, game.config.width);
        this.coinY1 = Phaser.Math.Between(0, game.config.height);
        this.coinX2 = Phaser.Math.Between(630, game.config.width);
        this.coinY2 = Phaser.Math.Between(0, game.config.height);
        this.coinX3 = Phaser.Math.Between(630, game.config.width);
        this.coinY3 = Phaser.Math.Between(0, game.config.height);

        // shark
        this.shark1 = new Shark(this, this.randomX1, this.randomY1, 'shark', 0).setOrigin(0,0);
        this.shark2 = new Shark(this, this.randomX2, this.randomY2, 'shark', 0).setOrigin(0,0);
        this.shark3 = new Shark(this, this.randomX3, this.randomY3, 'shark', 0).setOrigin(0,0);

        // coin 
        this.coin1 = new Coin(this, this.coinX1, this.coinY1, 'coin', 0).setOrigin(0,0);
        this.coin1.setScale(7);
        this.coin2 = new Coin(this, this.coinX2, this.coinY2, 'coin', 0).setOrigin(0,0);
        this.coin2.setScale(7);
        this.coin3 = new Coin(this, this.coinX3, this.coinY3, 'coin', 0).setOrigin(0,0);
        this.coin3.setScale(7);

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

        this.coin1.update();
        this.coin2.update();
        this.coin3.update();
        this.p1Submarine.update();


        if(cursors.down.isDown && this.p1Submarine.y < borderUISize)
        {
            this.p1Submarine.y += submarineVelocity;
        }

        if(cursors.up.isDown && this.p1Submarine.y < game.config.height)
        {
            this.p1Submarine.y -= submarineVelocity;
        }


    }
}