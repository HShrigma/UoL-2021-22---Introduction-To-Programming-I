function setup() {
	createCanvas(800, 600);
}



function draw() {
	noStroke();
	fill(0, 0, 0);
//	ellipse(mouseX, mouseY, 20, 20);
}

function mouseDragged(){
	ellipse(mouseX, mouseY, 20, 20);
}