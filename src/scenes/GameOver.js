class GameOver extends Phaser.Scene 
{
    constructor() 
    {
        super("gameOverScene");
    }

    create()
    {
        // key to play the game
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        
        // making the title show up 
        let gameOverConfig = 
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
        this.add.text((game.config.width/2) - 20, 50, 'Game Over', gameOverConfig).setOrigin(0.5);
        this.add.text((game.config.width/2) - 20, 100, 'To play again, press P', gameOverConfig).setOrigin(0.5);
        this.add.text((game.config.width/2) - 20, 150, 'To go to the menu, press M', gameOverConfig).setOrigin(0.5);
        this.add.text((game.config.width/2) - 20, 200, 'To see credits, press C', gameOverConfig).setOrigin(0.5);
    }

    update()
    {
        if(Phaser.Input.Keyboard.JustDown(keyP))
        {
            this.sound.play('keyPress');
            this.scene.start("playScene");
        }
        if(Phaser.Input.Keyboard.JustDown(keyM))
        {
            this.sound.play('keyPress');
            this.scene.start("menuScene");
        }
        if(Phaser.Input.Keyboard.JustDown(keyC))
        {
            this.sound.play('keyPress');
            this.scene.start("creditScene");
        }
       
    }
}