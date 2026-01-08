let prices = [1, 2, 3, 2, 3];

function getPriceNotFallPeriods(prices) {
  let answer = new Array(prices.length).fill(0);
  let queuePrices = [];
  for (let price of prices) {
    queuePrices.push(price);
  }

  while (queuePrices.length !== 0) {
    let index = prices.length - queuePrices.length;
    let price = queuePrices.shift();

    for (let i = 0; i < queuePrices.length; i++) {
      answer[index] += 1;
      if (price <= queuePrices[i]) {
      } else {
        break;
      }
    }
  }
  return answer;
}

console.log(getPriceNotFallPeriods(prices));

console.log("정답 = [4, 3, 1, 1, 0] / 현재 풀이 값 = ", getPriceNotFallPeriods(prices));
console.log("정답 = [6, 2, 1, 3, 2, 1, 0] / 현재 풀이 값 = ", getPriceNotFallPeriods([3, 9, 9, 3, 5, 7, 2]));
console.log("정답 = [6, 1, 4, 3, 1, 1, 0] / 현재 풀이 값 = ", getPriceNotFallPeriods([1, 5, 3, 6, 7, 6, 5]));
