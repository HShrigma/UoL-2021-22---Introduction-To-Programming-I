/*

Officer: 9737215
CaseNum: 701-2-68643169-9737215

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from linette deauville. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testSuspect(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. 
I remember they had a 
1.dark black tattoo. 
They seemed to be 
2.between the age of 32 and 41 years old. 
They were fairly tall, I think 
3. between a height of 162 and 192 cm. 
It's so hard to remember right now. I'm not quite sure. 
Their 
4. expression seemed sad. 
The person I saw was 
5.male. 
I'll never forget their 
6. pale eyes. 
They were carrying a 
7.orange plasic bag. 
They brobably weigh between 
8.70 and 72 kg. That's all I can remember about them. 

*/

var suspectList = [
	{
		"name": "SUMMER WARMAN",
		"gender": "male",
		"expression": "empty",
		"accessory": "glass bottle",
		"tattoo": "chinese lettering",
		"height": 162,
		"weight": 74,
		"age": 46
	},
	{
		"name": "JESUS ASHELY",
		"gender": "male",
		"expression": "confused",
		"accessory": "brown paper bag",
		"tattoo": "anchor",
		"height": 173,
		"weight": 65,
		"age": 46
	},
	{
		"name": "LARRAINE MYRLE",
		"gender": "female",
		"expression": "nerveous",
		"accessory": "laptop bag",
		"tattoo": "big arrow",
		"height": 189,
		"weight": 76,
		"age": 23
	},
	{
		"name": "HANG PORTOS",
		"gender": "male",
		"expression": "sad",
		"accessory": "orange plasic bag",
		"tattoo": "dark black",
		"height": 164,
		"weight": 71,
		"age": 38
	},
	{
		"name": "NICOLE TINTLE",
		"gender": "female",
		"expression": "menacing",
		"accessory": "red backpack",
		"tattoo": "neck",
		"height": 168,
		"weight": 65,
		"age": 39
	},
	{
		"name": "LOUISE CASIMERE",
		"gender": "male",
		"expression": "angry",
		"accessory": "orange tote bag",
		"tattoo": "sword",
		"height": 170,
		"weight": 73,
		"age": 30
	},
	{
		"name": "RANDEE SYMMES",
		"gender": "female",
		"expression": "nerveous",
		"accessory": "metal briefcase",
		"tattoo": "bull",
		"height": 182,
		"weight": 79,
		"age": 39
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

// Declare your function here
function testSuspect(suspectObj) {
	var value = 0;
	 
// 1.dark black tattoo. 
if (suspectObj.tattoo == "dark black") {
	value++;
} 
// 2.between the age of 32 and 41 years old.
if (suspectObj.age > 32 && suspectObj.age < 41) {
	value++;
} 
// 3. between a height of 162 and 192 cm.
if(suspectObj.height > 162 && suspectObj.height < 192){
	value++;
}  
// 4. expression seemed sad.
if(suspectObj.expression == "sad")  {
	value++;
}
// 5.male. 
if(suspectObj.gender == "male"){
	value++;
}
// 6. pale eyes.  N/A
// 7.orange plasic bag.
if (suspectObj.accessory == "orange plasic bag") {
	value++;
} 
// 8.70 and 72 kg. That's all I can remember about them. 
if (suspectObj.weight > 70 && suspectObj.weight < 72){
	value++;
}
	return value;
}



function draw() {
	//You don't need to alter this code
	image(backgroundImg, 0, 0);

	for (let i = 0; i < suspectList.length; i++) {
		let matchingProperties = testSuspect(suspectList[i]);
		fill(50 * matchingProperties, 250 - (50 * matchingProperties), 0);
		text("found " + matchingProperties + " matching properties for " + suspectList[i].name, 60, 60 + i * 20);
	}
}
