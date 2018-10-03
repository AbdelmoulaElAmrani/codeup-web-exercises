

(function () {

    function hasLetterA(input) {
    // first
    // if (input.indexOf("a") == -1) {
    //         return false;
    //     }
    // else {
    //     return true;
    // }
    //second solution
    // var output;
    // output = input.indexOf("a") !== -1;
    // return output;
    //third solution
    var output;
    output = input.indexOf("a") >= 0;
    return output;

}
console.log(hasLetterA("jojo"));

})();