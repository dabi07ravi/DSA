let a = [10, 5, 2, 7, 1, -10];

let target = 15;
let currentSum = 0;
let map = new Map();
map.set(0, -1)
let startIndex = 0;
let maxLength = -Infinity;
let subArray = [];

for (i = 0; i < a.length; i++) {
  currentSum = currentSum + a[i];
  let need = currentSum - target;
  if (map.has(need)) {
    startIndex = map.get(need);
    let len = i - (startIndex + 1) + 1;
    if (len > maxLength) {
      maxLength = len;
      subArray.push(a.slice(startIndex + 1, i + 1));
    }
  }

  map.set(currentSum, i)
}


console.log(maxLength, subArray)
