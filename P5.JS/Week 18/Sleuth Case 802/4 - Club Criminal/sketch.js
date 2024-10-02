/*
802 - The case of Monte Carlo
Stage 4 - Club criminal


Officer: 9737215
CaseNum: 802-3-20859742-9737215

The card sharks from Rossling Polling are not pleased with your stellar performance and suspect foul play. 
They are challenging you to find a single card in the deck in just one cut.
The card you are looking for is stored in the cutPoint object. 
Cut the deck at this exact location and they will give up their secrets.

* Using a for loop search for the card represented by cutPoint in the cards array.
* Do this in a function called deckCut and call it from setup.
* We need to be quick to not be spotted. Make sure you use a for loop and the break statement when you find a match in the deck.
* Store the cut card and all the elements after from the cards array in the top_of_deck array. Do this using the JavaScript splice() function
* You’ll then need to reverse the elements in top_of_deck so that the card we cut the deck at is the last element and not the first. 
Unfortunatly, if we use the JavaScript inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid. 
Do this in the deckCut after you have filled top_of_deck.


*You also need to write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers but set the random value to start at 7 and end at 55.
Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
*Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

*/

var cards = [{"cardSuit":"Spades","number":"A"},{"cardSuit":"Spades","number":"2"},{"cardSuit":"Spades","number":"3"},{"cardSuit":"Spades","number":"4"},{"cardSuit":"Spades","number":"5"},{"cardSuit":"Spades","number":"6"},{"cardSuit":"Spades","number":"7"},{"cardSuit":"Spades","number":"8"},{"cardSuit":"Spades","number":"9"},{"cardSuit":"Spades","number":"10"},{"cardSuit":"Spades","number":"J"},{"cardSuit":"Spades","number":"Q"},{"cardSuit":"Spades","number":"K"},{"cardSuit":"Clubs","number":"A"},{"cardSuit":"Clubs","number":"2"},{"cardSuit":"Clubs","number":"3"},{"cardSuit":"Clubs","number":"4"},{"cardSuit":"Clubs","number":"5"},{"cardSuit":"Clubs","number":"6"},{"cardSuit":"Clubs","number":"7"},{"cardSuit":"Clubs","number":"8"},{"cardSuit":"Clubs","number":"9"},{"cardSuit":"Clubs","number":"10"},{"cardSuit":"Clubs","number":"J"},{"cardSuit":"Clubs","number":"Q"},{"cardSuit":"Clubs","number":"K"},{"cardSuit":"Hearts","number":"A"},{"cardSuit":"Hearts","number":"2"},{"cardSuit":"Hearts","number":"3"},{"cardSuit":"Hearts","number":"4"},{"cardSuit":"Hearts","number":"5"},{"cardSuit":"Hearts","number":"6"},{"cardSuit":"Hearts","number":"7"},{"cardSuit":"Hearts","number":"8"},{"cardSuit":"Hearts","number":"9"},{"cardSuit":"Hearts","number":"10"},{"cardSuit":"Hearts","number":"J"},{"cardSuit":"Hearts","number":"Q"},{"cardSuit":"Hearts","number":"K"},{"cardSuit":"Diamonds","number":"A"},{"cardSuit":"Diamonds","number":"2"},{"cardSuit":"Diamonds","number":"3"},{"cardSuit":"Diamonds","number":"4"},{"cardSuit":"Diamonds","number":"5"},{"cardSuit":"Diamonds","number":"6"},{"cardSuit":"Diamonds","number":"7"},{"cardSuit":"Diamonds","number":"8"},{"cardSuit":"Diamonds","number":"9"},{"cardSuit":"Diamonds","number":"10"},{"cardSuit":"Diamonds","number":"J"},{"cardSuit":"Diamonds","number":"Q"},{"cardSuit":"Diamonds","number":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

var cutPoint = {"suit":"Spades","value":"5"};
var top_of_deck = [];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
	shuffleSeed();
	shuffleDeck(shuffleSeed());
	//call your deckCut function here
	deckCut();
}

//write your deckCut function here
function deckCut(){
	var cutIndex;
	for(let i = 0; i < cards.length; i++){
		if(cards[i].cardSuit == cutPoint.suit && cards[i].number == cutPoint.value){
			cutIndex = i;
			break;
		}
	}

	for(var i = cards.length - 1; i >= cutIndex; i--){
		top_of_deck.push(cards[i]);
	}


}
//write your shuffleSeed() function here.
function shuffleSeed(){
	var arr = [];
	for(var i = 0; i < 52; i++){
		arr.push(round(random(7, 55)));
	}
	return arr;
}
/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < cards.length; j++)
	   {
		  var tempCard = cards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          cards.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if(i < top_of_deck.length)
		{
			drawCard(top_of_deck[i], 880 + i * 18, 750);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.number == values[j] && card.cardSuit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
