/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;

var cloud;

function setup() {
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;

	treePos_x = width / 2 - 170;
	treePos_y = height / 2;

	canyon = { x_pos: 50, width: 100 };

	collectable = { x_pos: 350, y_pos: 300, size: 50};

	mountain = {
		pos_x: 190,
		pos_y: floorPos_y,
		pos_peak: 150
	};

	cloud = {
		pos_x: 80,
		pos_y: 60,
		width: 100,
		height: 50
	};
}

function draw() {

	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground

	//cloud
	fill(201, 200, 195);
	ellipse(cloud.pos_x + 5, cloud.pos_y + 5, cloud.width, cloud.height);
	ellipse(cloud.pos_x + 25, cloud.pos_y + 35, cloud.width, cloud.height);
	ellipse(cloud.pos_x + 85, cloud.pos_y - 5, cloud.width + 50, cloud.height + 50);
	fill(255, 255, 255);
	ellipse(cloud.pos_x, cloud.pos_y, cloud.width, cloud.height);
	ellipse(cloud.pos_x + 20, cloud.pos_y + 30, cloud.width, cloud.height);
	ellipse(cloud.pos_x + 80, cloud.pos_y - 10, cloud.width + 50, cloud.height + 50);

	//mountain
	//back mountains
	fill(77, 76, 75);
	triangle(mountain.pos_x + 100, mountain.pos_peak, mountain.pos_x, mountain.pos_y, mountain.pos_x + 200, mountain.pos_y); // triangle(peakx,y, leftx,y, rightx,y)
	triangle(mountain.pos_x + 190, mountain.pos_peak, mountain.pos_x + 50, mountain.pos_y, mountain.pos_x + 320, mountain.pos_y); // triangle(peakx,y, leftx,y, rightx,y)
	//front mountain
	fill(110, 109, 106);
	triangle(mountain.pos_x + 145, mountain.pos_peak - 50, mountain.pos_x + 50, mountain.pos_y, mountain.pos_x + 280, mountain.pos_y); // triangle(peakx,y, leftx,y, rightx,y)

	//tree
	fill(64, 36, 8);
	rect(treePos_x, treePos_y, 36, 145);

	fill(22, 99, 13);

	triangle(treePos_x - 40, treePos_y + 50, treePos_x + 76, treePos_y + 50, treePos_x + 18, treePos_y - 60);//lowest leaves triangle (leftx,y, rightx,y, topx,y)
	triangle(treePos_x - 32, treePos_y, treePos_x + 68, treePos_y, treePos_x + 18, treePos_y - 120); //mid leaves triangle (leftx,y, rightx,y, topx,y)
	triangle(treePos_x - 20, treePos_y - 50, treePos_x + 18 + 20 + 18, treePos_y - 50, treePos_x + 18, treePos_y - 120);//top leaves triangle (leftx,y, rightx,y, topx,y)

	//canyon
	fill(100, 155, 255);
	rect(canyon.x_pos, floorPos_y, canyon.width, 150);
	fill(166, 139, 85);
	rect(canyon.x_pos - 10, floorPos_y - 20, canyon.width - 90, 170);
	rect(canyon.x_pos + canyon.width, floorPos_y - 20, canyon.width - 90, 170);

	//collectable
	// coin edges 
	fill(250, 166, 30);
	ellipse(collectable.x_pos, collectable.y_pos, collectable.size * 1.1);
	// coin core
	fill(255, 225, 56);
	ellipse(collectable.x_pos, collectable.y_pos, collectable.size);
	//text
	fill(250, 166, 30);
	textSize(collectable.size);
	text('G', collectable.x_pos - collectable.size/2.5, collectable.y_pos + collectable.size/3);
	
	//Game Character
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

function mousePressed() {
	gameChar_x = mouseX;
	gameChar_y = mouseY;
}
