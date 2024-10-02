function setup() {
	//create a large square canvas
	createCanvas(800, 800);
}

function draw() {

	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the red rectangle 
	rect(150, 0, 600, 600);

	//set fill to white
	fill(255, 255, 255, 255);

	//2 identical white rectangles on the side
	rect(-12, 0, 162, 300);
	rect(-12, 300, 162, 300);

	//set fill to blue
	fill(66, 135, 245, 255);

	//draw small blue square
	rect(-12, 600, 162, 150);

	//set fill back to white
	fill(255, 255, 255, 255);

	//draw long rectangle on the bottom
	rect(150, 600, 525, 150);

	//draw small while rectangle on the right corner
	rect(675, 600, 75, 75);

	//set fill to yellow
	fill(244, 255, 171);

	//draw yellow rectangle on the right corner
	rect(675, 675, 75, 75);
}