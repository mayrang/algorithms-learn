let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n").map(Number);
let result = [];
let array = new Array(30).fill(0);
for (let i = 0; i < input.length; i++) {
  array[input[i] - 1] = 1;
}

for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) {
    console.log(i + 1);
  }
}
console.log(result.join(" "));
