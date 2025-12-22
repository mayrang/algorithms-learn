function is_number_exist(number, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return true;
    }
  }
  return false;
}

result = is_number_exist;
console.log("정답 = True 현재 풀이 값 =", result(3, [3, 5, 6, 1, 2, 4]));
console.log("정답 = Flase 현재 풀이 값 =", result(7, [6, 6, 6]));
console.log("정답 = True 현재 풀이 값 =", result(2, [6, 9, 2, 7, 1888]));
