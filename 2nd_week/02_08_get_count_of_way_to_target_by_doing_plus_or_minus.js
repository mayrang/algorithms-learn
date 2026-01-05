let allWays = [];

function getCountOfWaysToTargetByDoingPlusOrMinus(array, target) {
  allWays = [];
  getAllWaysByDoingPlusOrMinus(array, 0, 0);

  let targetCount = 0;

  for (const way of allWays) {
    if (target === way) {
      targetCount += 1;
    }
  }

  return targetCount;
}

function getAllWaysByDoingPlusOrMinus(array, currentIndex, currentSum) {
  if (currentIndex === array.length) {
    allWays.push(currentSum);
    return;
  }
  getAllWaysByDoingPlusOrMinus(array, currentIndex + 1, currentSum + array[currentIndex]);
  getAllWaysByDoingPlusOrMinus(array, currentIndex + 1, currentSum - array[currentIndex]);
}

// Main execution
const numbers = [1, 1, 1, 1, 1];
const targetNumber = 3;

console.log(getCountOfWaysToTargetByDoingPlusOrMinus(numbers, targetNumber)); // 5를 반환해야 합니다!
