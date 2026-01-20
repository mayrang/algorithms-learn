let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let result = 1;

for (let i = 0; i < input[0].length; i++) {
  console.log("1" + input[0][i] + "1" + result);
  if (input[0][i] === " ") {
    result += 1;
  }
}
console.log(input[0].length === 0 ? 0 : result);
