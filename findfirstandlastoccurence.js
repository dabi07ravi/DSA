function findFirst(a, t) {
  let low = 0;
  let high = a.length - 1;
  let ans = null;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (a[mid] === t) {
      ans = mid;
      high = mid - 1;
    } else if (a[mid] > t) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

function findLast(a, t) {
  let low = 0;
  let high = a.length - 1;
  let ans = null;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (a[mid] === t) {
      ans = mid;
      low = mid + 1;
    } else if (a[mid] > t) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

console.log(
  findFirst([1, 2, 3, 3, 3, 6, 7], 3),
  findLast([1, 2, 3, 3, 3, 6, 7], 3)
);
