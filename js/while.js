"use strict";

var x = 2;
while (x <= 65536){
    console.log(x);
    x = x * 2;
}
//ice cream
var allCones = Math.floor(Math.random() * 50) + 50;

do {
    // State how many cones I have to sell
    console.log("I have " + allCones + " cone(s) to sell.");
    // random variable coneSold from 1-5
    var conesSold = Math.floor(Math.random() * 5) + 1;
    if (conesSold <= allCones) {
        allCones = allCones - conesSold;
        console.log("Yes! I just sold " + conesSold + ".");
        if (allCones === 0) {
            console.log("Whoohoo! I sold all of my cones!");
        }
    } else {
        console.log("Sorry, I can't sell you " + conesSold + " because I only have " + allCones + ".");
    }
} while(allCones !== 0);