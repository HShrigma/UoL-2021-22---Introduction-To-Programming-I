/*

Officer: 9737215
CaseNum: 202-1-66803711-9737215

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Fire Brick filled text with a Lime Green outline.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(613,386);
	textFont(letterFont);
	textSize(25);
}

function draw()
{
	background(255);

	fill(154,205,50);
	stroke(0,206,209);
	//text("sin", 453,75);
	fill(139,0,0);
	stroke(0,128,0);
	//text("will", 81,127);
	fill(0,0,128);
	stroke(0,100,0);
	//text("I", 466,100);
	fill(0,139,139);
	stroke(128,128,0);
	//text("I", 21,100);
	fill(0,206,209);
	stroke(153,50,204);
	//text("I", 334,153);
	fill(139,0,0);
	stroke(0,255,127);
	//text("much", 226,153);
	fill(64,224,208);
	stroke(0,0,255);
	//text("How", 287,75);
	fill(123,104,238);
	stroke(210,105,30);
	//text("you", 140,75);
	fill(0,0,255);
	stroke(128,0,0);
	//text("on", 63,178);
	fill(255,105,180);
	stroke(0,191,255);
	//text("How", 192,153);
	fill(124,252,0);
	stroke(0,0,139);
	//text("up", 292,100);
	fill(199,21,133);
	stroke(218,165,32);
	//text("do", 312,153);
	fill(0,255,127);
	stroke(0,255,127);
	//text("of", 579,100);
	fill(178,34,34);
	stroke(50,205,50);
	text("spring", 335,127);
	fill(0,255,127);
	stroke(255,69,0);
	//text("I", 235,100);
	fill(218,112,214);
	stroke(139,69,19);
	//text("united", 156,127);
	fill(34,139,34);
	stroke(0,0,255);
	//text("miss", 53,75);
	fill(244,164,96);
	stroke(128,0,0);
	//text("kissed", 552,75);
	fill(255,0,255);
	stroke(0,0,139);
	//text("we", 110,127);
	fill(139,69,19);
	stroke(107,142,35);
	//text("my", 164,100);
	stroke(165,42,42);
	//text("town", 47,153);
	fill(50,205,50);
	stroke(255,0,255);
	//text("sky,", 401,100);
	fill(219,112,147);
	stroke(0,0,205);
	//text("desolate.", 126,153);
	fill(127,255,212);
	stroke(139,69,19);
	//text("ce", 472,75);
	fill(128,0,0);
	stroke(255,215,0);
	//text("it", 437,75);
	fill(0,255,255);
	stroke(107,142,35);
	//text("stare", 248,100);
	fill(0,191,255);
	stroke(0,0,139);
	//text("I", 40,75);
	fill(25,25,112);
	stroke(0,250,154);
	//text("this", 551,127);
	fill(127,255,212);
	stroke(0,0,205);
	//text("I'm", 546,153);
	fill(210,105,30);
	stroke(128,128,0);
	//text("my", 492,127);
	fill(255,0,255);
	stroke(255,0,255);
	//text("longer", 266,153);
	fill(34,139,34);
	stroke(0,128,0);
	//text("arms.", 190,100);
	fill(250,128,114);
	stroke(25,25,112);
	//text("to", 384,153);
	fill(0,0,128);
	stroke(255,69,0);
	//text("Daisy", 6,278);
	fill(153,50,204);
	stroke(0,0,128);
	//text("?", 7,100);
	fill(100,149,237);
	stroke(0,255,255);
	//text("your", 84,178);
	fill(72,209,204);
	stroke(255,215,0);
	//text("banking", 9,178);
	stroke(0,255,255);
	//text("at", 471,127);
	fill(173,255,47);
	stroke(153,50,204);
	//text("we", 493,75);
	fill(176,224,230);
	stroke(255,0,0);
	//text("you", 120,100);
	fill(0,139,139);
	stroke(218,165,32);
	//text("Even", 254,127);
	fill(72,209,204);
	stroke(0,255,255);
	//text("months", 362,75);
	fill(128,0,128);
	stroke(154,205,50);
	//text("again", 200,127);
	fill(0,255,127);
	stroke(139,0,0);
	//text("the", 334,100);
	fill(173,216,230);
	stroke(153,50,204);
	//text("having", 92,75);
	fill(186,85,211);
	stroke(0,255,127);
	//text("hold", 87,100);
	fill(0,191,255);
	stroke(255,0,255);
	//text("have", 347,153);
	fill(152,251,152);
	stroke(139,69,19);
	//text("swift", 119,178);
	fill(138,43,226);
	//text("When", 38,127);
	fill(205,133,63);
	stroke(128,128,0);
	//text("and", 437,100);
	fill(255,140,0);
	stroke(0,255,0);
	//text("My", 6,25);
	fill(255,215,0);
	stroke(0,191,255);
	//text("this", 449,153);
	fill(165,42,42);
	stroke(0,128,128);
	//text("night", 362,100);
	fill(255,99,71);
	stroke(255,0,0);
	//text("Forever", 6,228);
	fill(240,230,140);
	stroke(128,128,0);
	//text("longing", 482,153);
	fill(72,209,204);
	stroke(0,255,0);
	//text("yours,", 64,228);
	fill(250,128,114);
	stroke(0,0,139);
	//text("you.", 7,127);
	fill(0,0,128);
	stroke(199,21,133);
	//text("last", 519,75);
	fill(34,139,34);
	stroke(210,105,30);
	//text("can", 479,100);
	fill(210,105,30);
	stroke(34,139,34);
	//text("around", 168,75);
	fill(255,69,0);
	//text("in", 291,127);
	fill(64,224,208);
	stroke(255,215,0);
	//text("to", 66,100);
	fill(25,25,112);
	stroke(255,0,0);
	//text("?", 532,153);
	fill(220,20,60);
	stroke(127,255,0);
	//text("long", 34,100);
	fill(139,69,19);
	stroke(255,165,0);
	//text("return.", 166,178);
	fill(135,206,235);
	stroke(139,0,0);
	//text("be", 136,127);
	fill(220,20,60);
	stroke(218,165,32);
	//text("feels", 86,153);
	fill(144,238,144);
	stroke(0,128,0);
	//text("think", 508,100);
	fill(255,127,80);
	stroke(0,128,128);
	//text("How", 6,75);
	fill(75,0,130);
	stroke(0,139,139);
	//text("only", 547,100);
	fill(255,127,80);
	stroke(124,252,0);
	//text("the", 307,127);
	fill(144,238,144);
	stroke(218,165,32);
	//text("without", 384,127);
	fill(0,191,255);
	stroke(128,0,128);
	//text("in", 148,100);
	fill(0,255,255);
	stroke(148,0,211);
	//text("Bob,", 84,25);
	fill(148,0,211);
	stroke(0,0,255);
	//text("small", 6,153);
	fill(222,184,135);
	//text("many", 321,75);
	fill(178,34,34);
	stroke(50,205,50);
	text("is", 419,75);
	text("store", 405,153);
	text("at", 313,100);
	text("the", 218,75);
	text("side", 518,127);
	fill(173,216,230);
	stroke(0,128,128);
	//text("darling", 34,25);
	fill(255,105,180);
	stroke(32,178,170);
	//text("you", 443,127);
	fill(178,34,34);
	stroke(50,205,50);
	text("place", 246,75);
	fill(50,205,50);
	stroke(25,25,112);
	//text("x", 50,278);
	fill(233,150,122);
	stroke(124,252,0);
	//text("?", 240,127);



}
