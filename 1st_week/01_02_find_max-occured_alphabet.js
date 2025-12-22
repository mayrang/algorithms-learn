function find_max_occurred_alphabet(string) {
  let array = Array(26).fill(0);
  for (let i = 0; i < string.length; i++) {
    if (isAlpha(string[i])) {
      array[string[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
  }

  let index = 0;
  let max_occured_alphabet_index = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max_occured_alphabet_index < array[i]) {
      max_occured_alphabet_index = array[i];
      index = i;
    }
  }

  return String.fromCharCode(index + "a".charCodeAt(0));
}

function isAlpha(char) {
  return /^[A-Z]$/i.test(char);
}

result = find_max_occurred_alphabet;
console.log("정답 = i 현재 풀이 값 =", result("hello my name is dingcodingco"));
console.log("정답 = e 현재 풀이 값 =", result("we love algorithm"));
console.log("정답 = b 현재 풀이 값 =", result("best of best youtube"));
