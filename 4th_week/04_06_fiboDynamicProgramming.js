let input = 50;

let memo = {
  1: 1,
  2: 1,
};

function fiboDynamicProgramming(n, fibo_memo) {
  let val1 = fibo_memo?.[n - 1] ?? fiboDynamicProgramming(n - 1);
  let val2 = fibo_memo?.[n - 2] ?? fiboDynamicProgramming(n - 2);
  fibo_memo[n - 1] = val1;
  fibo_memo[n - 2] = val2;
  return val1 + val2;
}

console.log(fiboDynamicProgramming(input, memo));
