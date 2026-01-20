let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

console.log(input[0].charCodeAt(0));
