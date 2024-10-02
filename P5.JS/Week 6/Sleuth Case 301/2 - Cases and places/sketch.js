/*
The case of the Python Syndicate
Stage 2


Officer: 9737215
CaseNum: 301-1-40665986-9737215

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Pawel karpinski

- The variables for Pawel karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Pawel karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var rocky_kray_img;
var cecil_karpinski_img;
var lina_lovelace_img;
var anna_karpinski_img;
var pawel_karpinski_img;
var countess_hamilton_img;


var pawel_karpinski_x_location = 408;
var pawel_karpinski_y_location = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	rocky_kray_img = loadImage("krayBrothers1.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	lina_lovelace_img = loadImage("lina.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	countess_hamilton_img = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawel_karpinski_img, pawel_karpinski_x_location, pawel_karpinski_y_location);

	image(rocky_kray_img, pawel_karpinski_x_location - 293, pawel_karpinski_y_location - 269);
	image(cecil_karpinski_img, pawel_karpinski_x_location, pawel_karpinski_y_location - 269);
	image(lina_lovelace_img, pawel_karpinski_x_location + 293, pawel_karpinski_y_location - 269);
	image(anna_karpinski_img, pawel_karpinski_x_location - 293, pawel_karpinski_y_location);
	image(countess_hamilton_img, pawel_karpinski_x_location + 293, pawel_karpinski_y_location);

}