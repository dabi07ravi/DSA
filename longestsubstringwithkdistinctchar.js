function longestsubstringwithkdistinctchar(s, k) {
  let fmap = new Map();

  let left = 0;
  let right = 0;
  let maxLen = 0;
  let startIndex = 0;

  for (right; right < s.length; right++) {
    let rightChar = s[right];
    fmap.set(rightChar, (fmap.get(rightChar) || 0) + 1);

    if (fmap.size <= k) {
      let len = right - left + 1;
      if (len > maxLen) {
        maxLen = len;
        startIndex = left;
      }
    } else {
      while (fmap.size > k) {
        let leftChar = s[left];
        if (fmap.has(leftChar)) {
          fmap.set(leftChar, fmap.get(leftChar) - 1);
        }
        if (fmap.has(leftChar) && fmap.get(leftChar) === 0) {
          fmap.delete(leftChar);
        }
        left++;
      }
    }
  }

  return {maxLen, str: s.slice(startIndex,startIndex+maxLen)}
}

// Example
console.log(longestsubstringwithkdistinctchar("aaabbccd", 2));
