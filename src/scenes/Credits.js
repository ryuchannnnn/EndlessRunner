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
        this.add.text(0, 50, 'Credits: ');
        this.add.text(0, 100, 'BGM Music: https://opengameart.org/content/underwater-theme');
        this.add.text(0, 150, 'Picking Up coin: https://opengameart.org/content/picked-coin-echo-2');
        this.add.text(0, 200, 'Key press: https://opengameart.org/content/start-button');
        this.add.text(0, 250, 'Death sound: https://opengameart.org/content/metal-hit');
        this.add.text(0, 300, 'his website: http://www.marcelofernandezmusic.com/');

        this.add.text(50, 350, 'Press B to go back to menu');

        if(Phaser.Input.Keyboard.JustDown(keyB))
        {
            this.scene.start('menuScene');
        }
    }
}