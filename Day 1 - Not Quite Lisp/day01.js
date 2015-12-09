var input = require('fs').readFileSync('input.txt', 'utf8').trim();
var floor = 0, basement = false;

for (var i = 0; i <= input.length; i++) {
	// Calculate each step Santa takes.
	floor += (input[i] == "(") ? 1 : (input[i] == ")") ? -1 : 0;

	// Find the floor at which Santa first enters the basement.
	if (floor == -1 & basement == false) { basement = i + 1; }
}

console.log("Santa will be taken to floor: " + floor);
console.log("Santa will first enter the basement on step: " + basement);
