let input = "abcba";

function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  } else if (string[0] !== string[string.length - 1]) {
    return false;
  }
  return isPalindrome(string.slice(1, string.length - 1));
}

console.log(isPalindrome(input));
