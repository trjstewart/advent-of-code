var input = require('fs').readFileSync('input.txt', 'utf8').trim();

// Santa starts at 0, 0 and has made a delivery at his starting location.
var x = 0, y = 0, deliveries = [[0, 0]];

// Because .indexOf doesn't work with a 2D array.
function isItemInArray(array, item) {
	for (var i = 0; i < array.length; i++) {
		if (array[i][0] == item[0] && array[i][1] == item[1]) return true;
	}
	return false;
}

// How many houses receive at least one present?
for (var i = 0; i <= input.length; i++) {
	// Move Santa to the next house.
	x += (input[i] == '<') ? 1 : (input[i] == '>') ? -1 : 0;
	y += (input[i] == '^') ? 1 : (input[i] == 'v') ? -1 : 0;

	// Record the delivery if it's unique.
	if (!isItemInArray(deliveries, [x, y])) deliveries.push([x, y]);
};

console.log("Unique deliveries: " + deliveries.length);
