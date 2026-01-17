// function minWindowSubStr(s, t) {
//   let tFreq = new Map();

//   // build frequency map for t
//   for (let ch of t) {
//     tFreq.set(ch, (tFreq.get(ch) || 0) + 1);
//   }

//   let left = 0;
//   let required = t.length;
//   let minLen = Infinity;
//   let startIndex = 0;

//   for (let right = 0; right < s.length; right++) {
//     let rightChar = s[right];

//     // expand window → consume character
//     if (tFreq.has(rightChar)) {
//       if (tFreq.get(rightChar) > 0) {
//         required--;
//       }
//       tFreq.set(rightChar, tFreq.get(rightChar) - 1);
//     }

//     // shrink window when valid
//     while (required === 0) {
//       if (right - left + 1 < minLen) {
//         minLen = right - left + 1;
//         startIndex = left;
//       }

//       let leftChar = s[left];

//       // release character from window
//       if (tFreq.has(leftChar)) {
//         tFreq.set(leftChar, tFreq.get(leftChar) + 1);
//         if (tFreq.get(leftChar) > 0) {
//           required++;
//         }
//       }
//       left++;
//     }
//   }

//   return minLen === Infinity
//     ? ""
//     : s.substring(startIndex, startIndex + minLen);
// }

// console.log(minWindowSubStr("ADOBECODEBANC", "ABC")); // "BANC"

function minWindowSubStr(s, t) {
  let freqMap = new Map();
  let startIndex = 0;

  for (let i = 0; i < t.length; i++) {
    freqMap.set(t[i], (freqMap.get(t[i]) || 0) + 1);
  }

  let required = t.length;
  let minLen = Infinity;

  let start = 0;
  let end = 0;

  for (end; end < s.length; end++) {
    let endChar = s[end];
    if (freqMap.has(endChar)) {
      if (freqMap.get(endChar) > 0) {
        required--;
      }

      freqMap.set(endChar, freqMap.get(endChar) - 1);
    }

    while (required === 0) {
      let len = end - start + 1;

      if (len < minLen) {
        minLen = len;
        startIndex = start;
      }

      let startChar = s[start];

      if (freqMap.has(startChar)) {
        freqMap.set(startChar, freqMap.get(startChar) + 1);
        if (freqMap.get(startChar) > 0) {
          required++;
        }
      }

      start++;
    }
  }

  return minLen === Infinity
    ? ""
    : s.substring(startIndex, startIndex + minLen);
}

console.log(minWindowSubStr("aab", "ab"));
// "ab"
