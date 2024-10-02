/*

The Game Project

Week 3

Game interaction

*/
//collectable and canyon
var collectable;
var canyon;

//gamechar positions and floor y position
var gameChar_x;
var gameChar_y;
var floorPos_y;
//char drawing offsets
var offset_y;
var offset_x;
//`isLeft`, `isRight`, `isFalling` and `isPlummeting`.
var isLeft;
var isRight;
var isFalling;
var isPlummeting;

//used to determine whether to fall or not
var reachedPeak;
//character parameters
const movementSpeed = 3;
const gravity = 5;
const jumpVelocity = 4;
const jumpPeak = 100;

function setup() {
	createCanvas(1024, 576);

	floorPos_y = height * 3 / 4;
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;

	//initialising interactable objs
	canyon = { x_pos: 300, width: 100 };

	collectable = { x_pos: 350, y_pos: 300, size: 50, isFound: false };

	//char state machine bools
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
	reachedPeak = false;

	//char drawing offsets
	offset_y = 35;
	offset_x = 20;
}

function draw() {

	//testing bool changes
	//console.log("isLeft:" + isLeft + "\nisRight:" + isRight + "\nisFalling:" + isFalling + "\nisPlummeting:" + isPlummeting);
	///////////DRAWING CODE//////////

	background(100, 155, 255); //fill the sky blue


	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
	//canyon
	fill(100, 155, 255);
	rect(canyon.x_pos, floorPos_y, canyon.width, 150);
	fill(166, 139, 85);
	rect(canyon.x_pos - 10, floorPos_y - 20, canyon.width - 90, 170);
	rect(canyon.x_pos + canyon.width, floorPos_y - 20, canyon.width - 90, 170);

	//draw collectable
	//collectable
	if (collectable.isFound == false) {
		// coin edges 
		fill(250, 166, 30);
		ellipse(collectable.x_pos, collectable.y_pos, collectable.size * 1.1);
		// coin core
		fill(255, 225, 56);
		ellipse(collectable.x_pos, collectable.y_pos, collectable.size);
		//text
		fill(250, 166, 30);
		textSize(collectable.size);
		text('G', collectable.x_pos - collectable.size / 2.5, collectable.y_pos + collectable.size / 3);
	}


	//the game character
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
		line(gameChar_x - offset_x, gameChar_y - offset_y - 5, gameChar_x, gameChar_y - offset_y); //left arm line(leftxy, rightx,y)
		//Legs
		line(gameChar_x, gameChar_y - 25, gameChar_x - 15, gameChar_y - 15); // left leg -thigh to knee - line(thighx,y, kneex,y);
		line(gameChar_x - 15, gameChar_y - 15, gameChar_x - 10, gameChar_y - 2); // left leg - knee to foot - line(kneex,y, footx,y);
		//line(gameChar_x, gameChar_y - 25, gameChar_x - 5, gameChar_y - 12); // left leg -thigh to knee - line(thighx,y, kneex,y);
		//line(gameChar_x - 5, gameChar_y - 12, gameChar_x - 15, gameChar_y - 2); // left leg - knee to foot - line(kneex,y, footx,y);
		line(gameChar_x, gameChar_y - 25, gameChar_x + 5, gameChar_y - 12); // right leg - thigh to knee - line(thighx,y, kneex,y);
		line(gameChar_x + 5, gameChar_y - 12, gameChar_x + 15, gameChar_y - 2); // right leg - knee to foot - line(kneex,y, footx,y);
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
		line(gameChar_x, gameChar_y - offset_y, gameChar_x + offset_x, gameChar_y - offset_y - 5); //right arm line(leftxy, rightx,y)
		//Legs
		line(gameChar_x, gameChar_y - 25, gameChar_x - 5, gameChar_y - 12); // left leg -thigh to knee - line(thighx,y, kneex,y);
		line(gameChar_x - 5, gameChar_y - 12, gameChar_x - 15, gameChar_y - 2); // left leg - knee to foot - line(kneex,y, footx,y);
		line(gameChar_x, gameChar_y - 25, gameChar_x + 15, gameChar_y - 15); // right leg - thigh to knee - line(thighx,y, kneex,y);
		line(gameChar_x + 15, gameChar_y - 15, gameChar_x + 10, gameChar_y - 2); // right leg - knee to foot - line(kneex,y, footx,y);


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
		line(gameChar_x, gameChar_y - 25, gameChar_x - 15, gameChar_y - 2); // left leg line(topx,y, bottomx,y);
		line(gameChar_x, gameChar_y - 25, gameChar_x + 5, gameChar_y - 2); // right leg line(topx,y, bottomx,y);

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
		line(gameChar_x, gameChar_y - offset_y, gameChar_x + offset_x, gameChar_y - offset_y + 5); // line(leftxy, rightx,y)
		//Legs
		line(gameChar_x, gameChar_y - 25, gameChar_x - 5, gameChar_y - 2); // left leg line(topx,y, bottomx,y);
		line(gameChar_x, gameChar_y - 25, gameChar_x + 15, gameChar_y - 2); // right leg line(topx,y, bottomx,y);

	}
	else if (isFalling || isPlummeting) {
		// add your jumping facing forwards code
		//Limbs
		stroke(143, 51, 20);
		strokeWeight(5);
		//Arms
		line(gameChar_x - offset_x, gameChar_y - offset_y - 20, gameChar_x, gameChar_y - offset_y); // left arm line(leftx,y, centrex,y)
		line(gameChar_x, gameChar_y - offset_y, gameChar_x + offset_x, gameChar_y - offset_y - 20); // right arm line(centrex,y, rightx,y)
		//Legs
		line(gameChar_x - 5, gameChar_y - 25, gameChar_x - 5, gameChar_y - 12); // left leg - thigh to knee - line(thighx,y, kneex,y)
		line(gameChar_x + 5, gameChar_y - 25, gameChar_x + 5, gameChar_y - 12);	// right leg - thigh to knee - line(thighx,y, kneex,y)
		line(gameChar_x - 5, gameChar_y - 12, gameChar_x - 12, gameChar_y - 25); // left leg - knee to foot - line (kneex,y, foot,x,y)
		line(gameChar_x + 5, gameChar_y - 12, gameChar_x + 12, gameChar_y - 25); // right leg - knee to foot - line (kneex,y, foot,x,y)
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
		line(gameChar_x - offset_x, gameChar_y - offset_y, gameChar_x + offset_x, gameChar_y - offset_y);
		//Legs
		line(gameChar_x - 5, gameChar_y - 25, gameChar_x - 5, gameChar_y - 2);
		line(gameChar_x + 5, gameChar_y - 25, gameChar_x + 5, gameChar_y - 2);
		//Body
		noStroke();
		fill(247, 84, 30);
		rect(gameChar_x - 10, gameChar_y - 50, 20, 30);
		//Head
		fill(247, 189, 30);
		ellipse(gameChar_x, gameChar_y - 50, 30);

	}

	///////////INTERACTION CODE//////////
	//check for coin collisions
	if (dist(collectable.x_pos, collectable.y_pos, gameChar_x, gameChar_y) <= 50) {
		collectable.isFound = true;
	}
	//console.log(dist(x1, y1, x2, y2));
	//check for caynon
//console.log(gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos + canyon.width);

	if (gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos + canyon.width) {
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
	//Put conditional statements to move the game character below here
	if (isLeft) {
		gameChar_x -= movementSpeed;
	}
	else if (isRight) {
		gameChar_x += movementSpeed;
	}

	if (isFalling) {
		//see if peak was reached, if not - decrement Y pos. of gamechar
		if (reachedPeak == false && gameChar_y <= floorPos_y && gameChar_y > floorPos_y - jumpPeak) {
			gameChar_y -= jumpVelocity;
		}
		//if gamechar's Y pos is less than or equal to jump Peak, set reached Peak to true 
		else if (gameChar_y <= floorPos_y - jumpPeak && reachedPeak == false) {
			reachedPeak = true;
		}
		//increment gamechar's Y pos with gravity if reachedPeak is true and he hasn't touched the ground yet 
		else if (reachedPeak == true && gameChar_y < floorPos_y) {
			gameChar_y += gravity;
		}
		//if reachedPeak is true and gamechar is touching or below the ground, make him stand on the ground and reset reachedPeak and isFalling to false
		else if (reachedPeak == true && gameChar_y >= floorPos_y) {
			gameChar_y = floorPos_y;
			reachedPeak = false;
			isFalling = false;
		}
		//Logging parameters for testing purposes:
		//console.log("gamechar_y " + gameChar_y + "\nReachedPeak " + reachedPeak + "\nfloorPos_Y " + floorPos_y);
	}
}


function keyPressed() {
	// if statements to control the animation of the character when
	// keys are pressed.
	switch (keyCode) {
		case 39: //key is "->"
			if (!isPlummeting) {
				isRight = true;
			}
			break;
		case 37: // key is "<-"
			if (!isPlummeting) {
				isLeft = true;
			}

			break;

		case 32: // key is SpaceBar
			if (!isPlummeting) {
				isFalling = true;
			}

			break;

	}

}

function keyReleased() {
	// if statements to control the animation of the character when
	// keys are released.

	switch (keyCode) {
		case 39: //key is"->"
			isRight = false;
			break;
		case 37: //key is "<-"
			isLeft = false;
			break;
		case 32: // key is SpaceBar
			break;
	}
}
