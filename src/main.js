// Danny Chan
// Run
// hrs spent: 
/*
creative jurisdiction:

*/


let config = 
{
    type: Phaser.CANVAS, 
    width: 840, 
    height: 480,
    scene: [Load,Menu,Play]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height;
let borderPadding = borderUISize;


// reserve keywords s