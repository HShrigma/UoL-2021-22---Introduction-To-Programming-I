/*

Officer: 9737215
CaseNum: 502-3-12693090-9737215

Case 502 - A donation - stage 4

This final document will seal the deal kid. C’mon kid. Let’s send these crooks down.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + array[index].property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var AListing = [
{
	Detail0: ["hurry", "clip", "meddle", "consider"], 
	Detail1: ["charge", "sail", "mend", "radiate"], 
	Detail2: ["clip", "tug", "play", "syndicate"]
},
{
	Detail0: ["bake", "rejoice", "clip", "donation"], 
	Detail1: ["fence", "rejoice", "plug", "sail"], 
	Detail2: ["protect", "bake", "radiate", "mend"]
},
{
	Detail0: ["tug", "play", "sail", "play"], 
	Detail1: ["Governor Zuckerberg", "plug", "meddle", "sneeze"], 
	Detail2: ["clip", "hurry", "tug", "start"]
},
{
	Detail0: ["rejoice", "succeed", "hurry", "mend"], 
	Detail1: ["rejoice", "meddle", "clip", "plug"], 
	Detail2: ["start", "sail", "hurry", "plug"]
},
{
	Detail0: ["start", "hurry", "play", "meddle"], 
	Detail1: ["plug", "stuff", "meddle", "sneeze"], 
	Detail2: ["you", "sneeze", "start", "stuff"]
}];

var BListing = [
{
	Detail0: ["Edsger", "meddle", "development", "succeed"], 
	Detail1: ["radiate", "start", "plug", "tug"], 
	Detail2: ["play", "clip", "hurry", "meddle"]
},
{
	Detail0: ["start", "charge", "clip", "fence"], 
	Detail1: ["protect", "clip", "start", "bake"], 
	Detail2: ["fence", "start", "sneeze", "charge"]
},
{
	Detail0: ["ALGOL fish wholesalers", "protect", "fence", "COBOL"], 
	Detail1: ["play", "fence", "succeed", "sneeze"], 
	Detail2: ["rejoice", "mend", "play", "radiate"]
},
{
	Detail0: ["protect", "rejoice", "rejoice", "stuff"], 
	Detail1: ["charge", "$200,000", "sail", "consider"], 
	Detail2: ["meddle", "ALGOL", "radiate", "consider"]
},
{
	Detail0: ["charge", "play", "stuff", "stuff"], 
	Detail1: ["radiate", "succeed", "fence", "clip"], 
	Detail2: ["meddle", "hurry", "charge", "stuff"]
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg";

  redactedText = "My dearest "+BListing[0].Detail0[0]+", I have just received your very generous "+AListing[1].Detail0[3]+" of "+BListing[3].Detail1[1]+". Thank you. This will be invaluable to our campaign. "+BListing[3].Detail2[1]+" is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of "+AListing[4].Detail2[0]+" or "+BListing[2].Detail0[0]+" to the "+AListing[0].Detail2[3]+". Your new "+BListing[0].Detail0[2]+" at the "+BListing[2].Detail0[3]+" can now proceed without impediment. Yours sincerely, " + AListing[2].Detail1[0];

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text(missingWords, 670, 100, 580, 600);
}
