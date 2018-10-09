"use strict";


function showMultiplicationTable(i) {
    var output = i * 7;
    return i + " * 7 = " +output;
}
for (i = 1; i <= 10; i++){
    console.log(showMultiplicationTable(i));
}


exercise 5

for (i = 100; i > 1; i-5){
    console.log(i);
}

exercise 3


for (var x = 1; x <= 9; x += 1){
    var Number = Math.floor(Math.random() * 150) + 50;

        if (Number%2 ===0){
            console.log(Number + ' Is Even')
        } else {
            console.log(Number +' Is Odd')
        }
        break;
}

exercise 4

for (var x = 1; x <= 9; x += 1){

    console.log(x.toString().repeat(x));

}

exercise 5

for (i = 100 ; i >=  5 ; i -=5){
    console.log(i);
}
