let array_a = [1, 2, 3, 5];
let array_b = [4, 6, 7, 8];

function merge(array1, array2) {
  let result = new Array(array1.length + array2.length);
  let resultIndex = 0;
  let array1Index = 0;
  let array2Index = 0;

  while (array1Index < array1.length && array2Index < array2.length) {
    if (array1[array1Index] < array2[array2Index]) {
      result[resultIndex++] = array1[array1Index];
      array1Index++;
    } else {
      result[resultIndex++] = array2[array2Index];
      array2Index++;
    }
  }

  while (array1Index < array1.length) {
    result[resultIndex++] = array1[array1Index];
    array1Index++;
  }

  while (array2Index < array2.length) {
    result[resultIndex++] = array2[array2Index];
    array2Index++;
  }

  return result;
}

console.log(merge(array_a, array_b));

console.log("정답 = [-7, -1, 5, 6, 9, 10, 11, 40] / 현재 풀이 값 = ", merge([-7, -1, 9, 40], [5, 6, 10, 11]));
console.log("정답 = [-1, 2, 3, 5, 10, 40, 78, 100] / 현재 풀이 값 = ", merge([-1, 2, 3, 5, 40], [10, 78, 100]));
console.log("정답 = [-1, -1, 0, 1, 6, 9, 10] / 현재 풀이 값 = ", merge([-1, -1, 0], [1, 6, 9, 10]));
