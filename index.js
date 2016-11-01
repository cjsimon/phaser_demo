// Game initialization
var game = new Phaser.Game(
	"100", "100", Phaser.CANVAS, 'phaser-example',
	{ preload: preload, create: create, update: update }
);

// The virus sprite
var sprite;

function preload() {
	// 64x64 sized frames
	// 18 frames
	game.load.spritesheet('virus', 'images/sprite.png', 64, 64, 64);
}

function create() {
	sprite = game.add.sprite(game.width/2, game.height/2, 'virus');
	sprite.animations.add('walk');
	// Play walk at 100 speed and loop 
	sprite.animations.play('walk', 100, true);
}

//  update isn't called until 'create' has completed. If you need to process stuff before that point (i.e. while the preload is still happening)
//  then create a function called loadUpdate() and use that
function update() {
	
}
