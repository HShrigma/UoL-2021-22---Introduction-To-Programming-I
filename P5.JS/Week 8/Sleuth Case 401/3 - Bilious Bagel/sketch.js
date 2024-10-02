/*

Officer: 9737215
CaseNum: 401-2-67989788-9737215

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If either novichok dips below 0.54, botulinium dips below 0.56, or perhaps warfarin goes above 0.27, decrement chalk by 0.01
	- If either cyanide goes above 0.26, strychnine dips below 0.42, or perhaps formaldehyde dips below 0.47, increase chalk by 0.02
	- When strychnine dips below 0.34, or on the other hand, warfarin dips below 0.55 and botulinium goes above 0.31, try decreasing betaBlocker by 0.05
	- When novichok goes above 0.61, or on the other hand, cyanide goes above 0.33 and formaldehyde dips below 0.4, increment betaBlocker by 0.02
	- When botulinium goes above 0.5 and cyanide goes above 0.37, decrease ethanol by 0.02
	- When formaldehyde goes above 0.64 and novichok goes above 0.48, raise ethanol by 0.03
	- When warfarin dips below 0.27 and formaldehyde dips below 0.41, try decreasing HydrochloricAcid by 0.04
	- If novichok goes above 0.67 and strychnine goes above 0.73, increase HydrochloricAcid by 0.05


Your conditional statements should:

consider the following poisons:

	- cyanide
	- botulinium
	- novichok
	- strychnine
	- warfarin
	- formaldehyde


and modify the following antidotes:

	- chalk
	- betaBlocker
	- ethanol
	- HydrochloricAcid


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var cyanide;
var botulinium;
var novichok;
var strychnine;
var warfarin;
var formaldehyde;


//Declare the antidote variables
var chalk;
var betaBlocker;
var ethanol;
var HydrochloricAcid;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	cyanide = 0.5;
	botulinium = 0.5;
	novichok = 0.5;
	strychnine = 0.5;
	warfarin = 0.5;
	formaldehyde = 0.5;
	chalk = 0.5;
	betaBlocker = 0.5;
	ethanol = 0.5;
	HydrochloricAcid = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

	// - If either novichok dips below 0.54, botulinium dips below 0.56, or perhaps warfarin goes above 0.27, decrement chalk by 0.01
	if(novichok < 0.54 || botulinium < 0.56 || warfarin > 0.27){
		chalk -= 0.01;
	}
	// - If either cyanide goes above 0.26, strychnine dips below 0.42, or perhaps formaldehyde dips below 0.47, increase chalk by 0.02
	if(cyanide > 0.26 || strychnine < 0.42 || formaldehyde < 0.47){
		chalk += 0.02;
	}
	// - When strychnine dips below 0.34, or owarfarin dips below 0.55 and botulinium goes above 0.31, try decreasing betaBlocker by 0.05
	if(strychnine < 0.34 || warfarin < 0.55 && botulinium > 0.31){
		betaBlocker -= 0.05;
	}
	// - When novichok goes above 0.61, or on the other hand, cyanide goes above 0.33 and formaldehyde dips below 0.4, increment betaBlocker by 0.02
	if(novichok > 0.61 || cyanide > 0.33 && formaldehyde < 0.4){
		betaBlocker += 0.02;
	}
	// - When botulinium goes above 0.5 and cyanide goes above 0.37, decrease ethanol by 0.02
	if(botulinium > 0.5 && cyanide > 0.37){
		ethanol -= 0.02;
	}
	// - When formaldehyde goes above 0.64 and novichok goes above 0.48, raise ethanol by 0.03
	if(formaldehyde > 0.64 && novichok > 0.48){
		ethanol += 0.03;
	}
	// - When warfarin dips below 0.27 and formaldehyde dips below 0.41, try decreasing HydrochloricAcid by 0.04
	if(warfarin < 0.27 && formaldehyde < 0.41){
		HydrochloricAcid -= 0.04;
	}
	// - If novichok goes above 0.67 and strychnine goes above 0.73, increase HydrochloricAcid by 0.05
	if(novichok > 0.67 && strychnine > 0.73){
		HydrochloricAcid += 0.05;
	}


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	cyanide = nextValue(graphs[0],cyanide);
	botulinium = nextValue(graphs[1],botulinium);
	novichok = nextValue(graphs[2],novichok);
	strychnine = nextValue(graphs[3],strychnine);
	warfarin = nextValue(graphs[4],warfarin);
	formaldehyde = nextValue(graphs[5],formaldehyde);


	chalk = constrain(chalk, 0, 1);
	betaBlocker = constrain(betaBlocker, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	HydrochloricAcid = constrain(HydrochloricAcid, 0, 1);


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

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('cyanide: ' + nf(cyanide,1,2), 20,20);
	fill(colors[1]);
	text('botulinium: ' + nf(botulinium,1,2), 20,40);
	fill(colors[2]);
	text('novichok: ' + nf(novichok,1,2), 20,60);
	fill(colors[3]);
	text('strychnine: ' + nf(strychnine,1,2), 20,80);
	fill(colors[4]);
	text('warfarin: ' + nf(warfarin,1,2), 20,100);
	fill(colors[5]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(chalk,50,'chalk');
	drawBar(betaBlocker,200,'betaBlocker');
	drawBar(ethanol,350,'ethanol');
	drawBar(HydrochloricAcid,500,'HydrochloricAcid');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
