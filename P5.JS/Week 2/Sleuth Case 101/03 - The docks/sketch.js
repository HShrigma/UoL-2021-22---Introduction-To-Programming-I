/*

Officer: 9737215
CaseNum: 101-2-92686542-9737215

Case 101 - The Case of Anna Lovelace
Stage 3 - The Docks

You’ve followed Anna down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Anna by drawing a Blue filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Deep Sky Blue filled
rectangle around him.

Identify the man in the striped top by drawing a Olive filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload() {
	img = loadImage('img.jpg');
}

function setup() {
	createCanvas(img.width, img.height);
	noStroke();
}

function draw() {
	image(img, 0, 0);

	//Write your code below here ...
	//fill Blue
	fill(0, 0, 255);
	//draw rectangle around Anna
	rect(705, 345, 208, 435);
	//fill DeepSkyBlue
	fill(0, 191, 255);
	//draw rectangle around fishing man
	rect(522, 155, 150, 159);
	//fill Olive
	fill(128, 128, 0);
	//draw rectangle around striped top man
	rect(867, 148, 55, 135);

}
