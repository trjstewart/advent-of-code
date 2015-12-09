var input = require('fs').readFileSync('input.txt', 'utf8').trim();

// Import an MD5 NPM Module and set hash to false and create and itterator.
var md5 = require("blueimp-md5").md5, hash = false, i = 0;

while (!hash) {
	i++;
	hash = /^0{5}/.test(md5(input+i));
}

console.log("lowest positive number that produces an MD5 hash with 5 leading zeroes is: " + i);
