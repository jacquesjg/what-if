const prompt = require('prompt-sync')();
const number = prompt('Please enter a ber from 1 through 7');

if (number === '1')
    {
        console.log('Monday')
} else if (number === '2')
{
    console.log('Tuesday')
} else if (number === '3')
{
    console.log('Wednesday')
} else if (number === '4')
{
    console.log('Thursday')
} else if (number === '5')
{
    console.log('Friday')
} else if (number === '6')
{
    console.log('Saturday')
} else if (number === '7')
{
    console.log('Sunday')
}

else {
    console.log('Please enter a valid number from 1 to 7.')
}
