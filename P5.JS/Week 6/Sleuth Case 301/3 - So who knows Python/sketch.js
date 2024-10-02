/*
The case of the Python Syndicate
Stage 3


Officer: 9737215
CaseNum: 301-2-52300974-9737215

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Bones karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Bones karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var anna_karpinski_image;
var pawel_karpinski_image;
var bones_karpinski_image;
var robbie_kray_image;
var cecil_karpinski_image;
var countess_hamilton_image;

var bones_karpinski_obj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	countess_hamilton_image = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	bones_karpinski_obj = {
		x: 701,
		y: 40,
		image: bones_karpinski_image
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bones_karpinski_obj.image, bones_karpinski_obj.x, bones_karpinski_obj.y);

	image(anna_karpinski_image, bones_karpinski_obj.x - 586, bones_karpinski_obj.y);
	image(pawel_karpinski_image, bones_karpinski_obj.x - 293, bones_karpinski_obj.y);
	image(robbie_kray_image, bones_karpinski_obj.x - 586, bones_karpinski_obj.y + 269);
	image(cecil_karpinski_image, bones_karpinski_obj.x - 293, bones_karpinski_obj.y + 269);
	image(countess_hamilton_image, bones_karpinski_obj.x, bones_karpinski_obj.y + 269);

}