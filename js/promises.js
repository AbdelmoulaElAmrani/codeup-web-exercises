"use strict";


//Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds.
let wait = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve()
        }, number);
    })
};

wait(1000).then(() => console.log('You\'ll see this after 1 secondsnd'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


const getGithubData = (username) => {

    let fetchRequest = fetch(`https://api.github.com/users/${username}/events`, {
        headers: {'Authorization': 'token 9051a9aee422b1d51aba2547f3e72836dcea3cdb'}

    });

    fetchRequest
        .then((response) => response.json())
        .then(data => console.log(data[0].created_at))
};

getGithubData('');



