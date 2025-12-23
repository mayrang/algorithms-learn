function find_max_plus_or_multiply(array) {
  let value = array[0];
  for (let i = 1; i < array.length; i++) {
    if (value <= 1 || array[i] <= 1) {
      value += array[i];
    } else {
      value *= array[i];
    }
  }
  return value;
}

result = find_max_plus_or_multiply;
console.log("정답 = 728 현재 풀이 값 =", result([0, 3, 5, 6, 1, 2, 4]));
console.log("정답 = 8820 현재 풀이 값 =", result([3, 2, 1, 5, 9, 7, 4]));
console.log("정답 = 270 현재 풀이 값 =", result([1, 1, 1, 3, 3, 2, 5]));
