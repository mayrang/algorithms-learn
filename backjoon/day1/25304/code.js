let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
console.log(input);
let line1 = Number(input[0]);
let line2 = Number(input[1]);
let sum = 0;
for (let i = 2; i < line2 + 2; i++) {
  let line = input[i].split(" ").map(Number);
  let price = line[0];
  let count = line[1];
  sum += price * count;
}
console.log(sum === line1 ? "Yes" : "No");
