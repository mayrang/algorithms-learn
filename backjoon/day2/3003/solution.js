let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let inputArray = input[0].split(" ").map(Number);
let answerArray = [1, 1, 2, 2, 2, 8];
let resultArray = new Array(6).fill(0);
for (let i = 0; i < inputArray.length; i++) {
  resultArray[i] = answerArray[i] - inputArray[i];
}

console.log(resultArray.join(" "));
