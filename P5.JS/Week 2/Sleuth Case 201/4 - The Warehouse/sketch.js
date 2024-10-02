/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 9737215
CaseNum: 201-3-49515775-9737215

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. 
Lying amongst piles of fish carcasses you find the body of Judge Hopper. 
Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


*/

var img;

function preload() {
    img = loadImage('scene.png');
}

function setup() {
    createCanvas(img.width, img.height);
}

function draw() {

    image(img, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(744, 197);
    vertex(675, 173);
    vertex(640, 188);
    vertex(577, 142);
    vertex(563, 100);
    vertex(526, 114);
    vertex(630, 234);
    vertex(402, 433);
    vertex(500, 520);
    vertex(551, 463);
    vertex(573, 475);
    vertex(652, 370);
    vertex(699, 338);
    vertex(732, 381);
    vertex(815, 356);
    vertex(786, 324);
    vertex(773,347);
    vertex(741,355);
    vertex(750,307);
    vertex(755,235);
    vertex(744, 197);

    endShape();
}
