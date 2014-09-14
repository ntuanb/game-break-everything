// ##########################################
// GAME CORE
// ##########################################

// w: 683, h: 384 - simple width and height

var stage = new PIXI.Stage(0xFFFFFF);
var renderer = PIXI.autoDetectRenderer($(document).width(), $(document).height());
document.body.appendChild(renderer.view);

requestAnimFrame(animate);

// ##########################################
// SPRITES
// ##########################################

var crackTexture = new PIXI.Texture.fromImage("img/crack.png");
var crackAudio = new Howl({
	urls: ['audio/crack.mp3'],
});
var crackAudio2 = new Howl({
	urls: ['audio/crack2.mp3'],
});

// ##########################################
// STAGE INTERACTION
// ##########################################

// do something to our stage on click
stage.click = function() {
	var crack = new PIXI.Sprite(crackTexture);
	crack.position.x = stage.getMousePosition().x;
	crack.position.y = stage.getMousePosition().y;
	crack.width = 75;
	crack.height = 75;
	crack.anchor = new PIXI.Point(0.5, 0.5);
	
	if (Math.random() <= 0.5) {
		crackAudio.play();
	}
	else {
		crackAudio2.play();
	}
	
	stage.addChild(crack);
}

// ##########################################
// THE LOOP
// ##########################################

function animate() {
	requestAnimFrame(animate);

	// render the stage
	renderer.render(stage);
}