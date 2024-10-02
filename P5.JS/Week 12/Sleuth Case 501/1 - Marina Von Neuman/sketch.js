/*

Officer: 9737215
CaseNum: 501-0-98441627-9737215

Case 501 - Marina Von Neuman - stage 1

Well as cases come, they don’t come any stranger than this one.
We’ve been asked to investigate the brutal murder of the Von Neumann family.
The only problem is that the only witnesses we have are the Von Neumans themselves and they’re all six feet under.
That won’t stop us kid. We’ve employed the services of the mystic Madame McCarthy.

Follow her instructions below to conjure the spirit of young Marina Von Neumann.

  "How young Marina loved to play with her brightly coloured beads.
  How she loved to arrange them in patterns and thread them into necklaces.

  To speak to Marina beyond the grave you must place a bead in each of the dashed circles.
  Use the image() and the beadImage variable command to place each bead in its position.
  You will need to use a for loop."

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, beadImage;

function preload() {
    backgroundImg = loadImage("background.jpg");
    beadImage = loadImage("Bead.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);

    imageMode(CENTER);
}

function draw() {
    // add your for loop below
    for(i = 0; i < 12; i++ ){
        image(beadImage, 425 + i*52, 413 );
    }
}
