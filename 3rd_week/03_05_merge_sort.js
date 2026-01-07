let array = [5, 3, 2, 1, 6, 8, 7, 4];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else if (array.length === 0) {
    return [];
  }
  let n = array.length;

  let array1 = mergeSort(array.slice(0, parseInt(n / 2)));
  let array2 = mergeSort(array.slice(parseInt(n / 2), n));
  let mergeArray = merge(array1, array2);
  return mergeArray;
}

function merge(array1, array2) {
  let resultArray = new Array(array1.length + array2.length);
  let array1Index = 0;
  let array2Index = 0;
  let resultIndex = 0;
  while (array1Index < array1.length && array2Index < array2.length) {
    if (array1[array1Index] < array2[array2Index]) {
      resultArray[resultIndex++] = array1[array1Index];
      array1Index++;
    } else {
      resultArray[resultIndex++] = array2[array2Index];
      array2Index++;
    }
  }
  while (array1Index < array1.length) {
    resultArray[resultIndex++] = array1[array1Index];
    array1Index++;
  }
  while (array2Index < array2.length) {
    resultArray[resultIndex++] = array2[array2Index];
    array2Index++;
  }
  return resultArray;
}

console.log(mergeSort(array));

console.log("정답 = [-7, -1, 5, 6, 9, 10, 11, 40] / 현재 풀이 값 = ", mergeSort([-7, -1, 9, 40, 5, 6, 10, 11]));
console.log("정답 = [-1, 2, 3, 5, 10, 40, 78, 100] / 현재 풀이 값 = ", mergeSort([-1, 2, 3, 5, 40, 10, 78, 100]));
console.log("정답 = [-1, -1, 0, 1, 6, 9, 10] / 현재 풀이 값 = ", mergeSort([-1, -1, 0, 1, 6, 9, 10]));
