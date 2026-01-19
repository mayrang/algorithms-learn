let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

let array = new Array(n).fill(0).map((_, index) => index + 1);
for (let i = 1; i < m + 1; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  let temp = [];

  if (start !== 1) {
    temp = [...array.slice(0, start - 1)];
  }

  temp = [...temp, ...array.slice(start - 1, end).reverse()];

  if (end !== n) {
    temp = [...temp, ...array.slice(end)];
  }
  array = [...temp];
}

console.log(array);
