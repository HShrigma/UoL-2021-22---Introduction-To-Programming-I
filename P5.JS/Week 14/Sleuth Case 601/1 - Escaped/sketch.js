/*
Officer: 9737215
CaseNum: 601-0-13317581-9737215

Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Sienna fill ellipses at each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- fill
- ellipse()


*/

var countyMap;

//Sightings of Casey Fry.

var fugitiveLog = [
  { PositionX: 127, PositionY: 175 },
  { PositionX: 156, PositionY: 158 },
  { PositionX: 179, PositionY: 192 },
  { PositionX: 200, PositionY: 154 },
  { PositionX: 220, PositionY: 133 },
  { PositionX: 228, PositionY: 168 },
  { PositionX: 249, PositionY: 149 },
  { PositionX: 269, PositionY: 139 },
  { PositionX: 292, PositionY: 168 },
  { PositionX: 321, PositionY: 133 },
  { PositionX: 354, PositionY: 159 },
  { PositionX: 390, PositionY: 144 },
  { PositionX: 396, PositionY: 225 },
  { PositionX: 429, PositionY: 228 },
  { PositionX: 456, PositionY: 230 },
  { PositionX: 467, PositionY: 277 },
  { PositionX: 483, PositionY: 267 },
  { PositionX: 531, PositionY: 291 },
  { PositionX: 547, PositionY: 278 },
  { PositionX: 571, PositionY: 274 },
  { PositionX: 589, PositionY: 318 },
  { PositionX: 637, PositionY: 280 }
];


function preload() {
  countyMap = loadImage("map.png")
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);

  image(countyMap, 0, 0);

  //add your code below here
  for(var i = 0; i < fugitiveLog.length; i++){
    fill(160, 82, 45);
    noStroke();
    ellipse(fugitiveLog[i].PositionX, fugitiveLog[i].PositionY, 5);
  }

}

//We are not using the draw function this time
