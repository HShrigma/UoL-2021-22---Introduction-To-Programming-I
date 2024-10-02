/*

Officer: 9737215
CaseNum: 501-1-79801147-9737215

Case 501 - Max Von Neuman - stage 2

Madame McCarthy says that to summon Max Von Neuman a different approach is needed.
Follow her advice below.

How young Max loved to march with his toy soldiers.
To speak to Max beyond the grave you must place a toy soldier in each of the dashed circles.
Use the image() and the soldier variable command to place each soldier in its position.
You will need to use a separate for loop for each of the diagonal lines.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, soldier;

function preload() {
    backgroundImg = loadImage("background.jpg");
    soldier = loadImage("Soldier.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);

    imageMode(CENTER);
}

function draw() {
    // add your for loop below
    for (let i = 0; i < 11;i++){
        image(soldier, 380 + i*37, 230 + i*27);
      }
      for (let i = 0; i < 10;i++){
        image(soldier, 530 + i*30, 520 - i*32);
      }
}