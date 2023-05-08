class Menu extends Phaser.Scene
{
    constructor()
    {
        super('menuScene');
    }

    create()
    {
        this.add.text(320,150, "Endless Runner Menu");
        this.scene.start("playScene");
        // console.log('going to playScene');
    }
}