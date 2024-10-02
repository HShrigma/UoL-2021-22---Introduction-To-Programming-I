/*

Officer: 9737215
CaseNum: 303-3-23989936-9737215

Case 303 - The Case of the Crooked Attorney
Stage 4 - The Courthouse

Torvalds has his final safe in his courthouse chambers. Luckily there is a court case proceeding.
You can sneak into his chambers whilst he makes his closing statement.

Crack the safe by doing the following:

	When the mouse button is pressed:
	- Use the 'map' function to scale mouseY to values ranging from 2 to 14.
	- Assign the output to cryptic_vault_combination_0

	Whilst the mouse is moving:
	- Use the 'random' function to produce random values ranging from 1 to 8.
	- Assign the output to cryptic_vault_combination_1

	When any key is released:
	- Make cryptic_vault_combination_2 equal to the value of 'key'

	When the mouse button is pressed:
	- Use the 'map' function to scale mouseY to values ranging from 9 to 74.
	- Assign the output to cryptic_vault_combination_3

	Whilst the mouse is moving:
	- Use the 'map' function to scale mouseX to values ranging from 11 to 75.
	- Assign the output to cryptic_vault_combination_4

	Whilst the mouse is moving:
	- Use the 'map' function to scale mouseY to values ranging from 19 to 79.
	- Assign the output to cryptic_vault_combination_5



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- key, keyCode
	- random
	- map

*/

//declare the variables

var cryptic_vault_combination_0;
var cryptic_vault_combination_1;
var cryptic_vault_combination_2;
var cryptic_vault_combination_3;
var cryptic_vault_combination_4;
var cryptic_vault_combination_5;


function preload() {
	//IMAGES WILL BE LOADED HERE

}

function setup() {
	createCanvas(512, 512);

	//initialise the variables
	cryptic_vault_combination_0 = 0;
	cryptic_vault_combination_1 = "";
	cryptic_vault_combination_2 = "";
	cryptic_vault_combination_3 = 0;
	cryptic_vault_combination_4 = 0;
	cryptic_vault_combination_5 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function mousePressed() {
	cryptic_vault_combination_0 = map(mouseY, 512, 512, 2, 14);
	cryptic_vault_combination_3 = map(mouseY, 512, 512, 9, 74);
}
// When the mouse button is pressed:
// 	- Use the 'map' function to scale mouseY to values ranging from 2 to 14.
// 	- Assign the output to cryptic_vault_combination_0

// 	When the mouse button is pressed:
// 	- Use the 'map' function to scale mouseY to values ranging from 9 to 74.
// 	- Assign the output to cryptic_vault_combination_3
function keyReleased() {
	cryptic_vault_combination_2 = key;
}
// 	When any key is released:
// 	- Make cryptic_vault_combination_2 equal to the value of 'key'
function mouseMoved() {
	cryptic_vault_combination_1 = random(1, 8);
	cryptic_vault_combination_4 = map(mouseX, 512, 512, 11, 75);
	cryptic_vault_combination_5 = map(mouseY, 512, 512, 19, 79);
}
// 	Whilst the mouse is moving:
// 	- Use the 'random' function to produce random values ranging from 1 to 8.
// 	- Assign the output to cryptic_vault_combination_1

// 	Whilst the mouse is moving:
// 	- Use the 'map' function to scale mouseX to values ranging from 11 to 75.
// 	- Assign the output to cryptic_vault_combination_4

// 	Whilst the mouse is moving:
// 	- Use the 'map' function to scale mouseY to values ranging from 19 to 79.
// 	- Assign the output to cryptic_vault_combination_5

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw() {

	//Draw the safe door
	background(70);
	noStroke();
	fill(29, 110, 6);
	rect(26, 26, width - 52, width - 52);

	//Draw the combination dial
	push();
	translate(256, 180);
	drawDial(170, cryptic_vault_combination_0, 20);
	pop();

	//Draw the spinners
	push();
	translate(206, 280);
	drawSpinner(3, cryptic_vault_combination_1);
	pop();

	push();
	translate(306, 280);
	drawSpinner(3, cryptic_vault_combination_2);
	pop();

	//Draw the levers
	push();
	translate(125, 356);
	drawLever(cryptic_vault_combination_3);
	pop();

	push();
	translate(250, 356);
	drawLever(cryptic_vault_combination_4);
	pop();

	push();
	translate(375, 356);
	drawLever(cryptic_vault_combination_5);
	pop();

}

function drawDial(diameter, num, maxNum) {
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255, 255, 200);
	ellipse(0, 0, diameter, diameter);
	fill(100);
	noStroke();
	ellipse(0, 0, diameter * 0.66, diameter * 0.66);
	fill(150, 0, 0);
	triangle(
		-p * 0.4, -r - p,
		p * 0.4, -r - p,
		0, -r - p / 5
	);

	noStroke();

	push();
	var inc = 360 / maxNum;

	rotate(radians(-num * inc));
	for (var i = 0; i < maxNum; i++) {
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0, -r * 0.66, 0, -(r - 10));
		noStroke();
		fill(0);
		text(i, 0, -(r - 10));
		pop();
	}

	pop();
}

function drawLever(rot) {
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10, 0, 20, 100);
	ellipse(0, 0, 50, 50);
	ellipse(0, 100, 35, 35);
	pop();
}

function drawSpinner(numSpinners, val) {
	var sw = 20;
	var ow = (sw + 5) * numSpinners + 5;
	stroke(0);
	fill(100);
	rect(-ow / 2, 0, ow, 35);
	if (typeof (val) == "number") {
		val = floor(val).toString(); //convert to string
	}
	var d = numSpinners - val.length;

	for (var d = numSpinners - val.length; d > 0; d--) {
		val = "-" + val;
	}

	for (var i = 0; i < numSpinners; i++) {
		stroke(0);
		fill(255, 255, 200);
		rect(-ow / 2 + i * (sw + 5) + 5, 5, 20, 25);
		fill(0);
		noStroke();
		text(val[i], -ow / 2 + sw / 2 + i * (sw + 5), 25);
	}

}
