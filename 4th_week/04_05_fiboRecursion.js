let input = 20;

function fiboRecursion(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fiboRecursion(n - 1) + fiboRecursion(n - 2);
}

console.log(fiboRecursion(input)); // 6765
