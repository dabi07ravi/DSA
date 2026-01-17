function chkIso(c, d) {
  if (c.length !== d.length) return false;

  let map1 = new Map();
  let map2 = new Map();

  for (let i = 0; i < c.length; i++) {
    let charA = c[i];
    let charB = d[i];

    // Check a → b mapping
    if (map1.has(charA)) {
      if (map1.get(charA) !== charB) {
        return false;
      }
    } else {
      map1.set(charA, charB);
    }

    // Check b → a mapping
    if (map2.has(charB)) {
      if (map2.get(charB) !== charA) {
        return false;
      }
    } else {
      map2.set(charB, charA);
    }
  }

  return true;
}

console.log(chkIso('egg', 'add'));   // true
console.log(chkIso('foo', 'bar'));   // false
console.log(chkIso('paper', 'title')); // true
console.log(chkIso('ab', 'aa'));     // false ✅
