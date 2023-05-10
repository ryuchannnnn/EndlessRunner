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
        this.waterBackground = this.add.tileSprite(0,0,840,480,'waterBackground').setOrigin(0,0);
        this.add.text(20,20, "Play");
        
        this.p1Submarine = new Submarine(this,0,30, 'submarine','submarine01').setOrigin(0,0);
        this.p1Submarine.setScale(2);
        this.p1Submarine.play("subMove");
        // this.scene.start("gameOverScene");
    }

    update()
    {
        this.waterBackground.tilePositionX -= 4.5;
    }
}