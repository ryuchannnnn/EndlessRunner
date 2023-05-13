class Shark extends Phaser.GameObjects.Sprite
{
    constructor(scene,x,y,texture,frame)
    {
        super(scene,x,y,texture,frame)
        {
            scene.add.existing(this);
            this.moveSpeed = game.settings.sharkSpeed;
        }
    }

    update()
    {
        this.x -= this.moveSpeed;
        if(this.x <= 0 - this.w)
        {
            this.reset();
        } 
    }

    reset()
    {
        this.x = game.config.width;
        this.y = Phaser.Math.Between(0, game.config.height-30);
    }
}