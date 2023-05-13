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
    scene: [Load,Menu,Play,GameOver,Credits]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height;
let borderPadding = borderUISize;

// reserve keyboard words
// movement keys 
let cursors;
// play and restart
// not defined in play but needs to be defined in game over and menu s
let keyP, keyR, keyM, keyC, keyB;

// from PaddleParkourP3
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;

let highScore = 0;
let time;

const submarineVelocity = 2;