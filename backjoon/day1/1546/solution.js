let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let n = Number(input[0]);
let values = input[1].split(" ").map(Number);

let sum = 0;
let m = values[0];
for (let i = 1; i < n; i++) {
  if (values[i] > m) {
    m = values[i];
  }
}
for (let i = 0; i < n; i++) {
  sum += (values[i] / m) * 100;
}

console.log(sum / n);
