/*

Officer: 9737215
CaseNum: 401-0-27336775-9737215

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When DeadlyNightshade goes above 0.28, try decreasing Beta_Blocker by 0.05
	- When ricin dips below 0.38, raise Beta_Blocker by 0.02
	- When ricin dips below 0.51, decrement glucagon by 0.01
	- If DeadlyNightshade dips below 0.27, increase glucagon by 0.03
	- When ricin dips below 0.31, try decreasing methylene by 0.03
	- If DeadlyNightshade goes above 0.38, raise methylene by 0.02


Your conditional statements should:

consider the following poisons:

	- ricin
	- Amanita_Mushrooms
	- DeadlyNightshade


and modify the following antidotes:

	- Beta_Blocker
	- glucagon
	- methylene


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var ricin;
var Amanita_Mushrooms;
var DeadlyNightshade;


//Declare the antidote variables
var Beta_Blocker;
var glucagon;
var methylene;


//This variable is used for drawing the graph
var graphs;


function setup() {

	createCanvas(800, 600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	ricin = 0.5;
	Amanita_Mushrooms = 0.5;
	DeadlyNightshade = 0.5;
	Beta_Blocker = 0.5;
	glucagon = 0.5;
	methylene = 0.5;


	//fills the graph with empty values
	graphs = [];

	for (var i = 0; i < 3; i++) {
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

	ricin = nextValue(graphs[0], ricin);
	Amanita_Mushrooms = nextValue(graphs[1], Amanita_Mushrooms);
	DeadlyNightshade = nextValue(graphs[2], DeadlyNightshade);


	Beta_Blocker = constrain(Beta_Blocker, 0, 1);
	glucagon = constrain(glucagon, 0, 1);
	methylene = constrain(methylene, 0, 1);

	// - When DeadlyNightshade goes above 0.28, try decreasing Beta_Blocker by 0.05
	if (DeadlyNightshade > 0.28) {
		Beta_Blocker -= 0.05;
	}
	// - If DeadlyNightshade dips below 0.27, increase glucagon by 0.03

	if (DeadlyNightshade < 0.27) {
		glucagon += 0.03;
	}
	// - If DeadlyNightshade goes above 0.38, raise methylene by 0.02
	if(DeadlyNightshade > 0.38){
		methylene += 0.02;
	}
	// - When ricin dips below 0.38, raise Beta_Blocker by 0.02
	if (ricin < .38) {
		Beta_Blocker += 0.02;
	}
	// - When ricin dips below 0.51, decrement glucagon by 0.01

	if (ricin < 0.51) {
		glucagon -= 0.01;
	}
	// - When ricin dips below 0.31, try decreasing methylene by 0.03
	if (ricin < 0.31) {
		methylene -= 0.03;
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
	text('ricin: ' + nf(ricin, 1, 2), 20, 20);
	fill(colors[1]);
	text('Amanita_Mushrooms: ' + nf(Amanita_Mushrooms, 1, 2), 20, 40);
	fill(colors[2]);
	text('DeadlyNightshade: ' + nf(DeadlyNightshade, 1, 2), 20, 60);


	//draw the antidotes bar chart
	drawBar(Beta_Blocker, 50, 'Beta_Blocker');
	drawBar(glucagon, 200, 'glucagon');
	drawBar(methylene, 350, 'methylene');


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
