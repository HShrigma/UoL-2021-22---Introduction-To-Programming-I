/*

Officer: 9737215
CaseNum: 502-1-89011815-9737215

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way.
It’s a little more tricky to decipher but I know you can do it.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index].property + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var excerpt_A = [
	{ element_0: "meddle", element_1: "sail", element_2: "sneeze" },
	{ element_0: "stuff", element_1: "mend", element_2: "start" },
	{ element_0: "COBOL", element_1: "sail", element_2: "smile" },
	{ element_0: "bake", element_1: "sail", element_2: "play" },
	{ element_0: "capital", element_1: "succeed", element_2: "clip" },
	{ element_0: "clip", element_1: "smile", element_2: "hurry" },
	{ element_0: "Governor Zuckerberg", element_1: "rejoice", element_2: "sneeze" },
	{ element_0: "protect", element_1: "stuff", element_2: "smile" },
	{ element_0: "protect", element_1: "radiate", element_2: "tug" },
	{ element_0: "romantic", element_1: "Hopper’s", element_2: "a donation" }
];

var excerpt_B = [
	{ element_0: "mend", element_1: "hurry", element_2: "hurry" },
	{ element_0: "clip", element_1: "clip", element_2: "meddle" },
	{ element_0: "succeed", element_1: "mend", element_2: "stuff" },
	{ element_0: "bake", element_1: "tug", element_2: "charge" },
	{ element_0: "sneeze", element_1: "bake", element_2: "radiate" },
	{ element_0: "sneeze", element_1: "she has", element_2: "sneeze" },
	{ element_0: "sneeze", element_1: "start", element_2: "fence" },
	{ element_0: "protect", element_1: "charge", element_2: "syndicate" },
	{ element_0: "radiate", element_1: "Edsger", element_2: "protect" },
	{ element_0: "clip", element_1: "bake", element_2: "delicate" }
];

var myFont;
var backgroundImg;

function preload() {
	myFont = loadFont('SpecialElite.ttf');
	backgroundImg = loadImage("Background.png");
}

function setup() {
	createCanvas(1280, 800);

	// replace all redacted words with the correct values from the data structures above

	missingWords = "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg";

	redactedText = "My dearest " + excerpt_B[8].element_1 + ", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " + excerpt_A[9].element_1 + " intervention. I suspect that " + excerpt_B[5].element_1 + " a "+excerpt_A[9].element_0+" interest at the "+excerpt_A[2].element_0+". I and the "+excerpt_B[7].element_2+" appreciate your many contributions over the years. However, this is a most "+excerpt_B[9].element_2+" matter which would require significant "+excerpt_A[4].element_0+" for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps "+excerpt_A[9].element_2+" to my forthcoming campaign would help. Yours sincerely, " + excerpt_A[6].element_0;

}

function draw() {
	// you don't need to change this
	image(backgroundImg, 0, 0);
	stroke(0);
	strokeWeight(3);
	line(width / 2, 10, width / 2, height - 10);
	noStroke();
	textFont(myFont);
	textSize(14);
	text(redactedText, 30, 100, 580, 600);
	text(missingWords, 670, 100, 580, 600);
}
