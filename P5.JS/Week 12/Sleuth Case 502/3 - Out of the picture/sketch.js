/*

Officer: 9737215
CaseNum: 502-2-28479469-9737215

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + object.property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var ACensored = {
	Part0: [ "protect", "sail", "tug"], 
	Part1: [ "stuff", "rejoice", "fence"], 
	Part2: [ "Edsger", "succeed", "stuff"], 
	Part3: [ "ALGOL", "protect", "sail"], 
	Part4: [ "protect", "bake", "plug"], 
	Part5: [ "meddle", "radiate", "mend"], 
	Part6: [ "syndicate", "Governor Zuckerberg", "smile"], 
	Part7: [ "play", "meddle", "plug"], 
	Part8: [ "sail", "fence", "protect"], 
	Part9: [ "hurry", "Hopper", "plug"]
};

var BCensored = {
	Part0: [ "radiate", "mend", "a donation"], 
	Part1: [ "charge", "hit", "sneeze"], 
	Part2: [ "play", "sail", "start"], 
	Part3: [ "sail", "hurry", "charge"], 
	Part4: [ "radiate", "stuff", "start"], 
	Part5: [ "protect", "sail", "fence"], 
	Part6: [ "tug", "plug", "consider"], 
	Part7: [ "$200,000", "mend", "stuff"], 
	Part8: [ "rejoice", "campaign", "play"], 
	Part9: [ "charge", "clip", "succeed"]
};

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger";

  redactedText = "Dear " + ACensored.Part6[1] + ", I am sure that something could be worked out in terms of "+BCensored.Part0[2]+" for your "+BCensored.Part8[1]+". How does "+BCensored.Part7[0]+" sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. "+ACensored.Part9[1]+" needs to be out of the picture. She’s caused enough trouble. Get the "+ACensored.Part6[0]+" to organise the "+BCensored.Part1[1]+" but I’d prefer it you don’t mention me or "+ACensored.Part3[0]+". I owe them enough favours already. Your old friend, " + ACensored.Part2[0];

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
