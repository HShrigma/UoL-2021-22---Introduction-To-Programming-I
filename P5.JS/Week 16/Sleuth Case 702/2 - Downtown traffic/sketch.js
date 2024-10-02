/*

Officer: 9737215
CaseNum: 702-1-76975376-9737215

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of SleuthPI_Vehicle and the cars in
cars_list to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Move_Vehicle() {

	// increment SleuthPI_Vehicle's Distance_Amount property by its Accel_Amount property
	SleuthPI_Vehicle.Distance_Amount += SleuthPI_Vehicle.Accel_Amount;
	// add a random amount between -0.1 and 0.1 to SleuthPI_Vehicle's EngineRumble_Amt property
	SleuthPI_Vehicle.EngineRumble_Amt += random(-0.1, 0.1);
	// use the constrain function to constrain SleuthPI_Vehicle's EngineRumble_Amt property to values between 0.02 and 1
	SleuthPI_Vehicle.EngineRumble_Amt = constrain(SleuthPI_Vehicle.EngineRumble_Amt, 0.02, 1);
	// call the Turnover_Car_motor function passing SleuthPI_Vehicle as an argument
	Turnover_Car_motor(SleuthPI_Vehicle);;

}


function Cross_Lanes(targetVehicle) {

	// move targetVehicle from one lane to the other.
	// do the move in a single step without any extra animation.
	// use LaneCoordinate_a and LaneCoordinate_b to effect the change.
	if (targetVehicle.x == LaneCoordinate_a) {
		targetVehicle.x = LaneCoordinate_b;
	}
	else {
		targetVehicle.x = LaneCoordinate_a;
	}
	//hint: You will need to modify the x property of targetVehicle.
}


function Vehicle_Ahead(targetCar_a, targetCar_b) {
 
	// determine if targetCar_a is in the same lane and less than 200px behind targetCar_b.
	// do this by comparing the two cars' Distance_Amount properties
	if(targetCar_a.x == targetCar_b.x && targetCar_b.Distance_Amount - targetCar_a.Distance_Amount < 200){
		// if these requirements are met then return targetCar_b. Otherwise return false.
		return targetCar_b;
	}
	else{
		return false;
	}
	
	
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var SleuthPI_Vehicle;

var roadWidth;
var roadLeftEdge;
var LaneCoordinate_a;
var LaneCoordinate_b;
var carImages = {};

var cars_list = [
	{ x: 300, y: 0, Distance_Amount: -200, Car_Category: 'redCar', Licence_Plate: 'DK0WX4', Accel_Amount: 2, exhaust: [] }, { x: 500, y: 0, Distance_Amount: 200, Car_Category: 'whiteCar', Licence_Plate: '4EYSIS', Accel_Amount: 2, exhaust: [] }, { x: 500, y: 0, Distance_Amount: 600, Car_Category: 'greenCar', Licence_Plate: 'RA2J14', Accel_Amount: 2, exhaust: [] }, { x: 500, y: 0, Distance_Amount: 1000, Car_Category: 'blueCar', Licence_Plate: '5QUAMB', Accel_Amount: 2, exhaust: [] }, { x: 500, y: 0, Distance_Amount: 1400, Car_Category: 'greenCar', Licence_Plate: 'AOHBYX', Accel_Amount: 2, exhaust: [] }, { x: 500, y: 0, Distance_Amount: 1800, Car_Category: 'whiteCar', Licence_Plate: 'K7QO95', Accel_Amount: 2, exhaust: [] }, { x: 500, y: 0, Distance_Amount: 2200, Car_Category: 'blueCar', Licence_Plate: 'E63778', Accel_Amount: 2, exhaust: [] }, { x: 500, y: 0, Distance_Amount: 2600, Car_Category: 'redCar', Licence_Plate: 'KS1DAG', Accel_Amount: 2, exhaust: [] }, { x: 300, y: 0, Distance_Amount: 3000, Car_Category: 'whiteCar', Licence_Plate: 'F8A7G0', Accel_Amount: 2, exhaust: [] }, { x: 300, y: 0, Distance_Amount: 3400, Car_Category: 'blueCar', Licence_Plate: 'ENSQP9', Accel_Amount: 2, exhaust: [] }, { x: 300, y: 0, Distance_Amount: 3800, Car_Category: 'greenCar', Licence_Plate: 'YHBFRL', Accel_Amount: 2, exhaust: [] }, { x: 500, y: 0, Distance_Amount: 4200, Car_Category: 'blueCar', Licence_Plate: '7SNNU9', Accel_Amount: 2, exhaust: [] }, { x: 500, y: 0, Distance_Amount: 4600, Car_Category: 'blueCar', Licence_Plate: 'AUJEN8', Accel_Amount: 2, exhaust: [] }, { x: 300, y: 0, Distance_Amount: 5000, Car_Category: 'blueCar', Licence_Plate: 'QXU52J', Accel_Amount: 2, exhaust: [] }, { x: 300, y: 0, Distance_Amount: 5400, Car_Category: 'redCar', Licence_Plate: 'V8US86', Accel_Amount: 2, exhaust: [] }, { x: 300, y: 0, Distance_Amount: 5800, Car_Category: 'whiteCar', Licence_Plate: '98UCBZ', Accel_Amount: 2, exhaust: [] }, { x: 500, y: 0, Distance_Amount: 6200, Car_Category: 'blueCar', Licence_Plate: '2TRQEQ', Accel_Amount: 2, exhaust: [] }, { x: 500, y: 0, Distance_Amount: 6600, Car_Category: 'blueCar', Licence_Plate: 'IUGJY9', Accel_Amount: 2, exhaust: [] }, { x: 500, y: 0, Distance_Amount: 7000, Car_Category: 'blueCar', Licence_Plate: 'G6L9G1', Accel_Amount: 2, exhaust: [] }, { x: 300, y: 0, Distance_Amount: 7400, Car_Category: 'redCar', Licence_Plate: '79T8I8', Accel_Amount: 2, exhaust: [] }
];



function preload() {
	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for (var i = 0; i < carTypes.length; i++) {
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup() {
	createCanvas(800, 800);

	roadWidth = 400;
	roadLeftEdge = 200;
	LaneCoordinate_a = 300;
	LaneCoordinate_b = 500;

	SleuthPI_Vehicle =
	{
		x: roadLeftEdge + roadWidth / 4,
		y: 550,
		Distance_Amount: 0,
		Accel_Amount: 3,
		EngineRumble_Amt: 0,
		Car_Category: 'detective',
		Licence_Plate: '5L3UTH',
		exhaust: []
	}


}



function draw() {
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	Move_Vehicle();
	for (var i = 0; i < cars_list.length; i++) {
		var b2b = Vehicle_Ahead(SleuthPI_Vehicle, cars_list[i]);
		if (b2b) Cross_Lanes(SleuthPI_Vehicle);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for (var i = 0; i < cars_list.length; i++) {
		cars_list[i].Distance_Amount += cars_list[i].Accel_Amount;
		cars_list[i].y = SleuthPI_Vehicle.y - cars_list[i].Distance_Amount + SleuthPI_Vehicle.Distance_Amount;
	}

}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad() {
	stroke(100);
	fill(50);
	rect(roadLeftEdge, 0, roadWidth, 800);
	stroke(255);

	for (var i = -1; i < 20; i++) {
		line(
			roadLeftEdge + roadWidth / 2, i * 100 + (SleuthPI_Vehicle.Distance_Amount % 100),
			roadLeftEdge + roadWidth / 2, i * 100 + 70 + (SleuthPI_Vehicle.Distance_Amount % 100)
		);
	}
}

function drawCars() {
	//draw the detective car

	image
	drawExhaust(SleuthPI_Vehicle);
	image
		(
			carImages["detective"],
			SleuthPI_Vehicle.x - carImages["detective"].width / 2 + random(-SleuthPI_Vehicle.EngineRumble_Amt, SleuthPI_Vehicle.EngineRumble_Amt),
			SleuthPI_Vehicle.y + random(-SleuthPI_Vehicle.EngineRumble_Amt, SleuthPI_Vehicle.EngineRumble_Amt)
		);

	//draw all other cars

	for (var i = 0; i < cars_list.length; i++) {
		if (cars_list[i].y < height && cars_list[i].y > -height / 2) {
			image(
				carImages[cars_list[i].Car_Category],
				cars_list[i].x - carImages[cars_list[i].Car_Category].width / 2,
				cars_list[i].y
			);
			Turnover_Car_motor(cars_list[i]);

			drawExhaust(cars_list[i]);
		}
	}

}

function Turnover_Car_motor(car) {

	car.exhaust.push({ size: 2, x: car.x, y: car.y + carImages[car.Car_Category].height });

	for (var i = car.exhaust.length - 1; i >= 0; i--) {

		car.exhaust[i].y += max(0.75, car.Accel_Amount / 3);
		if (car.Car_Category != "detective") car.exhaust[i].y += (SleuthPI_Vehicle.Accel_Amount - car.Accel_Amount);
		car.exhaust[i].x += random(-1, 1);
		car.exhaust[i].size += 0.5;

		if (car.exhaust[i].y > height || car.exhaust[i].y < 0) {
			car.exhaust.splice(i, 1);
		}
	}
}


function drawExhaust(car) {
	noStroke();
	for (var i = 0; i < car.exhaust.length; i++) {
		var alpha = map(car.exhaust[i].size, 0, 40, 50, 0);
		fill(125, alpha);
		ellipse(car.exhaust[i].x + 20, car.exhaust[i].y, car.exhaust[i].size);

	}
}
