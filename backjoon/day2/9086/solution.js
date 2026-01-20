let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let n = Number(input[0]);

for (let i = 1; i < n + 1; i++) {
  let str = input[i];
  console.log(`${str[0]}${str[str.length - 1]}`);
}
