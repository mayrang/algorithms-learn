let finding_target = 14;
let finding_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function isExistingTargetNumberBinary(target, array) {
  let currentMin = 0;
  let currentMax = array.length - 1;
  let currentGuess = Math.floor((currentMin + currentMax) / 2);

  let findCount = 0;

  while (currentMin <= currentMax) {
    findCount += 1;
    if (array[currentGuess] === target) {
      console.log(findCount);
      return true;
    } else if (array[currentGuess] < target) {
      currentMin = currentGuess + 1;
    } else {
      // array[currentGuess] > target
      currentMax = currentGuess - 1;
    }
    currentGuess = Math.floor((currentMin + currentMax) / 2);
  }

  return false;
}

let result = isExistingTargetNumberBinary(finding_target, finding_numbers);
console.log(result);
