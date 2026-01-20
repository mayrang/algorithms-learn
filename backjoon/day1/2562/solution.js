let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n").map(Number);

let max = input[0];
let index = 1;
for (let i = 1; i < input.length; i++) {
  if (input[i] > max) {
    index = i + 1;
    max = input[i];
  }
}
console.log(max);
console.log(index);
