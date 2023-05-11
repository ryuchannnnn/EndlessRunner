class Load extends Phaser.Scene 
{
    constructor() 
    {
        super("loadScene");
    }

    preload() 
    {
        // loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, centerY, w * value, 5);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        this.load.path = './assets/';
        // load graphics assets // dont need to write assets anymore
        this.load.image('waterBackground', 'waterBackground.png');
        this.load.atlas('submarine', 'submarineSprSheet.png', 'submarine.json');
        this.load.image('shark', 'shark.png');
        this.load.image('coin', 'coin.png');
        // load audio assets
        this.load.audio('music', 'underwaterMusic.mp3');    
    }

    create()
    {
        this.scene.start("menuScene");
    }
}