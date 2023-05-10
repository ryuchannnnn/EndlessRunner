class Submarine extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);
      this.isMoving = false;
      this.moveSpeed = 2;
    }

    update()
    {
        if(!this.isMoving)
        {
            if(keyUpArr.isDown || keyW.isDown)
            {

            }
        }
    }
  }