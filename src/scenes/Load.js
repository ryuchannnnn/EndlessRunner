class Load extends Phaser.Scene 
{
    constructor() 
    {
        super('loadScene');
    }

    // need to add a loading bar in starting from this project forward
    preload() 
    {
        // loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => 
        {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, centerY, w * value, 5);  // (x, y, w, h)
        });
        this.load.on('complete', () => 
        {
            loadingBar.destroy();
        });
    }

    create()
    {
        // check for local storage browser support
        if(window.localStorage) 
        {
            console.log('Local storage supported');
        } 
        else 
        {
            console.log('Local storage not supported');
        }
        this.scene.start('menuScene');

    }
}