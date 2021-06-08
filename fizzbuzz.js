const prompt = require('prompt-sync')();
let userInput = prompt('Enter a number  ');
userInput = Number(userInput);

//
if ( (userInput % 3) === 0 ){
    console.log('fizz')
}

if ( (userInput % 5) === 0 ){
    console.log('buzz')
}
