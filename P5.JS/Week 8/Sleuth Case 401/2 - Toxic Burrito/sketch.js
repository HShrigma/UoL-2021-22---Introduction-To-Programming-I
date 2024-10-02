/*

Officer: 9737215
CaseNum: 401-1-51664441-9737215

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When warfarin goes above 0.57 or lead goes above 0.41, reduce charcoal by 0.03
	- If mercury goes above 0.52, increment charcoal by 0.02
	- When mercury dips below 0.37, decrease methylene by 0.03
	- When lead dips below 0.47, raise methylene by 0.05
	- When strychnine goes above 0.48, reduce chalk by 0.04
	- If mercury goes above 0.57, try increasing chalk by 0.02
	- If warfarin goes above 0.55, decrease hydrochloric_acid by 0.02
	- If lead goes above 0.28 or strychnine dips below 0.68, try increasing hydrochloric_acid by 0.04


Your conditional statements should:

consider the following poisons:

	- lead
	- mercury
	- warfarin
	- strychnine


and modify the following antidotes:

	- charcoal
	- methylene
	- chalk
	- hydrochloric_acid


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var lead;
var mercury;
var warfarin;
var strychnine;


//Declare the antidote variables
var charcoal;
var methylene;
var chalk;
var hydrochloric_acid;


//This variable is used for drawing the graph
var graphs;


function setup() {

	createCanvas(800, 600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	lead = 0.5;
	mercury = 0.5;
	warfarin = 0.5;
	strychnine = 0.5;
	charcoal = 0.5;
	methylene = 0.5;
	chalk = 0.5;
	hydrochloric_acid = 0.5;


	//fills the graph with empty values
	graphs = [];

	for (var i = 0; i < 4; i++) {
		graphs.push([]);
		for (var j = 0; j < 512; j++) {
			graphs[i].push(0.5);
		}
	}

}

function draw() {

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	lead = nextValue(graphs[0], lead);
	mercury = nextValue(graphs[1], mercury);
	warfarin = nextValue(graphs[2], warfarin);
	strychnine = nextValue(graphs[3], strychnine);


	charcoal = constrain(charcoal, 0, 1);
	methylene = constrain(methylene, 0, 1);
	chalk = constrain(chalk, 0, 1);
	hydrochloric_acid = constrain(hydrochloric_acid, 0, 1);

	// - When warfarin goes above 0.57 or lead goes above 0.41, reduce charcoal by 0.03
	if(warfarin > 0.57 || lead > 0.41){
		charcoal -= 0.03;
	}
	// - If warfarin goes above 0.55, decrease hydrochloric_acid by 0.02
	if(warfarin > 0.55){
		hydrochloric_acid -= 0.02;
	}
	// - If mercury goes above 0.52, increment charcoal by 0.02
	if(mercury > 0.52){
		charcoal += 0.02;
	}
	// - When mercury dips below 0.37, decrease methylene by 0.03
	if(mercury < 0.37)
	{
		methylene -= 0.03;
	}
	// - If mercury goes above 0.57, try increasing chalk by 0.02
	if(mercury > 0.57){
		chalk += 0.02;
	}
	// - When lead dips below 0.47, raise methylene by 0.05
	if(lead < 0.47)
	{
		methylene += 0.05;
	}
	// - When strychnine goes above 0.48, reduce chalk by 0.04
	if(strychnine > 0.48){
		chalk -= 0.04;
	}
	// - If lead goes above 0.28 or strychnine dips below 0.68, try increasing hydrochloric_acid by 0.04
	if(lead > 0.28 || strychnine < 0.68){
		hydrochloric_acid += 0.04;
	}

	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
		color(255, 0, 0),
		color(0, 255, 0),
		color(0, 0, 255),
		color(255, 0, 255),
		color(255, 255, 0),
		color(0, 255, 255)
	];

	for (var i = 0; i < graphs.length; i++) {
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('lead: ' + nf(lead, 1, 2), 20, 20);
	fill(colors[1]);
	text('mercury: ' + nf(mercury, 1, 2), 20, 40);
	fill(colors[2]);
	text('warfarin: ' + nf(warfarin, 1, 2), 20, 60);
	fill(colors[3]);
	text('strychnine: ' + nf(strychnine, 1, 2), 20, 80);


	//draw the antidotes bar chart
	drawBar(charcoal, 50, 'charcoal');
	drawBar(methylene, 200, 'methylene');
	drawBar(chalk, 350, 'chalk');
	drawBar(hydrochloric_acid, 500, 'hydrochloric_acid');


}

function nextValue(graph, val) {
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03, 0.03);

	val += delta;
	if (val > 1 || val < 0) {
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph) {
	//draws an array as a graph
	beginShape();
	for (var i = 0; i < graph.length; i++) {
		vertex(width * i / 512, height * 0.5 - graph[i] * height / 3)
	}
	endShape();
}


function drawBar(val, x, name) {
	//draws the bars for bar chart
	noStroke();
	fill(0, 100, 100);
	var mh = height * 0.4 - 50;
	rect(x, (height - 50) - val * mh, 100, val * mh);
	fill(255);
	text(name + ": " + val, x, height - 20);
}
