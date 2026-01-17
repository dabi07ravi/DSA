function binarySearch(a, t) {
  let low = 0;
  let high = a.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (a[mid] === t) {
      return mid;
    } else if (a[mid] > t) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5));
