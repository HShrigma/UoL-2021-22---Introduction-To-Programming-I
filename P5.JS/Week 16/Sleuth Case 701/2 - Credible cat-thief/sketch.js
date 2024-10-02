/*

Officer: 9737215
CaseNum: 701-1-84767137-9737215

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. 
1. The person I saw was male.
2. They were quite big, they probably weigh more than 59 Kg. 
3. Their expression seemed angry. 
4. I would say they were shorter than 167 cm. 
5. They had short black hair. It's so hard to remember right now. I'm not quite sure. 
6. I remember they had a big arrow tattoo. That's all I know officer. 

*/

var suspectList = [
	{ 
		"name": "LARRAINE ASHELY",
		"gender": "female",
		"tattoo": "dragon",
		"hair": "thick black",
		"height": 182,
		"weight": 71
	},
	{ 
		"name": "LAKESHA JOYER",
		"gender": "male",
		"tattoo": "bull",
		"hair": "long white",
		"height": 171,
		"weight": 73
	},
	{ 
		"name": "LESLEY NIEMELA",
		"gender": "male",
		"tattoo": "anchor",
		"hair": "white",
		"height": 192,
		"weight": 80
	},
	{ 
		"name": "HANG JACQUELIN",
		"gender": "male",
		"tattoo": "jellyfish",
		"hair": "ginger",
		"height": 150,
		"weight": 78
	},
	{ 
		"name": "MAJORIE MYRLE",
		"gender": "male",
		"tattoo": "big arrow",
		"hair": "short black",
		"height": 160,
		"weight": 62
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here
function testProperties(suspectObj){
	if (
		suspectObj.gender == "male" && 
		suspectObj.weight > 59 && 
		suspectObj.height < 167 && 
		suspectObj.hair == "short black" && 
		suspectObj.tattoo == "big arrow") {
		return true;
	}
	else{
		return false;
	}
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectList.length; i++){
    if(testProperties(suspectList[i]) == true){
      fill(255,0,0);
      text(suspectList[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectList[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
