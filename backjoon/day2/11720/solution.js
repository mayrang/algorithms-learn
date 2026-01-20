let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let n = Number(input[0]);
let longValue = input[1];
let result = 0;
for (let i = 0; i < n; i++) {
  result += Number(longValue[i]);
}

console.log(result);
