//1
let tellFortune = function (numOfChildren, nameOfPartner, location, job) {let future = "You will be a " + job + " in " + location + ", and married to " + nameOfPartner + " with " + numOfChildren + " kids."
console.log(future);
};

tellFortune(3, 'Jerry', 'New York', 'designer');
tellFortune(1, 'Kate', 'Melburn', 'actress');
tellFortune(0, 'Rooney', 'Boston', 'singer');


//2
let calculateDogAge = function (yourDogAge, yourAge) {
return 'Your doggie is ' + yourDogAge * 7  + ' years old in dog years! And you would be ' + Math.round(yourAge/7) + ' years old if you were a dog!'
}

console.log(calculateDogAge(7, 21));
console.log(calculateDogAge(11, 36));
console.log(calculateDogAge(3, 85));


//3
let calculateSupply = function (age, numPerDay) {
const maxAge = 120; 
const totalNeeded = Math.round(numPerDay * 365 * (maxAge - age));
let message = 'You will need ' + totalNeeded + ' of chocolate bars to last you until the ripe old age of ' + maxAge + '.' 
console.log(message);
};


calculateSupply(25, 2.2);
calculateSupply(11, 1.9);
calculateSupply(54, 4,21);