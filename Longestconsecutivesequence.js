let a = [0, 1, 9, 6, 5, -1];

let map = new Map();
let maxLength = -Infinity;
let startIndex = 0

for (let i = 0; i < a.length; i++) {
  map.set(a[i], false);
}

for (let i = 0; i < a.length; i++) {
  let currentLen = 1;

  let nextNum = a[i] + 1;

  while (map.has(nextNum) && map.get(nextNum) === false) {
    currentLen = currentLen + 1;
    map.set(nextNum, true);

    nextNum++;
  }

  let prevNum = a[i] - 1;

  while (map.has(prevNum) && map.get(prevNum) === false) {
    currentLen = currentLen + 1;
    map.set(nextNum, true);

    prevNum--;
  }

  if (currentLen > maxLength) {
    maxLength = currentLen;
  }
}

console.log(maxLength);
