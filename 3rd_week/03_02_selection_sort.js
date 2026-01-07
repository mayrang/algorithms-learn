let input = [4, 6, 2, 9, 1];

function selectionSort(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}

selectionSort(input);
console.log(input);

console.log("정답 = [1, 2, 4, 6, 9] / 현재 풀이 값 = ", selectionSort([4, 6, 2, 9, 1]));
console.log("정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ", selectionSort([3, -1, 17, 9]));
console.log("정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ", selectionSort([100, 56, -3, 32, 44]));
