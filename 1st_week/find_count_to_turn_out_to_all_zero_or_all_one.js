let input = "01111001101010";

function find_count_to_turn_out_to_all_zero_or_all_one(string) {
  let array = Array(2).fill(0);
  array[parseInt(string[0])] += 1;
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] !== string[i + 1]) {
      array[parseInt(string[i + 1])] += 1;
    }
  }
  return array[0] >= array[1] ? array[1] : array[0];
}

let result = find_count_to_turn_out_to_all_zero_or_all_one(input);
console.log(result);
