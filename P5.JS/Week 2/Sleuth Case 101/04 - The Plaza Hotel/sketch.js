/*

Officer: 9737215
CaseNum: 101-3-42206242-9737215

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Chartreuse filled rectangle with a Blue outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Deep Sky Blue filled
rectangle with a Olive Drab outline around him.

Identify the man reading the newspaper by drawing a Yellow Green filled rectangle
with a Lime outline around him.

Identify the woman with the dog by drawing a Sea Green filled rectangle with a
Turquoise outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload() {
	img = loadImage('img.jpg');
}

function setup() {
	createCanvas(img.width, img.height);
	strokeWeight(2);
}

function draw() {
	image(img, 0, 0);

	//Write your code below here ...

	//change stroke to Blue
	stroke(0, 0, 255);
	//change fill to Chartreuse
	fill(127, 255, 0);
	//draw rect around Anna
	rect(290, 180, 277, 570);

	//change stroke to OliveDrab
	stroke(107, 142, 35);
	//change fill to DeepSkyBlue
	fill(0, 191, 255);
	//draw rect around monocle man smoking cigar
	rect(1358, 380, 183, 245);

	//change stroke to Lime
	stroke(0, 255, 0);
	//change fill to YellowGreen
	fill(154, 205, 50);
	//draw rect around newspaper man
	rect(657, 280, 173, 340);

	//change stroke to Turquoise
	stroke(64, 224, 208);
	//change fill to SeaGreen
	fill(46, 139, 87);
	//draw rect around both the dog & dog woman
	rect(10, 174, 186, 410);
}
