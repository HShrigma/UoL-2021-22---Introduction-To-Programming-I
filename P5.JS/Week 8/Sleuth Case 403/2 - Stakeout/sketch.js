/*

Officer: 9737215
CaseNum: 403-1-86697586-9737215

Case 403 - Stake out - stage 2

I've gotten hold of a hot tip that Shiffman is hiding out at COBOL Theatre.
We've alerted the local precinct but they cannot act unless they know for certain that he's within 121 meters (pixels) of the spot.

Whenever Shiffman (signified by the mouse) is within 121 pixels of COBOL Theatre - draw a LawnGreen ellipse with a radius of 121 around it.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  ellipse()
  dist()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...


    console.log("mouseX: " + mouseX + "\nmouseY: " + mouseY);
    if(dist(mouseX, mouseY, 1093, 782) < 121){
      fill(124,252,0);
      ellipse(1093, 782, 121*2);
    }
    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
