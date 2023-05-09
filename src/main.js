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


// reserve keyboard words
// movement keys 
let keyW,keyA,keyS,keyD;
let keyUpArr, keyDownArr, keyLeftArr, keyRightArr; 
// pause and restart maybe?
let keyP, keyR, keyI, keyB;