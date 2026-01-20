let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let line1 = Number(input[0]);
let line2 = input[1].split(" ").map(Number);
let min = line2[0];
let max = line2[0];

for (let i = 1; i < line2.length; i++) {
  if (line2[i] < min) {
    min = line2[i];
  }
  if (line2[i] > max) {
    max = line2[i];
  }
}
console.log(`${min} ${max}`);
