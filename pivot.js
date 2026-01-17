function pivot(a, target) {

  let start = 0;
  let end = a.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (a[mid] >= a[0]) {
      start = mid + 1
    } else {
      end = mid
    }
  }

  let pivot = start;


  if (target >= a[pivot] && target <= a[a.length - 1]) {
    start = pivot;
    end = a.length - 1
  } else {
    start = 0;
    end = pivot - 1
  }


  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (a[mid] === target) {
      return mid
    } else if (a[mid] > target) {
      end = mid - 1
    } else if (a[mid] < target) {
      start = mid + 1
    } else {
      return -1
    }
  }





}

console.log(pivot([10, 11, 12, 1, 2, 3, 4], 12));
