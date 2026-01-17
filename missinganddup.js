

function findMissingAndDup(a) {


  let map = new Map();
  let dup;
  let missing;

  for (i = 0; i < a.length; i++) {
    let count = 0;
    if (map.has(a[i])) {
      count = map.get(a[i]);
      map.set(a[i], count + 1)
    }
    map.set(a[i], count + 1)
  }


  console.log(map)

  for (i = 1; i <= a.length; i++) {
    if (map.has(i)) {
      if (map.get(i) > 1) {
        dup = i
      }
    } else {
      missing = i
    }
  }

  return {
    dup,
    missing
  }

}

console.log(findMissingAndDup([1, 4, 3, 4, 5]))