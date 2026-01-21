function merge(a, st, mid, en) {
  let i = st;
  let j = mid + 1;
  let temp = [];
  let inversionCount = 0;

  while (i <= mid && j <= en) {
    if (a[i] <= a[j]) {
      temp.push(a[i]);
      i++;
    } else {
      inversionCount = inversionCount + (mid - i) + 1;
      temp.push(a[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(a[i]);
    i++;
  }

  while (j <= en) {
    temp.push(a[j]);
    j++;
  }

  for (let k = 0; k < temp.length; k++) {
    a[st + k] = temp[k];
  }

  return inversionCount;
}

function mergeSort(a, st, en) {
  let invCount = 0;

  if (st < en) {
    let mid = Math.floor((st + en) / 2);
    invCount = invCount + mergeSort(a, st, mid); // left
    invCount = invCount + mergeSort(a, mid + 1, en); // right
    invCount = invCount + merge(a, st, mid, en);
  }

  return invCount;
}

let arr = [3, 1, 2];
let start = 0;
let end = arr.length - 1;

console.log(mergeSort(arr, start, end));
