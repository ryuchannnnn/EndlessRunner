class Credits extends Phaser.Scene 
{
    constructor() 
    {
        super("creditScene");
    }

    create()
    {
        // key to play the game
        keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    }

    update()
    {   
        this.add.text((game.config.width/2) - 20, 50, 'Credits: ');
        this.add.text((game.config.width/2) - 20, 100, 'BGM Music: https://opengameart.org/content/underwater-theme');
        this.add.text((game.config.width/2) - 20, 100, 'Picking Up coin: https://opengameart.org/content/picked-coin-echo-2');
        this.add.text((game.config.width/2) - 20, 150, 'Key press: https://opengameart.org/content/start-button');
        // need a death sound maybe metal breaking or crash sound


        this.add.text((game.config.width/2) - 20, 300, 'Press B to go back to menu');

        if(Phaser.Input.Keyboard.JustDown(keyB))
        {
            this.scene.start('menuScene');
        }
    }
}