class Play extends Phaser.Scene
{
    constructor()
    {
        super('playScene');
    }

    preload()
    {
        
    }

    create()
    {

        
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
        
        // tester
        // this.add.text(320,150, "Endless Runner Play");
    }

    update()
    {

    }
}