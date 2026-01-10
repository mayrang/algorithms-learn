function isCorrectParenthesis(string) {
  let checkNum = 0;
  let array = string.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "(") {
      checkNum += 1;
    } else {
      checkNum -= 1;
    }

    if (checkNum < 0) {
      return false;
    }
  }

  return checkNum === 0 ? true : false;
}

console.log("정답 = True / 현재 풀이 값 = ", isCorrectParenthesis("(())"));
console.log("정답 = False / 현재 풀이 값 = ", isCorrectParenthesis(")"));
console.log("정답 = False / 현재 풀이 값 = ", isCorrectParenthesis("((())))"));
console.log("정답 = False / 현재 풀이 값 = ", isCorrectParenthesis("())()"));
console.log("정답 = False / 현재 풀이 값 = ", isCorrectParenthesis("((())"));
