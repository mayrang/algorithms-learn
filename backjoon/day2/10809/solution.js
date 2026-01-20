let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let str = input[0];
let array = new Array(26).fill(-1);

for (let i = 0; i < str.length; i++) {
  array[str[i].charCodeAt(0) - "a".charCodeAt(0)] =
    array[str[i].charCodeAt(0) - "a".charCodeAt(0)] === -1 ? i : array[str[i].charCodeAt(0) - "a".charCodeAt(0)];
}

console.log(array.join(" "));
