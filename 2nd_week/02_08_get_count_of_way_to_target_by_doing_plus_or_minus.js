let numbers = [1, 1, 1, 1, 1];
let target_number = 3;

function getCountOfWaysToTargetByDoingPlusOrMinus(array, target) {
  let count = 0;
  const func = (index, currentSum) => {
    if (currentSum === target) {
      count += 1;
      return;
    } else if (index === array.length) {
      return;
    }
    currentSum += array[index];
    return func(index + 1, currentSum);
  };
  func(0, 0);
  return count;
}

console.log(getCountOfWaysToTargetByDoingPlusOrMinus(numbers, target_number));
