let topHeight = [6, 9, 5, 7, 4];

function getReceiverTopOrders(heights) {
  let array = new Array(heights.length).fill(0);
  let heightsStack = [...heights];

  while (heightsStack.length !== 0) {
    let height = heightsStack.pop();
    let currentIndex = heightsStack.length;

    for (let i = currentIndex - 1; i >= 0; i--) {
      if (height <= heightsStack[i]) {
        array[currentIndex] = i + 1;
        break;
      }
    }
  }
  return array;
}

console.log(getReceiverTopOrders(topHeight));

console.log("정답 = [0, 0, 2, 2, 4] / 현재 풀이 값 = ", getReceiverTopOrders([6, 9, 5, 7, 4]));
console.log("정답 = [0, 0, 2, 3, 3, 3, 6] / 현재 풀이 값 = ", getReceiverTopOrders([3, 9, 9, 3, 5, 7, 2]));
console.log("정답 = [0, 0, 2, 0, 0, 5, 6] / 현재 풀이 값 = ", getReceiverTopOrders([1, 5, 3, 6, 7, 6, 5]));
