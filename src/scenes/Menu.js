class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create()
    {
        // key to play the game
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
        
        // making the title show up 
        let titleConfig = 
        {
            fontFamily: 'Verdana',
            fontSize: '28px',
            backgroundColor: '#116BEE', 
            color: '#000000', 
            aligh: 'right',
            padding:
            {
                top: 5,
                bottom: 5,
            },
            fixedWidth:0
        }
        // text for game
        this.add.text((game.config.width/2) - 20, 50, 'Below The Marine', titleConfig).setOrigin(0.5);
        this.add.text((game.config.width/2) - 20, 100, 'Use W or Up Arrow to move up', titleConfig).setOrigin(0.5);
        this.add.text((game.config.width/2) - 20, 150, 'Use S or Down Arrow to move down', titleConfig).setOrigin(0.5);
        this.add.text((game.config.width/2) - 10, 200, 'The goal of this game is to avoid the sharks, collect coins', titleConfig).setOrigin(0.5);
        this.add.text((game.config.width/2) - 20, 250, 'and most importantly, stay alive', titleConfig).setOrigin(0.5);   

        // play
        this.add.text((game.config.width/2) - 20, 300, 'when you are ready, press P to play', titleConfig).setOrigin(0.5); 
        // credits
        this.add.text((game.config.width/2) - 20, 400, 'press C for credits', titleConfig).setOrigin(0.5); 
        this.points = 0;
    }

    update()
    {
        if(Phaser.Input.Keyboard.JustDown(keyP))
        {
            game.settings = 
            {
                sharkSpeed: 3
            }
            this.sound.play('keyPress');
            this.scene.start("playScene");
        }
        if(Phaser.Input.Keyboard.JustDown(keyC))
        {
            this.sound.play('keyPress');
            this.scene.start("creditScene");
        }
        
    }
}