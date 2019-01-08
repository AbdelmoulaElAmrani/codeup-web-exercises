const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let usersWithThreeLang = users.filter( (user) => {
    return user.languages.length > 2 ;
});

// console.log(usersWithThreeLang);

let  usersEmails = users.map( (user) => {
    return user.email
})

// console.log(usersEmails);
// console.log(usersEmails);

let TotalUsersYears = users.reduce( (totalExp , user) => {
    return totalExp + user.yearsOfExperience;
},0);
// console.log(TotalUsersYears);
let avrage = TotalUsersYears / users.length

// console.log(avrage);

let longestEmail = users.reduce((longest, user) => {
    return user.email.length >= longest.email.length ? user : longest;
});
longestEmail =longestEmail.email;

let strNames = users.reduce( (str , user) => {
     return str  + user.name +', '
},'Your instractors are : ');
// console.log(strNames);


