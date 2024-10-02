/*

Officer: 9737215
CaseNum: 701-3-46870914-9737215

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from majorie warman.
All they need is for you to do the detective work.

This time you must implement two functions:

- A checkSuspect function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A getSuspectMatch function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - function getSuspectMatch(){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. 
It was very dark and I could barely see, Their 
1. expression seemed confused. 
It was so scary! 
2. They brobably weigh between 78 and 87 kg. 
I'll never forget their 
3. black eyes. 
It was very dark and I could barely see, I remember they had a 
4. facial tattoo. 
They seemed to be 
5. between the age of 18 and 65 years old. 
They wore 
6. very thick glasses. 
They were fairly tall, I think between a 
7. height of 150 and 184 cm. 
The person I saw was 
8. female. 
They had 
9. ginger hair. I hope I never have to go through that again. 

*/

var suspectsArray = [
	{
		"name": "LAVERNE GOODBURY",
		"tattoo": "chinese lettering",
		"glasses": "dark brown",
		"hair": "no",
		"eyes": "brown",
		"weight": 67,
		"age": 52,
		"height": 161
	},
	{
		"name": "JACQUELINE MYRLE",
		"tattoo": "bull",
		"glasses": "light tan",
		"hair": "thin blond",
		"eyes": "green",
		"weight": 74,
		"age": 46,
		"height": 196
	},
	{
		"name": "GAYLA PHINNEY",
		"tattoo": "anchor",
		"glasses": "cheap plastic",
		"hair": "shaved",
		"eyes": "pale",
		"weight": 67,
		"age": 33,
		"height": 177
	},
	{
		"name": "PIERRE JENI",
		"tattoo": "facial",
		"glasses": "very thick",
		"hair": "ginger",
		"eyes": "black",
		"weight": 81,
		"age": 51,
		"height": 161
	},
	{
		"name": "JAUNITA PEGORD",
		"tattoo": "sword",
		"glasses": "white",
		"hair": "short black",
		"eyes": "blue",
		"weight": 73,
		"age": 47,
		"height": 160
	},
	{
		"name": "LESLEY WARMAN",
		"tattoo": "ox",
		"glasses": "black",
		"hair": "red",
		"eyes": "grey",
		"weight": 80,
		"age": 33,
		"height": 151
	},
	{
		"name": "DRUSILLA THAXTER",
		"tattoo": "dark black",
		"glasses": "very thin",
		"hair": "thick black",
		"eyes": "brown",
		"weight": 77,
		"age": 38,
		"height": 185
	}
];

var myFont;
var backgroundImg;

function preload() {
	myFont = loadFont('SpecialElite.ttf');
	backgroundImg = loadImage("Background.png");
}

function setup() {
	createCanvas(640, 480);
	textFont(myFont);
}

// Declare both your functions here
function checkSuspect(suspectObj) {
	let value = 0;


	//1. expression seemed confused.N/A
	//2. They brobably weigh between 78 and 87 kg. 
	if (suspectObj.weight > 78 && suspectObj.weight < 87) {
		value++;
	}

	//3. black eyes. 
	if (suspectObj.eyes == "black") {
		value++;
	}
	//4. facial tattoo. 
	if (suspectObj.tattoo == "facial") {
		value++;
	}
	//5. between the age of 18 and 65 years old. 
	if (suspectObj.age > 18 && suspectObj.age < 65) {
		value++;
	}
	//6. very thick glasses. 
	if (suspectObj.glasses == "very thick"){
		value++;
	}
	//7. height of 150 and 184 cm. 
	if(suspectObj.height > 150 && suspectObj.height < 184){
		value++;
	}
	//8. female. N/A
	//9. ginger hair.I hope I never have to go through that again.
	if(suspectObj.hair == "ginger"){
		value++;
	}
	return value;
}

function getSuspectMatch() { 
	var mostProbableSuspect = suspectsArray[0];

	suspectsArray.forEach(n => {
		if(checkSuspect(n) > checkSuspect(mostProbableSuspect)){
			mostProbableSuspect = n;
		}
	});
	return mostProbableSuspect;
}


function draw() {
	//You don't need to alter this code
	image(backgroundImg, 0, 0);

	fill(255, 0, 0);
	text(getSuspectMatch().name + " is guilty!", 60, 80);
}
