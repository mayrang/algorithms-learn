let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
//let line1 = Number(input[0]);
let line2 = input[1].split(" ").map(Number);
let value = Number(input[2]);

let result = 0;
for (let i = 0; i < line2.length; i++) {
  if (line2[i] === value) {
    result += 1;
  }
}
console.log(result);
