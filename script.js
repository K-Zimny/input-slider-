let sliderInput = document.getElementById("sliderInput");
let displayCost = document.getElementById("displayCost")
let displayPageViews = document.getElementById("displayPageViews");
let discountSwitch = document.getElementById("discountSwitch");
let switchState = false;

let sliderValue = sliderInput.value;


displayCost.innerHTML = sliderInput.value
displayPageViews.innerHTML = sliderValue * 6.25

sliderInput.addEventListener("input", function(){

  if(switchState === true) {
    sliderValue = sliderInput.value;
    displayCost.innerHTML = sliderValue * .75
    displayPageViews.innerHTML = sliderValue * 6.25
  }
  else {
    sliderValue = sliderInput.value;
    displayCost.innerHTML = sliderValue
    displayPageViews.innerHTML = sliderValue * 6.25
    console.log(sliderValue)
  }
})

discountSwitch.addEventListener("input", function(){
  switchState = !switchState;
  console.log(`Switch state: ${switchState}`)
  if (switchState) {
    sliderValue = sliderInput.value;
    displayCost.innerHTML = sliderValue * .75
  } else {
    sliderValue = sliderInput.value;
    displayCost.innerHTML = sliderValue
  }
});



