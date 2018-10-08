"use strict";

/**
 * TODO:
 *
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

// function sayHello(name) {
//     var output = 'Hello, '+ name +'!';
//
//     return output;
// }
//
// var helloMessage;
// helloMessage = console.log(sayHello('pibo'));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
// var myName = "Abdelmoula";
// console.log(sayHello(myName));
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
 var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
// function isTwo (number) {
//     var output ;
//     output = number === 2 ;
//     return output;
// }
// console.log(isTwo(random));
// console.log(random);
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
// function calculateTip (tipPercentage , total) {
//     var output;
//     output = tipPercentage * total ;
//      return output;
// }
// // console.log(tipPercentage);
//
// var anotherBill = prompt("please enter your bill amount");
// var anotherTipPercentage = prompt("please enter your tip percentage");
// alert(calculateTip(anotherBill , anotherTipPercentage))
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
// function applyDiscount( originalPrice , discountPercentage) {

//     var output ;
//     output= orginalPrice * discountPercentage ;
//     return output;
// }
// console.log(applyDiscount())

//extra functions exercises
// ================ SIMPLE FUNCTION DRILLS

// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())

// function returnTwo() {
//     return 2;
// }
// console.log(returnTwo());

// 2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())

// function returnName() {
//     return "My name";
// }
// console.log(returnName());

// 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// ---Test this function with console.log(addThree(5))

// function addThree(number) {
//     var three = 3;
//     var output;
//     output = number + three;
//     return output;
// }
// console.log(addThree(5));

// 4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())

// function sayString() {
//     return "Hello Human";
// }
// console.log(sayString());

// 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
// ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value
//
//WROOOONG
// function sayHowdy(howdy) {
// var howdy = "Howdy!";
// }
// console.log(sayHowdy());
// ================ CHALLENGE FUNCTION DRILLS

// Write a function called `identity(input)` that takes in an argument called input and returns that input.

// function identity(input) {
// var input = "Helllo";
// return input;
// }
// console.log(identity())

// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that function call.
//
// function getRandomNumber(min, max) {
//     min = 40;
//     max = 500;
//     return Math.random() * (max - min) + min;
// }
// console.log(getRandomNumber());

// Write a function called `first(input)` that returns the first character in the provided string.
//
// function first(input) {
// var output;
// output = input.charAt(0);
// return output;
// }
// console.log(first('hohoho'));

// Write a function called `last(input)` that returns the last character of a string

// Write a function called `rest(input)` that returns everything but the first character of a string.

// Write a function called `reverse(input)` that takes a string and returns it reversed.

// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.

// Write a function called `count(input)` that takes in a string and returns the number of characters.

// Write a function called `add(a, b)` that returns the sum of a and b
// function add(a , b) {
//
//      var output;
//      output = a + b;
//      return output;
// }
// console.log(add(4 ,4));
// Write a function called `subtract(a, b)` that return the difference between the two inputs.

// Write `multiply(a, b)` function that returns the product

// Write a divide(numerator, denominator) function that returns a divided by b

// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`

// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.
// function square(a) {
//     return a * a ;
// }
// console.log(square(3));
// # Super Duper Gold-Star Bonus
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators

// function somOfSquares(a , b) {
//     add()
//     square()
// }
// console.log(somOfSquares(4 ,4));
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.

//
// var x = 6 ;
// var y = 6;
// var add = x + y;
// var multiply = x * y;
// // var operator = add , multiply;
// function doMath(operator , x , y) {
//
//         return operator;
// }
// console.log(doMath());

// --------------------------------------

// //Extra Extra Extra bonuses
// Make a function named isOdd(number)
//
// function isOdd(number) {
//     if (number%2 == 0)
//         return "not its not";
//     else
//         return "yes its odd";
// }

// Make a function named isEven(number)

// function isOdd(number) {
//     if (number%2 == 0) {
//         return "yes its odd";
//     }else
//     {    return "not its not";
// }
// }

// Make a function named identity(input) that returns the input exactly as provided.

// function identity(input) {
//
//     return input ;
// }
//
// console.log(identity("hhhhh"));

//     Make a function named isFive(input)
// function isFive(input) {
//     if (input === 5){
//         return "yes its Five"
//     }else{
//         return "not its not five"
//     }
// }
// Make a function named addFive(input) that adds five to some input.
// function addFive(input) {
//     return input+5;
// }
//     Make a function named isMultipleOfFive(input)
// function isMultipleOfFive(input) {
//     if (input%5 == 0) {
//         return "yes its a multiple of 5";
//     }else
//     {    return "not its not";
// }
//
// }
// Make a function named isThree(input)
// function isThree(input) {
//         if (input === 3){
//             return True;
//         }else {
//             return false
//         }
// }
// Make a function named isMultipleOfThree(input)
// function isMultipleOfThree(input) {
//     if (input%3 == 0) {
//         return "yes its a multiple of 3";
//     }else
//     {    return "not its not";
// }
// }
// Make a function named isMultipleOfThreeAndFive(input)
// function isMultipleOfThreeAndFive(input) {
//     if (input%3 == 0 && input%5 === 0) {
//         return "yes its a multiple of 3 and 5";
//     }else
//     {    return "not its not";
// }
// }
// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
// function isMultipleOf(target, n) {
//         if (target%n ===0){
//             return true
//         }else{
//             return false;
//         }
//}



// 1) Create a function that will return how many whitespace characters are
// at the beginning and end of a string.
// function calcWhiteSpaceAtBeginningAndEnd(string) {
//     var length = string.length;
//     var trimTheStr = string.trim();
//     var afterTrim = trimTheStr.length;
//     var output = length - afterTrim;
//     return output;
// }
//
// console.log(calcWhiteSpaceAtBeginningAndEnd('  jkhbdvij jsdbld ljbdjl  '));
//
// 2) Create a function that takes in two string inputs. If the second string input is present
// in the first, return the first input string with the second input string removed from it.
//     If the second string input is present multiple times in the first,
//     the second string will only be removed where it first occurs in the first string.
//     If the second string input is not present in the first,
// return the first string as entered in the function.
