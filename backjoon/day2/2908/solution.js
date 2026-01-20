let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let [n, m] = input[0].split(" ");
n = Number(n.split("").reverse().join(""));
m = Number(m.split("").reverse().join(""));
console.log(n > m ? n : m);
