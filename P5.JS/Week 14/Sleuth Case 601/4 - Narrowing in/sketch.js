/*
Officer: 9737215
CaseNum: 601-3-62893723-9737215

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Indigo stroke ellipses at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, RoyalBlue fill triangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
If she was within less than 40 pixels of any of the crimes within no more than 3 days of their occurrence then the details
should be pushed to the list of possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- if()
- dist()
- abs()
- stroke
- ellipse()

- fill
- triangle() NB. Draw each triangle with the point roughly at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var caseyFryLog_Point_X = [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68];
var caseyFryLog_Point_Y = [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461];
var caseyFryLog_date = [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24];


//Recent crime records.

var attackData = [
  { coordinateX: 438, coordinateY: 420, date: 11, fatalityName: 'RANDEE CROME' },
  { coordinateX: 408, coordinateY: 451, date: 11, fatalityName: 'DEEDEE PHINNEY' },
  { coordinateX: 408, coordinateY: 377, date: 13, fatalityName: 'GAYLA WILLMAR' },
  { coordinateX: 642, coordinateY: 289, date: 16, fatalityName: 'LAKESHA SYMMES' },
  { coordinateX: 623, coordinateY: 279, date: 16, fatalityName: 'MAJORIE JENI' },
  { coordinateX: 95, coordinateY: 488, date: 17, fatalityName: 'DRUSILLA WARMAN' },
  { coordinateX: 75, coordinateY: 522, date: 18, fatalityName: 'LINETTE MOHWAWK' },
  { coordinateX: 269, coordinateY: 597, date: 26, fatalityName: 'PIERRE DORCEY' },
  { coordinateX: 389, coordinateY: 554, date: 28, fatalityName: 'BRAD SILVEIRA' },
  { coordinateX: 484, coordinateY: 549, date: 2, fatalityName: 'JULIANA ADVERSANE' },
  { coordinateX: 496, coordinateY: 484, date: 9, fatalityName: 'BRIDGET BROADVIEW' },
  { coordinateX: 546, coordinateY: 463, date: 14, fatalityName: 'LESLEY MONKSFORD' },
  { coordinateX: 538, coordinateY: 359, date: 12, fatalityName: 'JESUS FORSLIN' },
  { coordinateX: 702, coordinateY: 412, date: 17, fatalityName: 'TU DAVISWOOD' },
  { coordinateX: 817, coordinateY: 474, date: 18, fatalityName: 'KITTY THAXTER' }
];


function preload() {
  countyMap = loadImage("map.png")
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);

  image(countyMap, 0, 0);

  //add your code below here
  for (let i = 0; i < caseyFryLog_Point_X.length; i++) {
    //Draw Fry Sightings
    //Indigo stroke
    stroke(75, 0, 130);
    noFill();
    ellipse(caseyFryLog_Point_X[i], caseyFryLog_Point_Y[i], 5);

    for (let j = 0; j < attackData.length; j++) {
      
      //Draw Attack Data 
      if(i == 0){
        
        //RoyalBlue Fill
        fill(65, 105, 225);
        noStroke();
        triangle(
          attackData[j].coordinateX,
          attackData[j].coordinateY - 5,
          
          attackData[j].coordinateX - 5,
          attackData[j].coordinateY + 5,
          
          attackData[j].coordinateX + 5,
          attackData[j].coordinateY + 5          
          );

      }

      var distance = dist(caseyFryLog_Point_X[i], caseyFryLog_Point_Y[i], attackData[j].coordinateX, attackData[j].coordinateY);
      
      if(distance < 40 && abs(caseyFryLog_date[i]  - attackData[j].date) <= 3){
        var relation = { 
          suspect_x: caseyFryLog_Point_X[i], 
          suspect_y: caseyFryLog_Point_Y[i],
          crime_x: attackData[j].coordinateX, 
          crime_y: attackData[j].coordinateY, 
          victimName: attackData[j].fatalityName};
          possibleMatches.push(relation);
      }
    }

  }




  // code to draw the matches ( if any)
  if(possibleMatches.length > 0){
    for (let i = 0; i < possibleMatches.length; i++) {
      stroke(127);
      strokeWeight(3);
      line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);
  
      noStroke();
      fill(127);
      text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
    }
  }
  }


//We are not using the draw function this time
