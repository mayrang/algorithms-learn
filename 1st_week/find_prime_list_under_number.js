let input = 20;

function find_prime_list_under_number(number) {
  let is_prime = true;
  if (number < 2) {
    return [];
  } else if (number === 2) {
    return [2];
  }
  let prime_array = [2];
  for (let i = 3; i < number + 1; i++) {
    for (let j = 0; j < prime_array.length; j++) {
      if (prime_array[j] * prime_array[j] <= parseInt(i)) {
        break;
      }
      if (Number.isInteger(parseInt(i) / prime_array[j])) {
        is_prime = false;
        break;
      }
    }
    if (is_prime === true) {
      prime_array.push(i);
    } else {
      is_prime = true;
    }
  }
  return prime_array;
}

let result = find_prime_list_under_number(input);
console.log(result);
