function summarize_string(input_str) {
  let string_result = `${input_str[0]}1`;
  let string = input_str[0];
  for (let i = 0; i < input_str.length - 1; i++) {
    if (input_str[i] !== input_str[i + 1]) {
      string_result = `${string_result}/${input_str[i + 1]}1`;
    } else {
      string_result = `${string_result.slice(0, string_result.length - 1)}${
        parseInt(string_result[string_result.length - 1]) + 1
      }`;
    }
  }
  return string_result;
}

input_str = "acccdeee";

console.log(summarize_string(input_str));
