/*

Officer: 9737215
CaseNum: 303-2-18382599-9737215

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is pressed:
	- Make Secret_locker_val_0 equal to the value of mouseX
	- Use the 'constrain' function to prevent Secret_locker_val_0 from falling below 2 and going above 7

	When the mouse button is pressed:
	- Decrement Secret_locker_val_1 by 3
	- Use the 'max' function to prevent Secret_locker_val_1 from falling below 4

	When the mouse button is pressed:
	- Make Secret_locker_val_2 equal to the value of mouseX
	- Use the 'constrain' function to prevent Secret_locker_val_2 from falling below 1 and going above 14

	When the mouse button is released:
	- Increment Secret_locker_val_3 by 3
	- Use the 'constrain' function to prevent Secret_locker_val_3 from falling below 5 and going above 21

	When the mouse button is pressed:
	- Make Secret_locker_val_4 equal to the value of mouseY
	- Use the 'min' function to prevent Secret_locker_val_4 from going above 73



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var Secret_locker_val_0;
var Secret_locker_val_1;
var Secret_locker_val_2;
var Secret_locker_val_3;
var Secret_locker_val_4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	Secret_locker_val_0 = 0;
	Secret_locker_val_1 = 0;
	Secret_locker_val_2 = 0;
	Secret_locker_val_3 = 0;
	Secret_locker_val_4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
// When the mouse button is pressed:
// 	- Make Secret_locker_val_0 equal to the value of mouseX
// 	- Use the 'constrain' function to prevent Secret_locker_val_0 from falling below 2 and going above 7
function mousePressed(){
	Secret_locker_val_0 = constrain(mouseX, 2, 7);
	Secret_locker_val_1 = max(Secret_locker_val_1 -= 3, 4);
	Secret_locker_val_2 = constrain(mouseX, 1, 14);
	Secret_locker_val_4 = min(mouseY, 73);
}
function mouseReleased(){
	Secret_locker_val_3 = constrain(Secret_locker_val_3 += 3, 5, 21);
}
// 	When the mouse button is pressed:
// 	- Decrement Secret_locker_val_1 by 3
// 	- Use the 'max' function to prevent Secret_locker_val_1 from falling below 4

// 	When the mouse button is pressed:
// 	- Make Secret_locker_val_2 equal to the value of mouseX
// 	- Use the 'constrain' function to prevent Secret_locker_val_2 from falling below 1 and going above 14

// 	When the mouse button is released:
// 	- Increment Secret_locker_val_3 by 3
// 	- Use the 'constrain' function to prevent Secret_locker_val_3 from falling below 5 and going above 21

// 	When the mouse button is pressed:
// 	- Make Secret_locker_val_4 equal to the value of mouseY
// 	- Use the 'min' function to prevent Secret_locker_val_4 from going above 73

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,Secret_locker_val_0, 11);
	pop();

	push();
	translate(120,380);
	drawDial(140,Secret_locker_val_1, 25);
	pop();

	push();
	translate(280,170);
	drawDial(140,Secret_locker_val_2, 20);
	pop();

	push();
	translate(280,380);
	drawDial(140,Secret_locker_val_3, 26);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(Secret_locker_val_4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
