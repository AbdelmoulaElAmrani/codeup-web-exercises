"user Strict"

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userFavoriteColor = prompt('What is your favorite color?');

alert('Your favorite Color is : ' + userFavoriteColor);

// The third exercise

var dayTotalQuestion = "How many days you rent The movie ";



var totalDaysForTheLittleMermaid = prompt(dayTotalQuestion +"The Little Mermaid?");
var totalDaysForTheLittleMermaid = parseInt(totalDaysForTheLittleMermaid);
console.log(totalDaysForTheLittleMermaid);



var totalDaysForBrotherBear = prompt(dayTotalQuestion + "Brother Bear?");
var totalDaysForBrotherBear = parseInt(totalDaysForBrotherBear);
console.log(totalDaysForBrotherBear);

var totalDaysForHercules = prompt(dayTotalQuestion + "Hercules?");
var totalDaysForHercules = parseInt(totalDaysForHercules);
console.log(totalDaysForHercules);

var costForRentPerDayDollars = prompt("What is the cost of renting per day in dollars please!");
var costForRentPerDayDollars =parseInt(costForRentPerDay);
console.log(costForRentPerDayDollars);

var totalCost;
totalCost = console.log((totalDaysForBrotherBear + totalDaysForHercules + totalDaysForTheLittleMermaid)* costForRentPerDayDollars +"$");
alert("Your total cost gonna be :"+ totalCost)
