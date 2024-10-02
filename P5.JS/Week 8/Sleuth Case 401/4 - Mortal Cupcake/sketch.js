/*

Officer: 9737215
CaseNum: 401-3-37156783-9737215

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When either Deadly_Nightshade goes above 0.57, polonium goes above 0.31, or perhaps strychnine goes above 0.71, try decreasing insulin by 0.01
	- When ricin dips below 0.47, whilst at the same time, arsenic dips below 0.67 or AmanitaMushrooms dips below 0.46, increment insulin by 0.04
	- When AmanitaMushrooms dips below 0.65 and Deadly_Nightshade goes above 0.4, or on the other hand, ricin goes above 0.33, decrease aspirin by 0.03
	- When lead dips below 0.48 and sarin dips below 0.69, or on the other hand, strychnine dips below 0.41 and polonium dips below 0.48, increment aspirin by 0.02
	- When either AmanitaMushrooms goes above 0.68, polonium goes above 0.62, or perhaps arsenic dips below 0.58, decrease paracetamol by 0.05
	- When either strychnine dips below 0.41, lead dips below 0.39, or perhaps sarin goes above 0.37, try increasing paracetamol by 0.03
	- When sarin goes above 0.7, whilst at the same time, arsenic dips below 0.44 or strychnine dips below 0.73, reduce ethanol by 0.05
	- When ricin goes above 0.3, AmanitaMushrooms dips below 0.33, polonium goes above 0.29, and also lead goes above 0.69, increase ethanol by 0.04
	- When lead dips below 0.72 and strychnine goes above 0.44, or on the other hand, AmanitaMushrooms goes above 0.5 or polonium dips below 0.6, decrement chalk by 0.04
	- If either arsenic goes above 0.42, sarin goes above 0.27, Deadly_Nightshade dips below 0.25, or perhaps ricin goes above 0.49, increase chalk by 0.05


Your conditional statements should:

consider the following poisons:

	- polonium
	- strychnine
	- ricin
	- Deadly_Nightshade
	- AmanitaMushrooms
	- lead
	- sarin
	- arsenic


and modify the following antidotes:

	- insulin
	- aspirin
	- paracetamol
	- ethanol
	- chalk


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var polonium;
var strychnine;
var ricin;
var Deadly_Nightshade;
var AmanitaMushrooms;
var lead;
var sarin;
var arsenic;


//Declare the antidote variables
var insulin;
var aspirin;
var paracetamol;
var ethanol;
var chalk;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	polonium = 0.5;
	strychnine = 0.5;
	ricin = 0.5;
	Deadly_Nightshade = 0.5;
	AmanitaMushrooms = 0.5;
	lead = 0.5;
	sarin = 0.5;
	arsenic = 0.5;
	insulin = 0.5;
	aspirin = 0.5;
	paracetamol = 0.5;
	ethanol = 0.5;
	chalk = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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
	// - When either Deadly_Nightshade goes above 0.57, polonium goes above 0.31, or perhaps strychnine goes above 0.71, try decreasing insulin by 0.01
	if(Deadly_Nightshade > 0.57 || polonium > 0.31 || strychnine > 0.71){
		insulin -= 0.01;
	}
	// - When ricin dips below 0.47, whilst at the same time, arsenic dips below 0.67 or AmanitaMushrooms dips below 0.46, increment insulin by 0.04
	if(ricin < 0.47 && (arsenic < 0.67|| AmanitaMushrooms < 0.46)){
		insulin += 0.04;
	}
	// - When AmanitaMushrooms dips below 0.65 and Deadly_Nightshade goes above 0.4, or on the other hand, ricin goes above 0.33, decrease aspirin by 0.03
	if(AmanitaMushrooms < 0.65 && Deadly_Nightshade > 0.4 || ricin > 0.33) {
		aspirin -= 0.03;
	}
	// - When lead dips below 0.48 and sarin dips below 0.69, or on the other hand, strychnine dips below 0.41 and polonium dips below 0.48, increment aspirin by 0.02
	if(lead < 0.48 && sarin < 0.69 || strychnine < 0.41 && polonium < 0.48){
		aspirin += 0.02;
	}
	// - When either AmanitaMushrooms goes above 0.68, polonium goes above 0.62, or perhaps arsenic dips below 0.58, decrease paracetamol by 0.05
	if(AmanitaMushrooms > 0.68 || polonium > 0.62 || arsenic < 0.58){
		paracetamol -= 0.05;
	}
	// - When either strychnine dips below 0.41, lead dips below 0.39, or perhaps sarin goes above 0.37, try increasing paracetamol by 0.03
	if(strychnine < 0.41 || lead < 0.39 || sarin > 0.37){
		paracetamol += 0.03;
	}
	// - When sarin goes above 0.7, whilst at the same time, arsenic dips below 0.44 or strychnine dips below 0.73, reduce ethanol by 0.05
	if(sarin > 0.7 && (arsenic < 0.44 || strychnine < 0.73)){
		ethanol -= 0.05;
	}
	// - When ricin goes above 0.3, AmanitaMushrooms dips below 0.33, polonium goes above 0.29, and also lead goes above 0.69, increase ethanol by 0.04
	if(ricin > 0.3 && AmanitaMushrooms < 0.33 && polonium > 0.29 && lead > 0.69){
		ethanol += 0.04;
	}
	// - When lead dips below 0.72 and strychnine goes above 0.44, or on the other hand, AmanitaMushrooms goes above 0.5 or polonium dips below 0.6, decrement chalk by 0.04
	if(lead < 0.72 && strychnine > 0.44 || AmanitaMushrooms > 0.5 || polonium < 0.6){
		chalk -= 0.04;
	}
	// - If either arsenic goes above 0.42, sarin goes above 0.27, Deadly_Nightshade dips below 0.25, or perhaps ricin goes above 0.49, increase chalk by 0.05
	if(arsenic > 0.42 || sarin > 0.27 || Deadly_Nightshade < 0.25 || ricin > 0.49){
		chalk += 0.05;
	}




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	polonium = nextValue(graphs[0],polonium);
	strychnine = nextValue(graphs[1],strychnine);
	ricin = nextValue(graphs[2],ricin);
	Deadly_Nightshade = nextValue(graphs[3],Deadly_Nightshade);
	AmanitaMushrooms = nextValue(graphs[4],AmanitaMushrooms);
	lead = nextValue(graphs[5],lead);
	sarin = nextValue(graphs[6],sarin);
	arsenic = nextValue(graphs[7],arsenic);


	insulin = constrain(insulin, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	chalk = constrain(chalk, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('polonium: ' + nf(polonium,1,2), 20,20);
	fill(colors[1]);
	text('strychnine: ' + nf(strychnine,1,2), 20,40);
	fill(colors[2]);
	text('ricin: ' + nf(ricin,1,2), 20,60);
	fill(colors[3]);
	text('Deadly_Nightshade: ' + nf(Deadly_Nightshade,1,2), 20,80);
	fill(colors[4]);
	text('AmanitaMushrooms: ' + nf(AmanitaMushrooms,1,2), 20,100);
	fill(colors[5]);
	text('lead: ' + nf(lead,1,2), 20,120);
	fill(colors[6]);
	text('sarin: ' + nf(sarin,1,2), 20,140);
	fill(colors[7]);
	text('arsenic: ' + nf(arsenic,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(insulin,50,'insulin');
	drawBar(aspirin,200,'aspirin');
	drawBar(paracetamol,350,'paracetamol');
	drawBar(ethanol,500,'ethanol');
	drawBar(chalk,650,'chalk');


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
