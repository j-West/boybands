var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];

var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)

var loopCount = bands.length;

// Keep track of which band we're on in the loop

var currentBand = "";

// Keep track of which veggie we're on in the loop

var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands

var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables

var veggieElement = document.getElementById("vegetables");

// Moved variable declaration to outside loop so multiple variables do not get 
// created each time through loop, only value is changed

var boyBandP = "";
var vegetableP = "";


// Start looping

for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  // Add the band names into the correct <div>
  // Create block element to place currentBand in
	
	boyBandP = document.createElement("p");

	// Place the band at the current index of loopTracker's value into currentBand
  currentBand = bands[loopTracker];

  // Add the value of currentBand to the boyBandP paragraph
  boyBandP.innerHTML = currentBand;

  // Add newly created and filled <p> element to bandElement
  bandElement.appendChild(boyBandP);

  // Add the veggie names into the correct <div>
  // Create block element to place currentVeggie in
  
	vegetableP = document.createElement("p");

	// Place the vegetable at the current index of loopTracker's value into currentVeggie
  currentVeggie = vegetables[loopTracker];

  // Add the value of currentVeggie to the vegetableP paragraph
  vegetableP.innerHTML = currentVeggie;


  // Add newly created and filled <p> element to veggieElement
  veggieElement.appendChild(vegetableP);

}
