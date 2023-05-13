// Danny Chan
// Below the Marine
// hrs spent: 30
/*
creative jurisdiction:
    I learned how to make a playable sprite animated because I was not able to find a guide that was recent (<2 years) that showed me how to do it. 
    My visual style is I tried to keep everything blue or underwater themed because the setting of the game takes place in the ocean. I think I am trying
    something new with endless runner as most people are doing a survival, but I added on the aspect where your score is not dependent on survival time, but 
    rather only collecting coins.
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