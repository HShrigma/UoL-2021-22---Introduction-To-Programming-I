/*

Officer: 9737215
CaseNum: 502-0-36662740-9737215

Case 502 - Old friends - stage 1

Corruption is everywhere in Console City, and the cops are no exception.
I’ve managed to lay my hands on some government censored documents,
and I think they lead to a trail of corruption that goes all the way to the top. However, the key parts have been redacted.
Luckily a source of mine has sent me redacted words in the very order that they appear in the document.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var A_record = ["Cobol Theatre", "Governor Zuckerberg", "clean up", "Lovelace", "Judge Hopper"];

var B_record = ["affair", "Torvalds", "supply of fish", "Edsger", "Algol Fish Wholesalers"];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup() {
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Governor Zuckerberg, Algol Fish Wholesalers, supply of fish, Cobol Theatre, Judge Hopper, clean up, Torvalds, affair, Lovelace, Edsger";

  redactedText = "Dear " + A_record[1] + ", I am writing to you with much confusion and distress. As you know my company " + B_record[4] + " has been a bastion of the community. Over the years we have provided many jobs for the people of Console City. We’ve kept the city in a good " + B_record[2] + ". We even paid some tax once. Now I find that our efforts to open a new plant opposite the " + A_record[0] + " is being blocked by your very own " + A_record[4] + ". Did I not help you " + A_record[2] + " the mess after " + B_record[1] + " ? Did I not keep quiet about your " + B_record[0] + " with "+A_record[3]+"? Contact me discreetly and with haste. Some arrangement must be found. Your old friend, " + B_record[3];

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
