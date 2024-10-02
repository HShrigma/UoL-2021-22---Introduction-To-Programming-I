/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup() {
	createCanvas(400, 600);
}

function draw() {
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...

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


	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
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

	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...

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


	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...

	
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

	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...

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

	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...

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
