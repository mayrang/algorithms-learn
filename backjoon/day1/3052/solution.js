let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n").map(Number);
let result = 0;
let array = new Array(42).fill(0);
for (let i = 0; i < input.length; i++) {
  array[input[i] % 42] += 1;
}

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    result += 1;
  }
}
console.log(result);
