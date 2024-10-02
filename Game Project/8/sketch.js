/*

The Game Project 8

This is a commentary on my experience with this part of the game project and the course in general:

I Learned:
- The general flow of working with JS and the freedom it gives
- consequently learned some very good functional programming concepts, their similarities and differences to OOP which I was used to before starting ITP1.
- using constructor functions and the factory pattern in a real project
- working with the p5.js library

I had difficulty with:
- surprisingly, drawing things properly, when visiting this project once a week I find myself thankful for my comments sicne it is incredible how much love you can put in
making code work, look clean and perform optimally and then forget about ever writing it or why you wrote it that way days later. Using clean code principles and using short
and meaningful comments helped me overcome this hurdle.
-  conveying an idea into form without the aid of an existing game engine with its programming and graphics libraries. A very fun challenge to overcome

My additions (bonuses on top of what was required in the task):
- randomization of background objects and some interactables using the array.push() function, for loops, and of course random().
this not only helped add variety, it also helped shorten the code and remove the need for tedious scrolls through the startGame() function
There were some edge cases I needed to take care of such as an enemy spawning right next to the player and of course making sure each object spawned does not interfere
with another.
- implementing constants where the value never changes in the code
- added a variety of (copyright free) sounds for jumping, collecting coins, taking damage, victory, and game over.
 

General bugfixes and QoL updates:
- Worked on some edge cases with sound issues(like victory/game over sound playing after restarting)
- Reworked the way taking damage works so the player can never take damage on the victory screen 
(as in damage from enemies which cancelled the victory screen and restarted the scene)
- separated some procedural code used more than once into neat small functions to reduce possibility of error and code complexity
- other misc. bug fixes
*/

//sound files
var sound_coin_collect;
var sound_jump;
var sound_death;
var sound_game_over;
var sound_victory;
//score vars
var game_score;
var lives;
var game_over;
var victory;
//gamechar positions
var gameChar_x;
var gameChar_y;
//arrays
var clouds;
var mountains;
var trees_x;
var canyons;

//interactables
var collectables;
var flagpole;
//world variables
var floorPos_y;
var scrollPos;
var gameChar_world_x;
//State Machine
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
//enemies
var enemies;
//platforms
var platforms;
//misc scenery variables
var treePos_y;
//character parameters
const movementSpeed = 5;
const gravity = 2.5;
const jumpPeak = 150;

//load sounds before game starts
function preload() {
	soundFormats('mp3', 'ogg', 'wav');
	sound_coin_collect = loadSound('sounds/Collection');
	soundFormats('wav');
	sound_jump = loadSound('sounds/jump');
	sound_jump.setVolume(0.1);
	sound_death = loadSound('sounds/death');
	sound_game_over = loadSound('sounds/game_over');
	sound_victory = loadSound('sounds/victory');
	sound_victory.setVolume(0.1);
}

function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	lives = 3;
	game_over = false;
	victory = false;
	startGame();
}

function draw() {
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height / 4); // draw some green ground
	push();
	translate(scrollPos, 0);
	// Draw clouds.
	drawClouds();
	// Draw mountains.
	drawMountains();
	// Draw trees.
	drawTrees();
	// Draw canyons.
	canyons.forEach(element => { drawCanyon(element); checkCanyon(element); });
	// Draw Platforms
	platforms.forEach(n => { n.draw() });
	// Draw collectable items.
	for (i = 0; i < collectables.length; i++) {
		checkCollectable(collectables[i]);
	}
	for (i = 0; i < collectables.length; i++) {
		if (collectables[i].isFound == false) {
			drawCollectable(collectables[i]);
		}
		else {
			if (collectables[i].collected == false) {
				game_score++;
				sound_coin_collect.play();
				collectables[i].collected = true;
			}
		}
	}
	//draw enemies
	for (i = 0; i < enemies.length; i++) {
		enemies[i].draw();
		if(enemies[i].checkColission(gameChar_world_x, gameChar_y)){
			if(lives != 0 && victory == false){
				killPlayer();
			}
		}
	}
	// Update flagpole state and draw flagpole
	checkFlagpole();
	renderFlagpole();
	pop();


	// Draw game character.

	drawGameChar();

	//Game Over text
	if (lives == 0) {
		noStroke();
		fill(255, 0, 0);
		textSize(30);
		text("Game over. Press space to continue.", gameChar_x / 2, height / 2);
		gameOverSoundPlay();
		return;
	}
	//Win text
	if (flagpole.isReached) {
		noStroke();
		fill(23, 204, 20);
		textSize(50);
		text("Level complete. Press space to continue.", (width - gameChar_x) / 2, height / 2);
		victorySoundPlay();
		return;
	}

	// Logic to make the game character move or the background scroll.
	if (isLeft) {
		if (gameChar_x > width * 0.2) {
			gameChar_x -= movementSpeed;
		}
		else {
			scrollPos += movementSpeed;
		}
	}

	if (isRight) {
		if (gameChar_x < width * 0.8) {
			gameChar_x += movementSpeed;
		}
		else {
			scrollPos -= movementSpeed; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
	if (gameChar_y < floorPos_y) {

		var onPlatform = false;
		for (i = 0; i < platforms.length; i++) {
			if (platforms[i].checkColission(gameChar_world_x, gameChar_y) == true) {
				onPlatform = true;
				isFalling = false;
				break;
			}
		}
		if (onPlatform == false) {
			gameChar_y += gravity;
			isFalling = true;
		}
	}
	else {
		isFalling = false;
	}
	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
	// Check for taking fall damage
	checkPlayerDie();
	// Draw UI elements: GameScore, hearts
	drawGameScore();
	drawHearts();
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed() {

	// if statements to control the animation of the character when
	// keys are pressed.
	switch (keyCode) {
		case 39: //key is "->"
		case 68: //key is "D"
			if (!isPlummeting) {
				isRight = true;
			}
			break;
		case 37: // key is "<-"
		case 65: //key is "A"
			if (!isPlummeting) {
				isLeft = true;
			}
			break;

		case 32: // key is SpaceBar
			if (!isPlummeting) {
				if (!isFalling && victory == false) {
					gameChar_y -= jumpPeak;
					sound_jump.play();
				}
			}
			if(game_over || victory){
				if(sound_game_over.isPlaying() || sound_victory.isPlaying())
				sound_game_over.stop();
				sound_victory.stop();
				setup();
			}
			break;

	}
}

function keyReleased() {
	// if statements to control the animation of the character when
	// keys are released.

	switch (keyCode) {
		case 39: //key is"->"
		case 68: //key is "D"
			isRight = false;
			break;
		case 37: //key is "<-"
		case 65: //key is "A"
			isLeft = false;
			break;
	}
}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar() {
	// draw game character
	if (isLeft && isFalling) {
		// add your jumping-left code
		//Body
		noStroke();
		fill(247, 84, 30);
		rect(gameChar_x - 5, gameChar_y - 50, 10, 30);
		//Head
		fill(247, 189, 30);
		ellipse(gameChar_x, gameChar_y - 50, 30);
		//Limbs
		stroke(143, 51, 20);
		strokeWeight(5);
		var offset_y = 34;
		var offset_x = 20;
		//Arms
		line(
			gameChar_x - offset_x,
			gameChar_y - offset_y - 5,
			gameChar_x,
			gameChar_y - offset_y); //left arm line(leftxy, rightx,y)
		//Legs
		line(
			gameChar_x,
			gameChar_y - 25,
			gameChar_x - 15,
			gameChar_y - 15); // left leg -thigh to knee - line(thighx,y, kneex,y);
		line(
			gameChar_x - 15,
			gameChar_y - 15,
			gameChar_x - 10,
			gameChar_y - 2); // left leg - knee to foot - line(kneex,y, footx,y);
		line(
			gameChar_x,
			gameChar_y - 25,
			gameChar_x + 5,
			gameChar_y - 12); // right leg - thigh to knee - line(thighx,y, kneex,y);
		line(
			gameChar_x + 5,
			gameChar_y - 12,
			gameChar_x + 15,
			gameChar_y - 2); // right leg - knee to foot - line(kneex,y, footx,y);
	}
	else if (isRight && isFalling) {
		// add your jumping-right code
		//Body
		noStroke();
		fill(247, 84, 30);
		rect(gameChar_x - 5, gameChar_y - 50, 10, 30);
		//Head
		fill(247, 189, 30);
		ellipse(gameChar_x, gameChar_y - 50, 30);
		//Limbs
		stroke(143, 51, 20);
		strokeWeight(5);
		var offset_y = 34;
		var offset_x = 20;
		//Arms
		line(
			gameChar_x,
			gameChar_y - offset_y,
			gameChar_x + offset_x,
			gameChar_y - offset_y - 5); //right arm line(leftxy, rightx,y)
		//Legs
		line(
			gameChar_x,
			gameChar_y - 25,
			gameChar_x - 5,
			gameChar_y - 12); // left leg -thigh to knee - line(thighx,y, kneex,y);
		line(
			gameChar_x - 5,
			gameChar_y - 12,
			gameChar_x - 15,
			gameChar_y - 2); // left leg - knee to foot - line(kneex,y, footx,y);
		line(
			gameChar_x,
			gameChar_y - 25,
			gameChar_x + 15,
			gameChar_y - 15); // right leg - thigh to knee - line(thighx,y, kneex,y);
		line(
			gameChar_x + 15,
			gameChar_y - 15,
			gameChar_x + 10,
			gameChar_y - 2); // right leg - knee to foot - line(kneex,y, footx,y);


	}
	else if (isLeft) {
		// add your walking left code
		//Body
		noStroke();
		fill(247, 84, 30);
		rect(gameChar_x - 5, gameChar_y - 50, 10, 30);
		//Head
		fill(247, 189, 30);
		ellipse(gameChar_x, gameChar_y - 50, 30);
		//Limbs
		stroke(143, 51, 20);
		strokeWeight(5);
		var offset_y = 34;
		var offset_x = 20;
		//Arms
		line(gameChar_x - offset_x, gameChar_y - offset_y + 5, gameChar_x, gameChar_y - offset_y); // line(leftxy, rightx,y)
		//Legs
		line(
			gameChar_x,
			gameChar_y - 25,
			gameChar_x - 15,
			gameChar_y - 2); // left leg line(topx,y, bottomx,y);
		line(
			gameChar_x,
			gameChar_y - 25,
			gameChar_x + 5,
			gameChar_y - 2); // right leg line(topx,y, bottomx,y);

	}
	else if (isRight) {
		// add your walking right code
		//Body
		noStroke();
		fill(247, 84, 30);
		rect(gameChar_x - 5, gameChar_y - 50, 10, 30);
		//Head
		fill(247, 189, 30);
		ellipse(gameChar_x, gameChar_y - 50, 30);
		//Limbs
		stroke(143, 51, 20);
		strokeWeight(5);
		var offset_y = 34;
		var offset_x = 20;
		//Arms
		line(
			gameChar_x,
			gameChar_y - offset_y,
			gameChar_x + offset_x,
			gameChar_y - offset_y + 5); // line(leftxy, rightx,y)
		//Legs
		line(gameChar_x,
			gameChar_y - 25,
			gameChar_x - 5,
			gameChar_y - 2); // left leg line(topx,y, bottomx,y);
		line(
			gameChar_x,
			gameChar_y - 25,
			gameChar_x + 15,
			gameChar_y - 2); // right leg line(topx,y, bottomx,y);

	}
	else if (isFalling || isPlummeting) {
		// add your jumping facing forwards code
		//Limbs
		stroke(143, 51, 20);
		strokeWeight(5);
		//Arms
		line(
			gameChar_x - offset_x,
			gameChar_y - offset_y - 20,
			gameChar_x,
			gameChar_y - offset_y); // left arm line(leftx,y, centrex,y)
		line(
			gameChar_x,
			gameChar_y - offset_y,
			gameChar_x + offset_x,
			gameChar_y - offset_y - 20); // right arm line(centrex,y, rightx,y)
		//Legs
		line(
			gameChar_x - 5,
			gameChar_y - 25,
			gameChar_x - 5,
			gameChar_y - 12); // left leg - thigh to knee - line(thighx,y, kneex,y)
		line(
			gameChar_x + 5,
			gameChar_y - 25,
			gameChar_x + 5,
			gameChar_y - 12);	// right leg - thigh to knee - line(thighx,y, kneex,y)
		line(
			gameChar_x - 5,
			gameChar_y - 12,
			gameChar_x - 12,
			gameChar_y - 25); // left leg - knee to foot - line (kneex,y, foot,x,y)
		line(
			gameChar_x + 5,
			gameChar_y - 12,
			gameChar_x + 12,
			gameChar_y - 25); // right leg - knee to foot - line (kneex,y, foot,x,y)
		//Body
		noStroke();
		fill(247, 84, 30);
		rect(gameChar_x - 10, gameChar_y - 50, 20, 30);
		//Head
		fill(247, 189, 30);
		ellipse(gameChar_x, gameChar_y - 50, 30);

	}
	else {

		// add your standing front facing code
		//Limbs
		stroke(143, 51, 20);
		strokeWeight(5);
		var offset_y = 35;
		var offset_x = 20;
		//Arms
		line(
			gameChar_x - offset_x,
			gameChar_y - offset_y,
			gameChar_x + offset_x,
			gameChar_y - offset_y);
		//Legs
		line(
			gameChar_x - 5,
			gameChar_y - 25,
			gameChar_x - 5,
			gameChar_y - 2);
		line(
			gameChar_x + 5,
			gameChar_y - 25,
			gameChar_x + 5,
			gameChar_y - 2);
		//Body
		noStroke();
		fill(247, 84, 30);
		rect(gameChar_x - 10, gameChar_y - 50, 20, 30);
		//Head
		fill(247, 189, 30);
		ellipse(gameChar_x, gameChar_y - 50, 30);

	}
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds() {
	for (var i = 0; i < clouds.length; i++) {
		fill(201, 200, 195);
		ellipse(clouds[i].x_pos + 5, clouds[i].y_pos + 5, clouds[i].width, clouds[i].height);
		ellipse(clouds[i].x_pos + 25, clouds[i].y_pos + 35, clouds[i].width, clouds[i].height);
		ellipse(clouds[i].x_pos + 85, clouds[i].y_pos - 5, clouds[i].width + 50, clouds[i].height + 50);
		fill(255, 255, 255);
		ellipse(clouds[i].x_pos, clouds[i].y_pos, clouds[i].width, clouds[i].height);
		ellipse(clouds[i].x_pos + 20, clouds[i].y_pos + 30, clouds[i].width, clouds[i].height);
		ellipse(clouds[i].x_pos + 80, clouds[i].y_pos - 10, clouds[i].width + 50, clouds[i].height + 50);
	};
}

// Function to draw mountains objects.
function drawMountains() {
	for (var i = 0; i < mountains.length; i++) {
		//back mountains
		fill(77, 76, 75);
		triangle(mountains[i].x_pos + 100, mountains[i].pos_peak,
			mountains[i].x_pos, mountains[i].y_pos,
			mountains[i].x_pos + 200, mountains[i].y_pos); // triangle(peakx,y, leftx,y, rightx,y)
		triangle(mountains[i].x_pos + 190, mountains[i].pos_peak,
			mountains[i].x_pos + 50, mountains[i].y_pos,
			mountains[i].x_pos + 320, mountains[i].y_pos); // triangle(peakx,y, leftx,y, rightx,y)
		//front mountain
		fill(110, 109, 106);
		triangle(mountains[i].x_pos + 145, mountains[i].pos_peak - 50,
			mountains[i].x_pos + 50, mountains[i].y_pos,
			mountains[i].x_pos + 280, mountains[i].y_pos); // triangle(peakx,y, leftx,y, rightx,y)
	};
}
// Function to draw trees objects.
function drawTrees() {
	for (var i = 0; i < trees_x.length; i++) {
		fill(64, 36, 8);
		rect(trees_x[i], treePos_y, 36, 145);

		fill(22, 99, 13);

		triangle(
			trees_x[i] - 40, treePos_y + 50,
			trees_x[i] + 76, treePos_y + 50,
			trees_x[i] + 18, treePos_y - 60);//lowest leaves triangle (leftx,y, rightx,y, topx,y)
		triangle(
			trees_x[i] - 32, treePos_y,
			trees_x[i] + 68, treePos_y,
			trees_x[i] + 18, treePos_y - 120); //mid leaves triangle (leftx,y, rightx,y, topx,y)
		triangle(trees_x[i] - 20, treePos_y - 50,
			trees_x[i] + 56, treePos_y - 50,
			trees_x[i] + 18, treePos_y - 120);//top leaves triangle (leftx,y, rightx,y, topx,y)
	};

}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon) {
	fill(100, 155, 255);
	rect(t_canyon.x_pos, floorPos_y, t_canyon.width, 150);
	fill(166, 139, 85);
	rect(t_canyon.x_pos - 10, floorPos_y - 20, t_canyon.width - 90, 170);
	rect(t_canyon.x_pos + t_canyon.width, floorPos_y - 20, t_canyon.width - 90, 170);
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon) {
	if (gameChar_world_x > t_canyon.x_pos && gameChar_world_x < t_canyon.x_pos + t_canyon.width) {
		//check if char is jumping over canyon
		//see if gamechar_y is at ground level or below
		if (gameChar_y >= floorPos_y) {
			isPlummeting = true;
			isFalling = false;
		}
	}
	if (isPlummeting) {
		gameChar_y += gravity;
	}
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable) {
	// coin edges 
	fill(250, 166, 30);
	ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size * 1.1);
	// coin core
	fill(255, 225, 56);
	ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size);
	//text
	fill(250, 166, 30);
	textSize(t_collectable.size);
	text('G', t_collectable.x_pos - t_collectable.size / 2.5, t_collectable.y_pos + t_collectable.size / 3);
}

// Function to check character has collected an item.

function checkCollectable(t_collectable) {
	if (dist(t_collectable.x_pos, t_collectable.y_pos, gameChar_world_x, gameChar_y) <= 70) {
		t_collectable.isFound = true;
	}
}
// ----------------------------------
// UI and Win Condition
// ----------------------------------
//function to play the victory sound only once
function victorySoundPlay() {
	if (victory == false) {
		sound_victory.play();
		victory = true;
	}
}
//Function to draw game_score
function drawGameScore() {
	stroke(245, 7, 7);
	fill(255, 255, 0);
	textSize(32);
	text("Score: " + game_score, 20, 30);
}
//Functgion to draw hearts
function drawHearts() {
	stroke(176, 11, 19);
	fill(255, 143, 148);
	textSize(32);
	for (i = 0; i <= lives; i++) {
		if (i > 0) {
			text("♥", i * 35, 60);
		}
	}
}
//check if game character is close enough to the pole to trigger it
function checkFlagpole() {
	if (abs(gameChar_world_x - flagpole.x_pos) <= 20) {
		flagpole.isReached = true;
	}
}
function renderFlagpole() {
	//pole
	fill(217, 217, 217);
	rect(flagpole.x_pos - 20, flagpole.y_pos - 200, 20, 200);
	//flag render logic: if reached - green, else - red
	if (flagpole.isReached == false) {
		fill(255, 0, 0);
	}
	else {
		fill(96, 255, 64);
	}
	rect(flagpole.x_pos, flagpole.y_pos - 200, 80, 50);
}
// ----------------------------------
// Lose Condition
// ----------------------------------
//check if game character has fallen below the canvas
function checkPlayerDie() {
	if (gameChar_y > height) {
		killPlayer();
	}
}

function killPlayer() {
	lives--;
	if (lives > 0) {
		sound_death.play();
		startGame();
	}
}

function startGame() {
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	//meta game variables: score lives, etc.
	game_score = 0;
	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	flagpole = { x_pos: 1300, y_pos: floorPos_y, isReached: false };
	// Initialise arrays of scenery objects.
	trees_x = [200, 500, 800, 1000, 1400, -300, - 600];
	treePos_y = height / 2;

	//clouds region
	clouds = [];
	var prev_x_pos = -900;
	for (let i = 0; i < 8; i++) {
		var cloudObj = {
			x_pos: random(prev_x_pos, prev_x_pos + 51),
			y_pos: random(60, 151),
			width: 100,
			height: 50
		}
		clouds.push(cloudObj);
		prev_x_pos += 300;
	}

	//mountains region
	prev_x_pos = -1200;
	mountains = [];
	for (let i = 0; i < 5; i++) {
		var mountainObj = {
			x_pos: prev_x_pos,
			y_pos: floorPos_y,
			pos_peak: 150
		}
		mountains.push(mountainObj);

		prev_x_pos += 600;
	}
	//canyons and enemies region
	prev_x_pos = -800;
	enemies = [];
	canyons = [];

	for (let i = 0; i < 8; i++) {
		var canyonObj = {
			x_pos: prev_x_pos,
			width: 100
		}
		canyons.push(canyonObj);
		if (prev_x_pos != 700) {
			enemies.push(new Enemy(prev_x_pos - 150, floorPos_y, 100));
		}
		prev_x_pos += 300;
	}
	//collectables and platforms region
	prev_x_pos = -600;
	platforms = [];
	collectables = [];
	for (let i = 0; i < 10; i++) {
		var collectableObj = {
			x_pos: random(prev_x_pos, prev_x_pos + 100),
			y_pos: random(height / 2, 300),
			size: 50,
			isFound: false,
			collected: false
		}
		platforms.push(createPlatforms(prev_x_pos - 10, floorPos_y - 100, 75));
		collectables.push(collectableObj);
		prev_x_pos += 200;
	};


}
//function to play the game over sound only once
function gameOverSoundPlay() {
	if (lives == 0 && game_over == false) {
		sound_game_over.play();
		game_over = true;
	}
}
//create platforms
function createPlatforms(x, y, length) {
	var p = {
		x: x,
		y: y,
		length: length,
		draw: function () {
			fill(120, 81, 46);
			rect(this.x, this.y, this.length, 20);
			fill(89, 89, 89);
			rect(this.x, this.y - 5, 5, 30);
			rect(this.x + this.length - 5, this.y - 5, 5, 30);
		},
		checkColission: function (gc_x, gc_y) {
			if (gc_x > this.x && gc_x < this.x + this.length) {
				var d = this.y - gc_y;
				if (d > 0 && d < 5) {
					return true;
				}
			}
			return false;
		}
	}
	return p;
}

//enemies
function Enemy(x, y, range) {
	this.x = x;
	this.y = y;
	this.range = range;
	this.currentX = x;
	this.inc = 1;
	this.update = function () {
		this.currentX += this.inc;

		if (this.currentX >= this.x + this.range) {
			this.inc = -1;
		}
		else if (this.currentX < this.x) {
			this.inc = 1;
		}
	}

	this.draw = function () {
		
		this.update();
			
			fill(107, 250, 115);
			ellipse(this.currentX, this.y - 20, 50); //head
			//body
			ellipse(this.currentX + 25, this.y - 10,50);
			ellipse(this.currentX + 50, this.y - 10,50);
			ellipse(this.currentX + 75, this.y - 20, 50); 
	
			//eyes
			fill(0,0,0);
			ellipse(this.currentX, this.y - 20, 10); 
			ellipse(this.currentX -10, this.y - 20, 10);

	}
	this.checkColission = function (gc_x, gc_y) {
		var d = dist(gc_x, gc_y, this.currentX, this.y);

		if (d < 50) {
			return true;
		}
	}
	return false;
}
