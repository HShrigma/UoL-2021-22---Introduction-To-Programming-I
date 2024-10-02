function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(204, 214, 188)
	noStroke();
	fill(14, 105, 92, 200);
	beginShape();
	vertex(100,0);
	vertex(600, 580);
	vertex(600, 400);
	vertex(150, 0);
	endShape();
	
	fill(182, 204, 94, 200);

	beginShape();
	vertex(599, 0);
	vertex(0, 1000);
	vertex(0,480);
	vertex(550, 0);
	endShape();
	
	noFill();
	stroke(0);
	strokeWeight(12);
	ellipse(300, 300, 400, 400);
	
	strokeWeight(2);
	fill(255,0,0,100);
	ellipse(250,200, 150,150);
	fill(255,255,80,100);
	ellipse(300,300,100,100);
	fill(178, 94, 204, 100);
	ellipse(400,250, 150,150);
	fill(70, 232, 224, 100);
	ellipse(400,200, 100, 100);
	ellipse(235,400, 150,150);
	strokeWeight(30);
	point(300,300);
	
	strokeWeight(2);
	fill(0,255,0,100);
	ellipse(350,350, 150,150);
	
	strokeWeight(5);

	line(250, 150, 380, 400);
	line(125, 275, 445,425);
	line(110, 250, 420,400);
	line(100, 300, 200, 200);
	line(120, 320, 220, 220);

	strokeWeight(2);

	line(450,200,120,400);
	line(450+20,200+20,120+20,400+20);
	line(450+20+20,200+20+20,120+20+20,400+20+20);
	line(450+20+20,200+20+20+20,120+20+20+20,400+20+20+20);
	line(450,200,120,400);
}