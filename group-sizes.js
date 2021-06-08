const prompt = require('prompt-sync')();
let classy = prompt('Please enter the size of the class.  ');
classy = Number(classy);

const groupsOfThree = Math.round((classy / 3));
const remainder = (classy % 3);

console.log('There are', groupsOfThree, 'groups of three students and', remainder, 'students not assigned to a group of three.')


