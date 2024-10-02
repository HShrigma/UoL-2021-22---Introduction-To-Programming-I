const canopyOffset = 20;
var groundHeight;
var mountain1;
var mountain2;

var tree;
var forestRandValuesX;
var forestRandValuesY;

var starsRandValuesX;
var starsRandValuesY
var moon;
var sun;
var darkness;

var cloud;

function setup() {
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;
	//NEW: add random x and y values for our little forest
	forestRandValuesX = [random(50, 150), random(150, 250), random(250, 350), random(350, 450), random(450, 500)];
	forestRandValuesY = [random(15, -5), random(15, -5), random(15, -5), random(15, -5), random(15, -5)];
	//NEW: make random values for stars
	starsRandValuesX = [random(0, 350), random(0, 350), random(0, 350), random(0, 350),random(0, 350)];
	starsRandValuesY = [random(0, groundHeight - 55), random(0, groundHeight - 55), random(0, groundHeight - 55), random(0, groundHeight - 55),random(0, groundHeight - 55)];
	//NEW: Make drifting clouds
	cloud = {
		x: 300,
		y: 100,
		offsetX: random(200, 300),
		offsetY: random(100,50),
		width: 175,
		height: 75,
		offsetScale: random(25,80)
	}
	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight + 20,
		trunkWidth: 40,
		trunkHeight: 150,
		canopyWidth: 120,
		canopyHeight: 100
	};

	//initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80
	};

	//TASK: intialise a moon object with an extra property for brightness
	moon = {
		x: 700,
		y: 70,
		diameter: 80,
		brightness: 0
	}

	//set the initial darkness
	darkness = 0;
}



function draw() {
	//TASK: update the values for the moons brightness, the sun's position and the darkness.
	//You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) 
	//or you can just change the values gradually over time.
	//NEW: make cloud x drift
	cloud.x+= .25;
	console.log('hello console');
	sun.y++;
	darkness = min(darkness + 1, 210);
	moon.brightness++;

	//draw the sky
	background(150, 200, 255);
	noStroke();

	//draw the sun
	fill(255, 255, 0);
	ellipse(sun.x, sun.y, sun.diameter);


	//draw the ground and make it green
	fill(70, 200, 0);
	rect(0, groundHeight, width, height - groundHeight);

	//NEW: Draw the clouds

	fill(200, 200, 200);
	ellipse(cloud.x, cloud.y, cloud.width, cloud.height);
	ellipse(cloud.x + cloud.offsetX/2, cloud.y + cloud.offsetY/2, cloud.width + cloud.offsetScale,cloud.height + cloud.offsetScale);
	ellipse(cloud.x + cloud.offsetX, cloud.y + cloud.offsetY, cloud.width + cloud.offsetScale/2,cloud.height + cloud.offsetScale/2);
	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);

	//TASK: You can draw the tree yourself

	fill(54, 28, 11);
	rect(tree.x, tree.y, tree.trunkWidth, tree.trunkHeight);
	rect(tree.x + forestRandValuesX[0], tree.y + forestRandValuesY[0], tree.trunkWidth, tree.trunkHeight);
	rect(tree.x + forestRandValuesX[1], tree.y + forestRandValuesY[1], tree.trunkWidth, tree.trunkHeight);
	rect(tree.x + forestRandValuesX[2], tree.y + forestRandValuesY[2], tree.trunkWidth, tree.trunkHeight);
	rect(tree.x + forestRandValuesX[3], tree.y + forestRandValuesY[3], tree.trunkWidth, tree.trunkHeight);
	rect(tree.x + forestRandValuesX[4], tree.y + forestRandValuesY[4], tree.trunkWidth, tree.trunkHeight);

	fill(48, 171, 14);
	ellipse(tree.x + canopyOffset, tree.y, tree.canopyWidth, tree.canopyHeight);
	ellipse(tree.x + canopyOffset + forestRandValuesX[0], tree.y + forestRandValuesY[0], tree.canopyWidth, tree.canopyHeight);
	ellipse(tree.x + canopyOffset + forestRandValuesX[1], tree.y + forestRandValuesY[1], tree.canopyWidth, tree.canopyHeight);
	ellipse(tree.x + canopyOffset + forestRandValuesX[2], tree.y + forestRandValuesY[2], tree.canopyWidth, tree.canopyHeight);
	ellipse(tree.x + canopyOffset + forestRandValuesX[3], tree.y + forestRandValuesY[3], tree.canopyWidth, tree.canopyHeight);
	ellipse(tree.x + canopyOffset + forestRandValuesX[4], tree.y + forestRandValuesY[4], tree.canopyWidth, tree.canopyHeight);

	//TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
	fill(0, 0, 0, darkness);
	rect(0, 0, width, height);
	//Use the alpha value of fill to determine how dark to make it

	//TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour
	fill(222, 222, 222, moon.brightness);
	ellipse(moon.x, moon.y, moon.diameter);
	//make drawing stars loop	
	for (let step = 0; step < 5; step++) {

		beginShape();
			
			vertex(starsRandValuesX[step], starsRandValuesY[step]);
			vertex(starsRandValuesX[step] + 10, starsRandValuesY[step] + 10);
			vertex(starsRandValuesX[step] + 30, starsRandValuesY[step] + 10);
			vertex(starsRandValuesX[step] + 10, starsRandValuesY[step] + 20);
			vertex(starsRandValuesX[step] + 30, starsRandValuesY[step] + 40);
			vertex(starsRandValuesX[step], starsRandValuesY[step] + 30);
			vertex(starsRandValuesX[step] - 30, starsRandValuesY[step] + 40);
			vertex(starsRandValuesX[step] - 10, starsRandValuesY[step] + 20);
			vertex(starsRandValuesX[step] - 30, starsRandValuesY[step] + 10);
			vertex(starsRandValuesX[step] - 10, starsRandValuesY[step] + 10);
			vertex(starsRandValuesX[step], starsRandValuesY[step]);
		
		endShape();
	}

}