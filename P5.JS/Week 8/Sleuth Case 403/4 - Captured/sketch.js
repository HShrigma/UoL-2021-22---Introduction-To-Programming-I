/*

Officer: 9737215
CaseNum: 403-3-87150789-9737215

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Meyers Way.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 121 meters from Smalltalk Speakeasy then alert local police by drawing a DarkTurquoise circle around it with a radius of 121 pixels.
- if Shiffman is in Gates Bank then the neighbourhood watch must be notified by drawing a Yellow rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a DarkGoldenrod rectangle covering the area between
 Reynolds Street, 
Ada Avenue, Meyers Way and Romero Avenue.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()

*/

var img;

function preload() {
  img = loadImage('map.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  // draw the image
  image(img, 0, 0);

  //Write your code below here ...
  console.log(mouseX + '\n' + mouseY);
  // Smalltalk:
  // Ellipse(DarkTurouise)
  // X:1950
  // Y:545
  if (dist(mouseX, mouseY, 1950, 545) < 121) {
    fill(0, 206, 209);
    ellipse(1950, 545, 242);
  }
  // Gates Bank:
  // Rect(yellow)
  // X:1410,1508
  // Y:680,775
  else if (mouseX > 1410 && mouseX < 1508 && mouseY > 680 && mouseY < 775) {
    fill(255, 255, 0);
    rect(1410, 680, 1508 - 1410, 775 - 680);
  }
  //X:513,752
  //Y:210,380
  //Rect(DarkGoldenRed)
  else {
    fill(184, 134, 11);
    rect(514, 210, 752 - 513, 380 - 210);
  }

  // finally, draw Shiffman's position
  strokeWeight(2);
  stroke(255);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);
}
