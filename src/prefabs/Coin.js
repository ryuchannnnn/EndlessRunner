class Coin extends Phaser.GameObjects.Sprite
{
    constructor(scene,x,y,texture,frame,pointValue)
    {
        super(scene,x,y,texture,frame)
        {
            scene.add.existing(this);
            this.points = pointValue;
            this.moveSpeed = 2;
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