/*

Officer: 9737215
CaseNum: 501-3-89771872-9737215

Case 501 - John Von Neuman - stage 4

This is our last chance to catch that killer kid.
Let's hope that John Von Neuman can identify the killer.
To speak to him follow Madame McCarthy’s advice below.

John was ever the keen chess player. Many an hour was spent considering his next move.
To speak to John beyond the grave you must place a chess piece in each of the dashed circles.
Use the image() and the itemImage variable command to place the pieces in their positions.
Do this by using two for loops in a nested pattern.
You will need to use some conditional statements in order to position each row to match the pattern.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()
 * if()

*/

var backgroundImg, itemImage;

function preload() {
    backgroundImg = loadImage("background.jpg");
    itemImage = loadImage("Piece.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);
    imageMode(CENTER);
}

function draw() {
    // add your for loop below
    var startPosX = 864;  
    for(var i = 0; i < 5; i++){
        if(i != 0){
            startPosX -= 73;
        }
        for(var j = 0; j < 5; j++){
            
            image(itemImage,startPosX + j*73, 395 + i*66 );
        }
    }
}
