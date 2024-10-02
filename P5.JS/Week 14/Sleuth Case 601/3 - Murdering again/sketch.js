/*
Officer: 9737215
CaseNum: 601-2-91925394-9737215

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, MediumTurquoise fill rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Brown fill triangles centered over each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 84 pixels of any of the crimes then the details
should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- fill
- rect() NB. Draw each rectangle with the point at its center.

- fill
- triangle() NB. Draw each triangle with the point roughly at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var FugitiveLogbook_position_x = [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555];
var FugitiveLogbook_position_y = [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474];


//Recent crime records.

var MurderData = {
	coordinate_x: [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456],
	coordinate_y: [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770],
	killed_: ['JESSIA PORTOS', 'LARRAINE PEGORD', 'DRUSILLA WARMAN', 'GAYLA WILLMAR', 'LAKESHA SYMMES', 'ERMELINDA OORIN', 'LIANNE COURTWOOD', 'BRIDGET BROADVIEW', 'LAVERNE JACQUELIN', 'JACQUELINE DURANTS', 'RANDEE CROME', 'LOUISE ZETLAND', 'JULIANA ADVERSANE', 'NELSON TINTLE'],
};

function preload() {
	countyMap = loadImage("map.png")
}

function setup() {
	createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0, 0);

	//add your code below here
	
	//Draw Sightings and search for matches

	for (let i = 0; i < FugitiveLogbook_position_x.length; i++) {

		//set fill to MediumTurqouise
		fill(72, 209, 204);
		noStroke();
		//Draw Sightings
		rect(FugitiveLogbook_position_x[i] - 2.5, FugitiveLogbook_position_y[i] - 2.5, 5,5);
		//Check for matches
		for (let j = 0; j < MurderData.coordinate_x.length; j++) {
			//Draw Murder Data
			if(i == 0){
				//Set fill to brown
				fill(165,  42,  42);
				triangle(
					
					MurderData.coordinate_x[j], 
					MurderData.coordinate_y[j] - 5, 
					
					MurderData.coordinate_x[j] - 5, 
					MurderData.coordinate_y[j] + 5, 

					MurderData.coordinate_x[j] + 5, 
					MurderData.coordinate_y[j] + 5, 
					);
			}
			if(
				dist(
				FugitiveLogbook_position_x[i], 
				FugitiveLogbook_position_y[i], 
				MurderData.coordinate_x[j], 
				MurderData.coordinate_y[j]) < 84
				)
			{
				var evidence = { 
					suspect_x: FugitiveLogbook_position_x[i], 
					suspect_y: FugitiveLogbook_position_y[i] ,
					crime_x: MurderData.coordinate_x[j], 
					crime_y: MurderData.coordinate_y[j], 
					victimName: MurderData.killed_[j] };
				console.log("MATCH FOUND");
				possibleMatches.push(evidence);
			}
		}
	}
		// code to draw the matches ( if any)
		for(let i = 0 ; i < possibleMatches.length ; i++)
		{
			stroke(127);
			strokeWeight(3);
			line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);
	
			noStroke();
			fill(127);
			text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
		}
}

//We are not using the draw function this time
