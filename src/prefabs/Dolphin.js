class Dolphin extends Phaser.GameObjects.Sprite
{
    constructor(scene,x,y,texture,frame)
    {
        super(scene,x,y,texture,frame);
        scene.add.existing(this);
        this.isMoving = false;
        this.moveSpeed = 2;
    }

    update()
    {
        if(!this.isMoving)
        {
            if(key)
            {
                
            }
        }
    }

}