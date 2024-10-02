/*

Officer: 9737215
CaseNum: 101-1-11752637-9737215

Case 101 - The Case of Anna Lovelace
Stage 2 - The Smalltalk Speakeasy

Well well, things have gotten interesting already ! No sooner does Anna step foot
in Console City than she heads straight for Smalltalk’s. Now be careful kid, that
place is a den of iniquity. Find out who she’s meeting and then get out as soon as
you can.

First identify Anna by drawing a rectangle with a Lawn Green outline around her.
She’s the woman in the red dress of course.

That woman with the cigarette and the feathered hat looks very familiar. Let’s identify her too by drawing
a rectangle with a Medium Slate Blue outline around her. Make sure you include her cigarette
and feather too.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

The rectangles should cover the targets as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  stroke() - Use r,g,b values between 0 and 255.

*/

var img;

function preload() {
	img = loadImage('img.jpg');
}

function setup() {
	createCanvas(img.width, img.height);
	noFill();
	strokeWeight(2);
}

function draw() {
	image(img, 0, 0);

	//Write your code below here ...
	stroke(124, 252, 0, 255); //set stroke as LawnGreen
	rect(25, 180, 230, 460);//draw rect for Anna
	stroke(123, 104, 238, 255);//set stroke as MediumSlateBlue
	rect(660, 165, 212, 366);//draw rect around cigarette and feather woman
}
