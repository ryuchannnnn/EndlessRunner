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
        time = 0;
        // background
        this.waterBackground = this.add.tileSprite(0,0,840,480,'waterBackground').setOrigin(0,0);
        
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
        this.coin1 = new Coin(this, this.coinX1, this.coinY1, 'coin', 0, 1).setOrigin(0,0);
        this.coin1.setScale(7);
        this.coin2 = new Coin(this, this.coinX2, this.coinY2, 'coin', 0, 1).setOrigin(0,0);
        this.coin2.setScale(7);
        this.coin3 = new Coin(this, this.coinX3, this.coinY3, 'coin', 0, 1).setOrigin(0,0);
        this.coin3.setScale(7);

        // audio 
        // https://opengameart.org/content/underwater-theme
        this.music = this.sound.add("music");
        var musicConfig = 
        {
            mute: false,
            volume: 0.40, // ok volume and is hearable when my laptop speakers were set to 40
            rate: 1,
            detune: 0, 
            seek: 0,
            loop: true,
            delay: 0
        }
        this.music.play(musicConfig);

        // points
        this.points = 0;

        // game over signal 
        this.gameOver = false;

        let highScoreConfig = 
        {   
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#FFFFFF',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth:180
        }

        this.displayHighScore = this.add.text(600,0, "High Score: " + highScore, highScoreConfig);
        
        this.gameTimer = this.time.addEvent({
            delay: 10000,
            callback: this.addSharkSpeed,
            callbackScope: this,
            loop:true
        });
    }

    update()
    {

        this.waterBackground.tilePositionX -= 4.5;

        if(!this.gameOver)
        {
            this.shark1.update();
            this.shark2.update();
            this.shark3.update();
    
            this.p1Submarine.update();

            this.coin1.update();
            this.coin2.update();
            this.coin3.update();
        }
        
        // movement
        if(cursors.down.isDown && !(this.p1Submarine.y >= 430))
        {
            this.p1Submarine.y += submarineVelocity;
        }

        if(cursors.up.isDown && !(this.p1Submarine.y <= 0))
        {
            this.p1Submarine.y -= submarineVelocity;
        }

        if(this.checkCollisionForShark(this.p1Submarine, this.shark1))
        {
            this.sound.play('subCrash');
            this.p1Submarine.destroy();
            if(this.points > highScore)
            {
                highScore = this.points;
                this.displayHighScore.text = highScore;
            }
            this.gameOver = true;
            if(this.gameOver)
            {
                this.scene.start('gameOverScene');
            }
        }

        if(this.checkCollisionForShark(this.p1Submarine, this.shark2))
        {
            this.sound.play('subCrash');
            this.p1Submarine.destroy();
            if(this.points > highScore)
            {
                highScore = this.points;
                this.displayHighScore.text = highScore;
            }
            this.gameOver = true;
            if(this.gameOver)
            {
                this.scene.start('gameOverScene');
            }
        }

        if(this.checkCollisionForShark(this.p1Submarine, this.shark3))
        {
            this.sound.play('subCrash');
            this.p1Submarine.destroy();
            if(this.points > highScore)
            {
                highScore = this.points;
                this.displayHighScore.text = highScore;
            }
            this.gameOver = true;
            if(this.gameOver)
            {
                this.scene.start('gameOverScene');
            }
        }

        if(this.checkCollisionForCoin(this.p1Submarine, this.coin1))
        {
            this.sound.play('coinPickup');
            this.coinBeGone(this.coin1);
        }
        
        if(this.checkCollisionForCoin(this.p1Submarine, this.coin2))
        {
            this.sound.play('coinPickup');
            this.coinBeGone(this.coin2);
        }
        
        if(this.checkCollisionForCoin(this.p1Submarine, this.coin3))
        {
            this.sound.play('coinPickup');
            this.coinBeGone(this.coin3);
        }
    }

    checkCollisionForShark(submarine, shark)
    {
        if(submarine.x < shark.x + shark.width && submarine.x + submarine.width > shark.x && submarine.y < shark.y + shark.height && submarine.height + submarine.y > shark.y)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    checkCollisionForCoin(submarine, coin)
    {
        if(submarine.x < coin.x + coin.width && submarine.x + submarine.width > coin.x && submarine.y < coin.y + coin.height && submarine.height + submarine.y > coin.y)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    coinBeGone(coin)
    {
        coin.alpha = 0;
        coin.reset();
        coin.alpha = 1;
        this.points += coin.points; // you collected X coins
    }

    addSharkSpeed()
    {
        time++;
        if(time %5 == 0)
        {
            console.log("Speeding Up");
            this.shark1.moveSpeed = game.settings.sharkSpeed + 2;
            this.shark2.moveSpeed = game.settings.sharkSpeed + 2;
            this.shark3.moveSpeed = game.settings.sharkSpeed + 2;
            this.music.rate += 0.25;
            this.waterBackground.tilePositionX -= 1.5;
        }
    }
}