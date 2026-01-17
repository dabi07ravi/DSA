function isArmstrongNumber(num) {
  const digits = num.toString().split('');
  const power = digits.length;
  let sum = 0

  for (i =0; i < power; i++){
      sum = sum + parseInt(digits[i]) ** power
  }

  // const sum = digits.reduce((acc, digit) => {
  //   return acc + Math.pow(Number(digit), power);
  // }, 0);

  return sum === num;
}

// Test
console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(370)); // true
console.log(isArmstrongNumber(123)); // false
