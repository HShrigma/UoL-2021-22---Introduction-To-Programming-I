/*

Officer: 9737215
CaseNum: 202-0-83769067-9737215

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Orchid text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(667,805);
	textFont(letterFont);
	textSize(38);
}

function draw()
{
	background(255);

	fill(65,105,225);
//	text("l", 557,199);
	fill(152,251,152);
//	text("one", 419,199);
	fill(255,255,0);
//	text("I", 259,416);
	fill(255,127,80);
//	text("I", 113,330);
	fill(199,21,133);
//	text("?", 288,284);
//	text("last", 558,284);
	fill(244,164,96);
//	text("kisses,", 171,619);
	fill(255,105,180);
//	text("the", 85,501);
	fill(255,215,0);
//	text("Daisy,", 173,38);
	fill(219,112,147);
//	text("your", 546,114);
//	text("that", 188,416);
	fill(240,128,128);
//	text("few", 511,153);
//	text("voice", 456,416);
	fill(250,128,114);
//	text("am", 569,501);
	fill(205,133,63);
//	text("lovely", 79,38);
//	text("only", 219,330);
	fill(0,0,128);
//	text("can", 159,330);
//	text("I", 500,454);
//	text("of", 303,454);
	fill(0,139,139);
//	text("seconds", 23,199);
	fill(0,128,128);
//	text("your", 421,330);
	fill(218,165,32);
//	text("hear", 305,416);
//	text("ny", 248,243);
	fill(218,112,214);
	text("a", 100,284);
	text("in", 368,243);
	text("chosen", 101,543);
	fill(75,0,130);
//	text("sun", 211,243);
//	text("Ever", 330,284);
//	text("I", 208,153);
	fill(0,128,128);
//	text("luckiest", 152,501);
//	text("darling,", 491,330);
	fill(107,142,35);
//	text("your", 31,543);
//	text("your", 386,416);
	fill(0,100,0);
//	text("of", 370,330);
	fill(205,133,63);
//	text("ove.", 563,199);
	fill(72,209,204);
//	text("May", 490,243);
	fill(255,0,255);
//	text("and", 104,619);
	fill(135,206,250);
//	text("It", 228,375);
	fill(218,112,214);
	text("day", 298,243);
	fill(173,216,230);
//	text("those", 421,153);
	fill(0,255,0);
//	text("make", 32,284);
//	text("the", 23,454);
	fill(240,230,140);
//	text("From", 21,114);
//	text("our", 504,284);
//	text("my", 363,199);
	fill(128,0,0);
//	text("from", 341,153);
	fill(25,25,112);
//	text("I", 414,375);
	fill(30,144,255);
//	text("the", 103,114);
	fill(65,105,225);
//	text("when", 326,375);
	fill(218,112,214);
	text("is", 284,375);
	text("first", 170,114);
	fill(238,130,238);
//	text("moment", 251,114);
	fill(32,178,170);
//	text("be", 26,501);
//	text("since", 417,284);
	fill(0,250,154);
//	text("I", 523,501);
	fill(255,0,255);
//	text("I", 435,114);
	fill(178,34,34);
//	text("must", 546,454);
	fill(128,0,0);
//	text("confession", 135,284);
	fill(139,0,139);
//	text("You", 25,243);
//	text("are", 90,243);
	fill(220,20,60);
//	text("that", 364,114);
	fill(238,130,238);
//	text("pe", 269,501);
//	text("Oh", 21,38);
	fill(0,128,0);
//	text("my", 155,243);
	fill(255,0,0);
//	text("in", 599,375);
//	text("saw", 481,114);
	fill(240,230,140);
//	text("were", 274,199);
	fill(0,206,209);
//	text("am", 460,375);
	fill(255,99,71);
//	text("that", 452,501);
	fill(127,255,212);
//	text("music", 218,454);
	fill(50,205,50);
//	text("like", 543,416);
	fill(173,255,47);
//	text("rson", 301,501);
	fill(0,128,0);
//	text("green", 32,375);
	fill(0,0,255);
//	text("blessed", 90,454);
	fill(255,0,255);
//	text("x", 94,695);
//	text("that", 143,199);
	fill(0,255,127);
//	text("quiet", 97,416);
//	text("Love", 21,619);
	fill(138,43,226);
//	text("the", 30,416);
//	text("ha", 421,454);
	fill(255,215,0);
//	text("I", 564,243);
	fill(148,0,211);
//	text("you", 214,199);
	fill(123,104,238);
//	text("Bob", 21,695);
	fill(218,165,32);
//	text("rp.", 451,454);
	fill(25,25,112);
//	text("alive", 368,501);
	fill(0,0,255);
//	text("face,", 116,153);
	fill(218,112,214);
	text("April", 411,243);
	fill(160,82,45);
//	text("lovely", 22,153);
	fill(0,139,139);
//	text("the", 354,454);
	fill(218,112,214);
	text("date", 29,330);
	fill(139,0,0);
//	text("true", 484,199);
	fill(160,82,45);
//	text("eyes.", 133,375);
	fill(255,69,0);
//	text("knew", 254,153);
//	text("alone", 514,375);
	fill(127,255,0);
//	text("think", 286,330);



}
