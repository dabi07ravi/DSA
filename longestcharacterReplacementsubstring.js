function characterReplacement(s, k) {
  let freq = new Array(26).fill(0);
  let maxFreq = 0;
  let left = 0;
  let maxWindow = 0;

  for (let right = 0; right < s.length; right++) {
    let idx = s.charCodeAt(right) - 65;
    freq[idx]++;

    maxFreq = Math.max(maxFreq, freq[idx]);

    while ((right - left + 1) - maxFreq > k) {
      let leftIdx = s.charCodeAt(left) - 65;
      freq[leftIdx]--;
      left++;
    }

    maxWindow = Math.max(maxWindow, right - left + 1);
  }

  return maxWindow;
}

console.log(characterReplacement("AABABBA", 2)); // ✅ 5
