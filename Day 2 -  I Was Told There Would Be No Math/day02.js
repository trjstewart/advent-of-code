// Why can't they be nice and give me data in JSON :(
var input = require('fs').readFileSync('input.txt', 'utf8').trim().split('\n').map(line => line.trim().split('x'));

// How much Wrapping Paper and Ribbon should they order?
var wrappingPaper = 0, ribbon = 0;

// Lets calculate the surface area and smallest side of each box.
input.forEach(function(box) {
	//Turn those pesky stings into ints.
	box[0] = parseInt(box[0]);
	box[1] = parseInt(box[1]);
	box[2] = parseInt(box[2]);

	// Some values for the box.
	var length = box[0];
	var width = box[1];
	var height = box[2];

	// Calculate some areas.
	var lengthWidth = length * width;
	var widthHeight = width * height;
	var heightLength = height * length;

	// Calculate and add the total surface area and the area of the smallest side.
	wrappingPaper += ((2 * lengthWidth) + (2 * widthHeight) + (2 * heightLength)) + (Math.min(lengthWidth, widthHeight, heightLength));

	// Calculate and add smallest perimeter and volume.
	ribbon += (Math.min(((length + height) * 2), ((width + height) * 2), ((length + width) * 2))) + (length * width * height);
});

console.log("Wrapping Paper: " + wrappingPaper);
console.log("Ribbon: " + ribbon);
