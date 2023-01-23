// Get my html elements 
let sliderInput = document.getElementById("sliderInput");
let displayCost = document.getElementById("displayCost")
let displayPageViews = document.getElementById("displayPageViews");
let discountSwitch = document.getElementById("discountSwitch");
let isDiscount = false;
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
  if(isDiscount) {
    cost = sliderValue * discountPercent;
  }else {
    cost = sliderValue;
  }
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
  isDiscountToggle();
})

function isDiscountToggle() {
isDiscount = !isDiscount;
if(isDiscount){
  cost = sliderValue * discountPercent;
}
else {
  cost = sliderValue
}
displayCost.innerHTML = cost;
}

