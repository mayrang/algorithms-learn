let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let array = new Array(n).fill(0);
for (let i = 1; i < m + 1; i++) {
  let [start, end, k] = input[i].split(" ").map(Number);
  array.fill(k, start - 1, end);
}
console.log(array.join(" "));
