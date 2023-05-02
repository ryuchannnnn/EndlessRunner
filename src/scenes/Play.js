class Play extends Phaser.Scene
{
    constructor()
    {
        super('playScene');
    }

    create()
    {
        this.add.text(320, 150, "Endless Runner Play");
    }
}