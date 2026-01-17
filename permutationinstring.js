function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;

  let freq = new Map();

  // build frequency map for s1
  for (let ch of s1) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  let left = 0;
  let count = s1.length;

  for (let right = 0; right < s2.length; right++) {
    let ch = s2[right];

    if (freq.has(ch)) {
      if (freq.get(ch) > 0) count--;
      freq.set(ch, freq.get(ch) - 1);
    }

    // shrink window if size exceeds s1 length
    if (right - left + 1 > s1.length) {
      let leftChar = s2[left];
      if (freq.has(leftChar)) {
        if (freq.get(leftChar) >= 0) count++;
        freq.set(leftChar, freq.get(leftChar) + 1);
      }
      left++;
    }

    if (count === 0) return true;
  }

  return false;
}
