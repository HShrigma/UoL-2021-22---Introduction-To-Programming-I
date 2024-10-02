/*

Officer: 9737215
CaseNum: 403-2-27859383-9737215

Case 403 - Cornered - stage 3


We have Shiffman cornered at Central Station and more help is on the way.
Until our backup arrives the orders are to make sure he stays inside Central Station

Your job is to indicate that Shiffman (signified by the mouse) is indeed within the North - East - South - West bounds of Central Station.
Draw a Maroon rectangle covering Central Station for as long as Shiffman is in it.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
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
    if(mouseX > 465 && mouseX < 630 && mouseY > 700 && mouseY < 820){
      console.log(mouseX +'\n' + mouseY);
      fill(128,0,0);
      rect(465, 700, 630 - 465, 820 - 700);      
    }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
