/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup() {
	createCanvas(1024, 576);
}

function draw() {
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here
	fill(201, 200, 195);
	ellipse(85, 65, 100, 50);
	ellipse(105, 95, 100, 50);
	ellipse(165, 55, 150, 100);
	fill(255, 255, 255);
	ellipse(80, 60, 100, 50);
	ellipse(100, 90, 100, 50);
	ellipse(160, 50, 150, 100);

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here
	fill(77, 76, 75);
	triangle(500, 150, 400, 432, 600, 432);
	triangle(650, 150, 550, 432, 730, 432);
	fill(110, 109, 106);
	triangle(570, 100, 450, 432, 680, 432);

	noStroke();
	fill(255);
	text("mountain", 500, 256);
	//3. a tree
	//... add your code here
	fill(64, 36, 8);
	rect(830, 352, 36, 80);

	fill(22, 99, 13);

	triangle(790, 382, 910, 382, 848, 330);
	triangle(800, 362, 900, 362, 848, 300);
	triangle(810, 342, 890, 342, 848, 280);

	noStroke();
	fill(25);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here
	fill(135, 93, 51);
	beginShape();
	vertex(0, 432);
	vertex(140, 432);
	vertex(110, 400);
	vertex(90, 370);
	vertex(90, 340);
	vertex(100, 310);
	vertex(120, 280);
	vertex(150, 250);
	vertex(180, 220);
	vertex(0, 220);
	endShape();
	fill(0, 155, 0);
	rect(0, 215, 180, 5);
	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
	fill(168, 29, 61); //dark ruby
	triangle(400, 400, 380, 380, 400, 380);//l-triag low
	fill(237, 102, 133); // light ruby
	triangle(410,365,400,380,420,380); //r-triag high
	fill(214, 58, 94); // light ruby alt
	triangle(380,380,400,380, 390,365); //l-triag high
	fill(255, 54, 100); // bright ruby
	triangle(400, 400, 420, 380, 400, 380);//r-triag low
	triangle(390,365,410,365,400, 380); //m-triag high


	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
