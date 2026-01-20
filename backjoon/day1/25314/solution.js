let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let line1 = Number(input[0]);

let result = "int";
while (line1 > 0) {
  result = "long " + result;
  line1 -= 4;
}
console.log(result);
