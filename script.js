// Get my html elements 
let sliderInput = document.getElementById("sliderInput");
let displayCost = document.getElementById("displayCost")
let displayPageViews = document.getElementById("displayPageViews");
let discountSwitch = document.getElementById("discountSwitch");

// let switchState = false;

let sliderValue = sliderInput.value;

//Discount and multiplier 
discountPercent = .75;
pageMultiplier = 6.25

// Set up cost vars
let discountCost = sliderValue * discountPercent;
let cost = sliderValue;
let pageViews = sliderValue * pageMultiplier;

//set up initial displays 
displayCost.innerHTML = cost;
displayPageViews.innerHTML = pageViews;

//add eventlistener on slider input
sliderInput.addEventListener("input", function(){
  updateCostDisplay();
  updatePageViewsDisplay();
});

//Update the display with cost
function updateCostDisplay() {
  sliderValue = sliderInput.value;
  cost = sliderValue;
  displayCost.innerHTML = cost;
}

//Update the display with pageviews
function updatePageViewsDisplay() {
  sliderValue = sliderInput.value;
  pageViews = sliderValue * pageMultiplier;
  displayPageViews.innerHTML = pageViews;
}

// Discount Input code
discountSwitch.addEventListener('click', function(){
  isDiscount();
})

function isDiscount() {
sliderValue = sliderInput.value;
cost = sliderValue * discountPercent;
displayCost.innerHTML = cost;
}










// displayCost.innerHTML = sliderInput.value
// displayPageViews.innerHTML = sliderValue * 6.25

// sliderInput.addEventListener("input", function(){

//   if(switchState === true) {
//     sliderValue = sliderInput.value;
//     displayCost.innerHTML = discountCost
//     displayPageViews.innerHTML = sliderValue * 6.25
//   }
//   else {
//     sliderValue = sliderInput.value;
//     displayCost.innerHTML = sliderValue
//     displayPageViews.innerHTML = sliderValue * 6.25
//     console.log(sliderValue)
//   }
// })

// discountSwitch.addEventListener("input", function(){
//   switchState = !switchState;
//   console.log(`Switch state: ${switchState}`)
//   if (switchState) {
//     sliderValue = sliderInput.value;
//     displayCost.innerHTML = discountCost
//   } else {
//     sliderValue = sliderInput.value;
//     displayCost.innerHTML = sliderValue
//   }
// });



