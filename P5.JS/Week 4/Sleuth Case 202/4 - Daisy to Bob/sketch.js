/*

Officer: 9737215
CaseNum: 202-3-46605069-9737215

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Brown filled text with a Olive outline in RonsFont font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(700,614);
	textSize(36);
}

function draw()
{
	background(255);

	fill(144,238,144);
	stroke(34,139,34);
	textFont(Diggity);
	//text("these", 546,226);
	push();
	fill(218,165,32);
	stroke(0,0,205);
	//text("short", 385,185);
	pop();
	stroke(255,255,0);
	textFont(RonsFont);
	//text("yours,", 140,430);
	fill(106,90,205);
	stroke(0,0,255);
	textFont(Melissa);
	//text("If", 593,185);
	fill(72,209,204);
	stroke(0,250,154);
	textFont(Diggity);
	//text("secret", 214,316);
	fill(240,128,128);
	stroke(127,255,0);
	textFont(Melissa);
	//text("are", 532,316);
	fill(220,20,60);
	stroke(255,0,0);
	textFont(Diggity);
	//text("I", 15,226);
	fill(32,178,170);
	stroke(255,69,0);
	textFont(RonsFont);
	//text("ed", 108,358);
	push();
	fill(238,232,170);
	stroke(148,0,211);	
	//text("so,", 624,185);
	pop();
	fill(0,128,0);
	//text("?", 132,316);
	fill(222,184,135);
	stroke(128,0,0);
	textFont(Ballpointprint);
	//text("we", 436,108);
	fill(210,105,30);
	stroke(255,0,0);
	textFont(Melissa);
	//text("so", 574,316);
	fill(240,128,128);
	stroke(148,0,211);
	textFont(Diggity);
	//text("and", 196,147);
	fill(255,105,180);
	stroke(128,0,128);
	textFont(RonsFont);
	//text("a", 72,147);
	fill(128,0,128);
	stroke(34,139,34);
	//text("cash.", 172,226);
	fill(135,206,235);
	stroke(0,255,255);
	textFont(Melissa);
	//text("You", 488,316);
	fill(218,165,32);
	stroke(75,0,130);
	textFont(Diggity);
	//text("this", 305,147);
	fill(123,104,238);
	stroke(0,0,128);
	//text("more", 554,271);
	fill(220,20,60);
	stroke(0,128,0);
	//text("Are", 275,185);
	fill(0,0,255);
	stroke(199,21,133);
	textFont(Melissa);
	//text("?", 573,185);
	push();
	fill(152,251,152);
	stroke(128,0,128);
	textFont(Ballpointprint);
	//text("relationship", 28,185);
	pop();
	fill(255,127,80);
	textFont(RonsFont);
	//text("x", 96,502);
	fill(154,205,50);
	stroke(0,0,205);
	textFont(Ballpointprint);
	//text("ignore", 450,226);
	fill(153,50,204);
	stroke(75,0,130);
	textFont(RonsFont);
	//text("our", 522,147);
	fill(127,255,0);
	stroke(199,21,133);
	textFont(Melissa);
	//text("away", 603,108);
	fill(0,206,209);
	stroke(32,178,170);
	//text("go", 571,108);
	fill(186,85,211);
	stroke(160,82,45);
	textFont(Ballpointprint);
//	text("silence.", 375,316);
	fill(50,205,50);
	stroke(218,165,32);
//	text("delays.", 137,271);
	fill(184,134,11);
	stroke(32,178,170);
//	text("how", 405,271);
	fill(25,25,112);
	stroke(255,165,0);
	textFont(RonsFont);
//	text("Perhaps", 321,108);
	fill(75,0,130);
	stroke(0,100,0);
	textFont(Ballpointprint);
//	text("continual", 23,271);
	fill(184,134,11);
	stroke(128,128,0);
	textFont(Melissa);
//	text("sort", 251,147);
	fill(173,255,47);
	stroke(154,205,50);
	textFont(Ballpointprint);
//	text("Is", 467,147);
	push();
	fill(0,0,139);
	stroke(255,0,255);
	textFont(RonsFont);
//	text("out.", 404,147);
	pop();
	fill(218,165,32);
	stroke(0,255,127);
	textFont(Melissa);
//	text("sure", 353,271);
	fill(107,142,35);
	stroke(128,0,0);
	textFont(Ballpointprint);
//	text("sometimes.", 158,358);
	fill(255,0,255);
	stroke(0,128,0);
	textFont(Melissa);
//	text("My", 20,36);
	fill(184,134,11);
	stroke(255,69,0);
	textFont(Diggity);
//	text("?", 294,108);
	fill(0,0,205);
	stroke(75,0,130);
	textFont(RonsFont);
//	text("much", 468,271);
	fill(34,139,34);
	stroke(255,255,0);
	textFont(Diggity);
//	text("for", 20,147);
	fill(255,165,0);
	stroke(255,140,0);
	textFont(RonsFont);
//	text("ing", 196,108);
	fill(244,164,96);
	stroke(184,134,11);
	textFont(Diggity);
//	text("me", 247,108);
	fill(186,85,211);
	stroke(0,139,139);
	textFont(Melissa);
//	text("can", 270,226);
	push();
	fill(154,205,50);
	stroke(255,69,0);
//	text("?", 255,185);
	pop();
	fill(128,0,0);
	textFont(RonsFont);
//	text("no", 312,226);
	fill(238,232,170);
	stroke(128,0,128);
	textFont(Ballpointprint);
//	text("can", 33,226);
	push();
	fill(123,104,238);
	stroke(165,42,42);
	textFont(Diggity);
//	text("should", 492,108);
	pop();
	stroke(0,250,154);
//	text("I", 625,271);
	push();
	fill(160,82,45);
	stroke(255,0,255);
	textFont(Diggity);
//	text("I'm", 245,271);
	pop();
	stroke(0,139,139);
	textFont(Diggity);
//	text("s,", 288,316);
	push();
	fill(128,0,128);
	stroke(255,140,0);
//	text("The", 158,316);
	pop();
	fill(255,127,80);
	stroke(34,139,34);
//	text("I", 252,226);
	fill(165,42,42);
	stroke(128,128,0);
	textFont(RonsFont);
	text("safe", 182,185);
	text("the", 318,316);
	text("take", 51,316);
	fill(0,191,255);
	stroke(160,82,45);
	textFont(Diggity);
//	text("you", 67,108);
	fill(0,128,128);
	stroke(128,128,0);
	textFont(RonsFont);
//	text("Forever", 20,430);
	fill(218,112,214);
	stroke(255,165,0);
//	text("send", 89,226);
	fill(255,99,71);
	stroke(255,140,0);
	textFont(Melissa);
//	text("Bob,", 164,36);
	fill(205,133,63);
	stroke(0,128,0);
	textFont(Diggity);
//	text("Are", 9,108);
	push();
	fill(165,42,42);
	stroke(128,128,0);
	textFont(RonsFont);
	text("avoid", 119,108);
	text("guard", 14,358);
	pop();
	fill(127,255,212);
	stroke(0,255,0);
	textFont(RonsFont);
//	text("Daisy", 13,502);
	push();
	fill(160,82,45);
	stroke(139,69,19);
//	text("not", 292,271);
	pop();
	fill(244,164,96);
	stroke(75,0,130);
//	text("break", 101,147);
	fill(65,105,225);
	stroke(0,255,255);
//	text("all", 360,147);
	fill(255,165,0);
	stroke(0,206,209);
	textFont(Melissa);
//	text("can", 9,316);
	push();
	fill(0,0,139);
	stroke(154,205,50);
	textFont(Ballpointprint);
//	text("longer", 357,226);
	pop();
	fill(233,150,122);
	stroke(124,252,0);
//	text("money", 503,185);
	fill(0,250,154);
	stroke(184,134,11);
	textFont(RonsFont);
//	text("of", 460,185);
	push();
	fill(135,206,235);
	stroke(178,34,34);
	textFont(Ballpointprint);
//	text("darling", 61,36);
	pop();
	fill(220,20,60);
	stroke(0,255,255);
	textFont(Diggity);
//	text("you", 333,185);



}
