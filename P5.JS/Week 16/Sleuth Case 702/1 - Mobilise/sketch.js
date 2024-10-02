/*

Officer: 9737215
CaseNum: 702-0-19831000-9737215

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of sleuthPI_vehicle to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Vehicle()
{
	/*
	This function should do the following: 
	 - increment sleuthPI_vehicle's distance_driven property by its gas_val property 
	 - add a random amount between -0.09 and 0.09 to sleuthPI_vehicle's vibrate_amt property
	 - use the constrain function to constrain sleuthPI_vehicle's vibrate_amt property to values between 0.04 and 1.02
	 - call the Drive_Car_engine function passing sleuthPI_vehicle as an argument
	*/
	sleuthPI_vehicle.distance_driven += sleuthPI_vehicle.gas_val;
	sleuthPI_vehicle.vibrate_amt += random(-0.09, 0.09);
	sleuthPI_vehicle.vibrate_amt = constrain(sleuthPI_vehicle.vibrate_amt, 0.04, 1.02);
	Drive_Car_engine(sleuthPI_vehicle);
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthPI_vehicle;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	sleuthPI_vehicle = 
	{
		coordinate_x: roadLeftEdge + roadWidth/4,
		coordinate_y: 300,
		distance_driven: 0,
		gas_val: 3,
		vibrate_amt: 0,
		vehicle_model: 'detective',
		number_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	Drive_Vehicle();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthPI_vehicle.distance_driven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthPI_vehicle.distance_driven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuthPI_vehicle);
	image
	(
		carImages["detective"],
		sleuthPI_vehicle.coordinate_x - carImages["detective"].width/2 + random(-sleuthPI_vehicle.vibrate_amt, sleuthPI_vehicle.vibrate_amt),
		sleuthPI_vehicle.coordinate_y + random(-sleuthPI_vehicle.vibrate_amt, sleuthPI_vehicle.vibrate_amt)
	);

}

function Drive_Car_engine(car)
{

	car.exhaust.push({size: 2, x: car.coordinate_x, y: car.coordinate_y + carImages[car.vehicle_model].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gas_val/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
