const prompt = require('prompt-sync')();
let age = prompt('Please enter your age.  ');
age = Number(age);


// useless in life

if (age < 16) {
console.log("You can't drive.  ") }

// drive

else if ( age === 16 || age === 17) {
    console.log("You can drive but not vote.  ") 
}

// vote

else if ( age > 17 && age < 25) {
    console.log("You can vote but not rent a car.  ") 
}

// rent a car

else if  ( (age === 25) || age > 25) {
    console.log("The world is yours baby!  ")
}