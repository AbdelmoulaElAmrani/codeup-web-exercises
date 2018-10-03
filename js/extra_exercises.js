var userAge = prompt("What is your age?");
if (userAge !== ""){
    prompt(userAge)
}
while(userAge === "") {
    prompt("What is your age I SAID?")
    break;
}

