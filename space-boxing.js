const prompt = require('prompt-sync')();
let weight = prompt('Please enter Earth weight  ');

// why does weight get repeated twice below?
weight = Number(weight);

console.log('| # |	Planet	| Relative gravity | \n | --- | --- | --- | \n | 1 |	Venus |',	Math.round(100*(0.78 * weight))/100, '| \n | 2 |	Mars  |', Math.round(100*(0.39 * weight))/100, '| \n | 3 |	Jupiter |',	Math.round(100*(2.65 * weight))/100, '| \n | 4 |	Saturn |', Math.round(100*(1.17 * weight))/100, '| \n | 5 |	Uranus |', Math.round(100*(1.05 * weight))/100, '| \n | 6 |	Neptune |',	Math.round(100*(1.23 * weight))/100, '| ')