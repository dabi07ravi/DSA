function squareRoot(n) {
  let left = 1;
  let right = n;
  let res = null;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (mid * mid === n) {
      return mid;
    } else if (mid * mid > n) {
      right = mid - 1;
    } else {
      res = mid;
      left = mid + 1;
    }
  }

  return res;
}

console.log(squareRoot(35));
