let input = "abadabac";
function find_not_repeating_first_character(string) {
  let alphabetArray = Array(26).fill(0);
  for (let i = 0; i < string.length; i++) {
    let index = string[i].charCodeAt(0) - "a".charCodeAt(0);
    alphabetArray[index] += 1;
  }

  for (let i = 0; i < string.length; i++) {
    let index = string[i].charCodeAt(0) - "a".charCodeAt(0);
    if (alphabetArray[index] === 1) {
      return String.fromCharCode(index + "a".charCodeAt(0));
    }
  }
  return "_";
}

result = find_not_repeating_first_character;
console.log("정답 = d 현재 풀이 값 =", result("abadabac"));
console.log("정답 = c 현재 풀이 값 =", result("aabbcddd"));
console.log("정답 =_ 현재 풀이 값 =", result("aaaaaaaa"));
