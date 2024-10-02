/*

The Game Project 4 - Side scrolling

Week 6

*/
var gamechar_offset_y;
var gamechar_offset_x;
var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

//arrays
var clouds;
var mountains;
var trees_x;
var canyons;
var collectables;
//misc scenery variables
var treePos_y;

function setup() {
	//canvas setup
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;

	//gamechar positions
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;
	//misc scene variables
	treePos_y = height / 2;
	//offset values, used in drawing the game character
	gamechar_offset_y = 35;
	gamechar_offset_x = 20;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
	trees_x = [200, 500, 800, 1000, 1400, -300, - 600];

	//clouds region
	clouds = [{
		pos_x: random(80, 151), //included random values so each scene has unique cloud placement
		pos_y: random(60, 151),
		width: 100,
		height: 50
	}, {
		pos_x: random(300, 501),
		pos_y: random(60, 151),
		width: 100,
		height: 50
	}, {
		pos_x: random(600, 851),
		pos_y: random(60, 151),
		width: 100,
		height: 50
	}, {
		pos_x: random(-300, 1),
		pos_y: random(60, 151),
		width: 100,
		height: 50
	}, {
		pos_x: random(-550, -351),
		pos_y: random(60, 151),
		width: 100,
		height: 50
	}, {
		pos_x: random(-900, -701),
		pos_y: random(60, 151),
		width: 100,
		height: 50
	}, {
		pos_x: random(900, 1201),
		pos_y: random(60, 151),
		width: 100,
		height: 50
	}, {
		pos_x: random(1350, 1500),
		pos_y: random(60, 151),
		width: 100,
		height: 50
	}, {
		pos_x: random(1650, 2000),
		pos_y: random(60, 151),
		width: 100,
		height: 50
	}];
	//mountains region
	mountains = [{
		pos_x: -190,
		pos_y: floorPos_y,
		pos_peak: 150
	}, {
		pos_x: 380,
		pos_y: floorPos_y,
		pos_peak: 150
	}, {
		pos_x: 970,
		pos_y: floorPos_y,
		pos_peak: 150
	}, {
		pos_x: 1570,
		pos_y: floorPos_y,
		pos_peak: 150
	}, {
		pos_x: -570,
		pos_y: floorPos_y,
		pos_peak: 150
	}];
	//canyons region
	canyons = [{
		x_pos: 50,
		width: 100
	}, {
		x_pos: 200,
		width: 100
	}, {
		x_pos: 600,
		width: 100
	}, {
		x_pos: 900,
		width: 100
	}, {
		x_pos: 1100,
		width: 100
	}, {
		x_pos: 1500,
		width: 100
	}, {
		x_pos: -200,
		width: 100
	}, {
		x_pos: -500,
		width: 100
	}, {
		x_pos: -1000,
		width: 100
	}];
	//collectables region
	collectables = [{
		x_pos: random(50, 151),
		y_pos: random(height / 2, 300),
		size: 50
	}, {
		x_pos: random(200, 351),
		y_pos: random(height / 2, 300),
		size: 50
	}, {
		x_pos: random(400, 551),
		y_pos: random(height / 2, 300),
		size: 50
	}, {
		x_pos: random(700, 901),
		y_pos: random(height / 2, 300),
		size: 50
	}, {
		x_pos: random(1000, 1201),
		y_pos: random(height / 2, 300),
		size: 50
	}, {
		x_pos: random(-200, 1),
		y_pos: random(height / 2, 300),
		size: 50
	}, {
		x_pos: random(-400, -251),
		y_pos: random(height / 2, 300),
		size: 50
	}];
}

function draw() {
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height / 4); // draw some green ground
	//scroll pushing
	push();
	translate(scrollPos, 0);
	// Draw clouds.
	for (var i = 0; i < clouds.length; i++) {
		fill(201, 200, 195);
		ellipse(clouds[i].pos_x + 5, clouds[i].pos_y + 5, clouds[i].width, clouds[i].height);
		ellipse(clouds[i].pos_x + 25, clouds[i].pos_y + 35, clouds[i].width, clouds[i].height);
		ellipse(clouds[i].pos_x + 85, clouds[i].pos_y - 5, clouds[i].width + 50, clouds[i].height + 50);
		fill(255, 255, 255);
		ellipse(clouds[i].pos_x, clouds[i].pos_y, clouds[i].width, clouds[i].height);
		ellipse(clouds[i].pos_x + 20, clouds[i].pos_y + 30, clouds[i].width, clouds[i].height);
		ellipse(clouds[i].pos_x + 80, clouds[i].pos_y - 10, clouds[i].width + 50, clouds[i].height + 50);
	};

	// Draw mountains.

	for (var i = 0; i < mountains.length; i++) {
		//back mountains
		fill(77, 76, 75);
		triangle(mountains[i].pos_x + 100, mountains[i].pos_peak, mountains[i].pos_x, mountains[i].pos_y, mountains[i].pos_x + 200, mountains[i].pos_y); // triangle(peakx,y, leftx,y, rightx,y)
		triangle(mountains[i].pos_x + 190, mountains[i].pos_peak, mountains[i].pos_x + 50, mountains[i].pos_y, mountains[i].pos_x + 320, mountains[i].pos_y); // triangle(peakx,y, leftx,y, rightx,y)
		//front mountain
		fill(110, 109, 106);
		triangle(mountains[i].pos_x + 145, mountains[i].pos_peak - 50, mountains[i].pos_x + 50, mountains[i].pos_y, mountains[i].pos_x + 280, mountains[i].pos_y); // triangle(peakx,y, leftx,y, rightx,y)
	};

	// Draw trees.
	for (var i = 0; i < trees_x.length; i++) {
		fill(64, 36, 8);
		rect(trees_x[i], treePos_y, 36, 145);

		fill(22, 99, 13);

		triangle(trees_x[i] - 40, treePos_y + 50, trees_x[i] + 76, treePos_y + 50, trees_x[i] + 18, treePos_y - 60);//lowest leaves triangle (leftx,y, rightx,y, topx,y)
		triangle(trees_x[i] - 32, treePos_y, trees_x[i] + 68, treePos_y, trees_x[i] + 18, treePos_y - 120); //mid leaves triangle (leftx,y, rightx,y, topx,y)
		triangle(trees_x[i] - 20, treePos_y - 50, trees_x[i] + 18 + 20 + 18, treePos_y - 50, trees_x[i] + 18, treePos_y - 120);//top leaves triangle (leftx,y, rightx,y, topx,y)
	};

	// Draw canyons
	for (var i = 0; i < canyons.length; i++) {
		fill(100, 155, 255);
		rect(canyons[i].x_pos, floorPos_y, canyons[i].width, 150);
		fill(166, 139, 85);
		rect(canyons[i].x_pos - 10, floorPos_y - 20, canyons[i].width - 90, 170);
		rect(canyons[i].x_pos + canyons[i].width, floorPos_y - 20, canyons[i].width - 90, 170);

	};
	// Draw collectable items
	for (var i = 0; i < collectables.length; i++) {
		// coin edges 
	fill(250, 166, 30);
	ellipse(collectables[i].x_pos, collectables[i].y_pos, collectables[i].size * 1.1);
	// coin core
	fill(255, 225, 56);
	ellipse(collectables[i].x_pos, collectables[i].y_pos, collectables[i].size);
	//text
	fill(250, 166, 30);
	textSize(collectables[i].size);
	text('G', collectables[i].x_pos - collectables[i].size/2.5, collectables[i].y_pos + collectables[i].size/3);
	};

	//reverse translation so we have illusion of movement
	pop();
	// Draw the game character - this must be last
	//Limbs
	stroke(143, 51, 20);
	strokeWeight(5);
	//Arms
	line(gameChar_x - gamechar_offset_x, gameChar_y - gamechar_offset_y, gameChar_x + gamechar_offset_x, gameChar_y - gamechar_offset_y);
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
	
	//////// Game character logic ///////
	// Logic to move

	if (isLeft) {
		if (gameChar_x > width * 0.2) {
			gameChar_x -= 5;
		}
		else {
			scrollPos += 5;
		}
	}

	if (isRight) {
		if (gameChar_x < width * 0.8) {
			gameChar_x += 5;
		}
		else {
			scrollPos -= 5; // negative for moving against the background
		}

	}
}

function keyPressed() {

	if (key == 'A' || keyCode == 37) {
		isLeft = true;
	}

	if (key == 'D' || keyCode == 39) {
		isRight = true;
	}

}

function keyReleased() {
	if (key == 'A' || keyCode == 37) {
		isLeft = false;
	}

	if (key == 'D' || keyCode == 39) {
		isRight = false;
	}
}
