"use strict";


var input;

do {
    input =prompt('enter an odd number between 50 and 1')
    if (input > 1 && input < 50 && input%2 === 1){
        break;
    }

}while (true);

for (var i = 1; i <= 50; i += 2) {

    if (i === parseFloat(input)) {
        console.log('Yikes! Skipping number: ' + input)
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    console.log('Here is an odd number: ' + i);
}