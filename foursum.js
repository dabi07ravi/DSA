let a = [1, 0, -1, 0, -2, 2];
let target = 0;

let result = [];

for (i = 0; i < a.length; i++) {
  for (j = i + 1; j < a.length; j++) {
    let map = new Map();

    let newTarget = target - a[i] - a[j];
    for (k = j + 1; k < a.length; k++) {
      let need = newTarget - a[k];
      if (map.has(need)) {
        result.push([i, j, k, map.get(need)]);
      }
      map.set(a[k], k);
    }
  }
}

console.log(result);