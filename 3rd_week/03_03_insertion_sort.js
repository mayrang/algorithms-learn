let input = [4, 6, 2, 9, 1];

function insertionSort(array) {
  let n = array.length;
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return array;
}

insertionSort(input);
console.log(input);

console.log("정답 = [4, 5, 7, 7, 8] / 현재 풀이 값 = ", insertionSort([5, 8, 4, 7, 7]));
console.log("정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ", insertionSort([3, -1, 17, 9]));
console.log("정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ", insertionSort([100, 56, -3, 32, 44]));
