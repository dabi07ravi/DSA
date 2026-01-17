function findAnagrams(s, t) {
  if (t.length > s.length) return [];

  let fmap = new Map();
  let result = [];

  // Build frequency map for t
  for (let ch of t) {
    fmap.set(ch, (fmap.get(ch) || 0) + 1);
  }

  let count = fmap.size; // number of unique chars to match
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let rightChar = s[right];

    // Expand window
    if (fmap.has(rightChar)) {
      fmap.set(rightChar, fmap.get(rightChar) - 1);
      if (fmap.get(rightChar) === 0) {
        count--;
      }
    }

    // When window size equals t length
    if (right - left + 1 === t.length) {
      if (count === 0) {
        result.push(left); // store index
      }

      // Shrink window
      let leftChar = s[left];
      if (fmap.has(leftChar)) {
        if (fmap.get(leftChar) === 0) {
          count++;
        }
        fmap.set(leftChar, fmap.get(leftChar) + 1);
      }
      left++;
    }
  }

  return result;
}

// Example
console.log(findAnagrams("cbaebabacd", "abc")); // [0, 6]
