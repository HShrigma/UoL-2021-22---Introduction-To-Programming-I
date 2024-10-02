/*
The case of the Python Syndicate
Stage 4

Officer: 9737215
CaseNum: 301-3-55191046-9737215

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var bones_karpinski_image;
var anna_karpinski_image;
var robbie_kray_image;
var pawel_karpinski_image;
var rocky_kray_image;
var countess_hamilton_image;

var rocky_kray_object;


//declare your new objects below


// var bones_karpinski_position_x = 115;
// var bones_karpinski_position_y = 40;
// var anna_karpinski_position_x = 408;
// var anna_karpinski_position_y = 40;
// var robbie_kray_position_x = 701;
// var robbie_kray_position_y = 40;
// var pawel_karpinski_position_x = 115;
// var pawel_karpinski_position_y = 309;
// var countess_hamilton_position_x = 701;
// var countess_hamilton_position_y = 309;


function preload() {
	photoBoard = loadImage('photoBoard.png');
	bones_karpinski_image = loadImage("karpinskiDog.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	countess_hamilton_image = loadImage("countessHamilton.png");

}

function setup() {
	createCanvas(photoBoard.width, photoBoard.height);
	rocky_kray_object = {
		x: 408,
		y: 309,
		image: rocky_kray_image
	};



	//define your new objects below
	bones_karpinski_object = {
		x: 115,
		y: 40,
		image: bones_karpinski_image
	};

	anna_karpinski_object = {
		x: 408,
		y: 40,
		image: anna_karpinski_image
	};

	robbie_kray_object = {
		x: 701,
		y: 40,
		image: robbie_kray_image
	};

	pawel_karpinski_object = {
		x: 115,
		y: 309,
		image: pawel_karpinski_image
	};

	countess_hamilton_object = {
		x: 701,
		y: 309,
		image: countess_hamilton_image
	};
}

function draw() {
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bones_karpinski_object.image, bones_karpinski_object.x, bones_karpinski_object.y);
	image(anna_karpinski_object.image, anna_karpinski_object.x, anna_karpinski_object.y);
	image(robbie_kray_object.image, robbie_kray_object.x, robbie_kray_object.y);
	image(pawel_karpinski_object.image, pawel_karpinski_object.x, pawel_karpinski_object.y);
	image(rocky_kray_object.image, rocky_kray_object.x, rocky_kray_object.y);
	image(countess_hamilton_object.image, countess_hamilton_object.x, countess_hamilton_object.y);


}