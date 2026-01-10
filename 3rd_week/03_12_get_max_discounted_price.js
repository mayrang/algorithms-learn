let shop_prices = [30000, 2000, 1500000];
let user_coupons = [20, 40];

function getMaxDiscountedPrice(prices, coupons) {
  const sortedPrices = mergeSort(prices);
  const sortedCoupons = mergeSort(coupons);
  let pricesIndex = 0;
  let couponsIndex = 0;
  let result = 0;
  while (pricesIndex < sortedPrices.length && couponsIndex < sortedCoupons.length) {
    result += sortedPrices[pricesIndex++] * (1 - sortedCoupons[couponsIndex++] / 100);
  }
  while (pricesIndex < sortedPrices.length) {
    result += sortedPrices[pricesIndex++];
  }
  return parseInt(result);
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let array1 = mergeSort(array.slice(0, parseInt(array.length / 2)));
  let array2 = mergeSort(array.slice(parseInt(array.length / 2)));
  return merge(array1, array2);
}

function merge(array1, array2) {
  let resultArray = new Array(array1.length + array2.length);
  let array1Index = 0;
  let resultIndex = 0;
  let array2Index = 0;

  while (array1Index < array1.length && array2Index < array2.length) {
    if (array1[array1Index] > array2[array2Index]) {
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

console.log("정답 = 926000 / 현재 풀이 값 = ", getMaxDiscountedPrice([30000, 2000, 1500000], [20, 40]));
console.log("정답 = 485000 / 현재 풀이 값 = ", getMaxDiscountedPrice([50000, 1500000], [10, 70, 30, 20]));
console.log("정답 = 1550000 / 현재 풀이 값 = ", getMaxDiscountedPrice([50000, 1500000], []));
console.log("정답 = 1458000 / 현재 풀이 값 = ", getMaxDiscountedPrice([20000, 100000, 1500000], [10, 10, 10]));
