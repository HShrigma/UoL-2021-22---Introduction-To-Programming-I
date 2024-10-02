/*
802 - The case of Monte Carlo
Stage 1 - Card sharks

Officer: 9737215
CaseNum: 802-0-44972899-9737215

Time to pull on your best threads kid, grab a martini prepare for an evening at the Monte Carlo casino.

Our targets for this op are a gang of high rolling statisticians. 
They maintain an air of respectability as the board of Rossling Polling, 
a company used by the shady politicians of Console City to make them seem more popular than they really are. 
They’re prepared to give up the dirt on their techniques if we can beat them in a game of 5 card stud poker. 
We can’t go in and gamble away Sleuth & Co’s cash reserves. 
There isn’t that much green in the evidence room to compete with these card sharks. Let’s stack the odds in our favour. 
First let’s learn how to mark cards.

* Write a function called  select_cards.
* Using a for loop to set the marked property of the cardDeck array elements to true when the suit is Clubs or the value is 6
* Call the function from within setup

*/

var cardDeck = [{"marked":false,"card_suit":"Spades","n":"A"},{"marked":false,"card_suit":"Spades","n":"2"},{"marked":false,"card_suit":"Spades","n":"3"},{"marked":false,"card_suit":"Spades","n":"4"},{"marked":false,"card_suit":"Spades","n":"5"},{"marked":false,"card_suit":"Spades","n":"6"},{"marked":false,"card_suit":"Spades","n":"7"},{"marked":false,"card_suit":"Spades","n":"8"},{"marked":false,"card_suit":"Spades","n":"9"},{"marked":false,"card_suit":"Spades","n":"10"},{"marked":false,"card_suit":"Spades","n":"J"},{"marked":false,"card_suit":"Spades","n":"Q"},{"marked":false,"card_suit":"Spades","n":"K"},{"marked":false,"card_suit":"Clubs","n":"A"},{"marked":false,"card_suit":"Clubs","n":"2"},{"marked":false,"card_suit":"Clubs","n":"3"},{"marked":false,"card_suit":"Clubs","n":"4"},{"marked":false,"card_suit":"Clubs","n":"5"},{"marked":false,"card_suit":"Clubs","n":"6"},{"marked":false,"card_suit":"Clubs","n":"7"},{"marked":false,"card_suit":"Clubs","n":"8"},{"marked":false,"card_suit":"Clubs","n":"9"},{"marked":false,"card_suit":"Clubs","n":"10"},{"marked":false,"card_suit":"Clubs","n":"J"},{"marked":false,"card_suit":"Clubs","n":"Q"},{"marked":false,"card_suit":"Clubs","n":"K"},{"marked":false,"card_suit":"Hearts","n":"A"},{"marked":false,"card_suit":"Hearts","n":"2"},{"marked":false,"card_suit":"Hearts","n":"3"},{"marked":false,"card_suit":"Hearts","n":"4"},{"marked":false,"card_suit":"Hearts","n":"5"},{"marked":false,"card_suit":"Hearts","n":"6"},{"marked":false,"card_suit":"Hearts","n":"7"},{"marked":false,"card_suit":"Hearts","n":"8"},{"marked":false,"card_suit":"Hearts","n":"9"},{"marked":false,"card_suit":"Hearts","n":"10"},{"marked":false,"card_suit":"Hearts","n":"J"},{"marked":false,"card_suit":"Hearts","n":"Q"},{"marked":false,"card_suit":"Hearts","n":"K"},{"marked":false,"card_suit":"Diamonds","n":"A"},{"marked":false,"card_suit":"Diamonds","n":"2"},{"marked":false,"card_suit":"Diamonds","n":"3"},{"marked":false,"card_suit":"Diamonds","n":"4"},{"marked":false,"card_suit":"Diamonds","n":"5"},{"marked":false,"card_suit":"Diamonds","n":"6"},{"marked":false,"card_suit":"Diamonds","n":"7"},{"marked":false,"card_suit":"Diamonds","n":"8"},{"marked":false,"card_suit":"Diamonds","n":"9"},{"marked":false,"card_suit":"Diamonds","n":"10"},{"marked":false,"card_suit":"Diamonds","n":"J"},{"marked":false,"card_suit":"Diamonds","n":"Q"},{"marked":false,"card_suit":"Diamonds","n":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your select_cards function here
	select_cards();
}

//write your select_cards function here
function select_cards(){
	cardDeck.forEach(n => {
		if(n.card_suit == "Clubs" || n.n == 6){
			n.marked = true;
		}
	})
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 52)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if (cardDeck[i].marked)
		{
			drawCard(cardDeck[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(cardDeck[i], 400 + i * 18, 250);
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
			if (card.n == values[j] && card.card_suit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
