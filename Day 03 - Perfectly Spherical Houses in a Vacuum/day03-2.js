var input = require('fs').readFileSync('input.txt', 'utf8').trim();

// Santa and Robot-Santa start at 0, 0 and have both made a delivery at their starting location, Santa moves first.
var santaX = 0, santaY = 0, roboX = 0, roboY = 0, deliveries = [[0, 0]], santaMoves = true;

// Because .indexOf doesn't work with a 2D array.
function isItemInArray(array, item) {
	for (var i = 0; i < array.length; i++) {
		if (array[i][0] == item[0] && array[i][1] == item[1]) return true;
	}
	return false;
}

// How many houses receive at least one present?
for (var i = 0; i <= input.length; i++) {
	// Who moves?
	if (santaMoves) {
		// Move Santa.
		santaX += (input[i] == '<') ? 1 : (input[i] == '>') ? -1 : 0;
		santaY += (input[i] == '^') ? 1 : (input[i] == 'v') ? -1 : 0;

		// Record the delivery if it's unique.
		if (!isItemInArray(deliveries, [santaX, santaY])) deliveries.push([santaX, santaY]);
	} else {
		// Move Robo-Santa.
		roboX += (input[i] == '<') ? 1 : (input[i] == '>') ? -1 : 0;
		roboY += (input[i] == '^') ? 1 : (input[i] == 'v') ? -1 : 0;

		// Record the delivery if it's unique.
		if (!isItemInArray(deliveries, [roboX, roboY])) deliveries.push([roboX, roboY]);
	}

	// Flip it!
	santaMoves = !santaMoves;
};

console.log("Unique deliveries: " + deliveries.length);
