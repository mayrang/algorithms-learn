let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let array = new Array(n).fill(0).map((_, i) => i + 1);
for (let i = 1; i < m + 1; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  let temp = array[start - 1];
  array[start - 1] = array[end - 1];
  array[end - 1] = temp;
}
console.log(array.join(" "));
