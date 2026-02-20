// function characterReplacement(s, k) {
//   let freq = new Array(26).fill(0);
//   let maxFreq = 0;
//   let left = 0;
//   let maxWindow = 0;

//   for (let right = 0; right < s.length; right++) {
//     let idx = s.charCodeAt(right) - 65;
//     freq[idx]++;

//     maxFreq = Math.max(maxFreq, freq[idx]);

//     while ((right - left + 1) - maxFreq > k) {
//       let leftIdx = s.charCodeAt(left) - 65;
//       freq[leftIdx]--;
//       left++;
//     }

//     maxWindow = Math.max(maxWindow, right - left + 1);
//   }

//   return maxWindow;
// }

// console.log(characterReplacement("AABABBA", 2)); // ✅ 5




let a = "AABABBA";
let k = 2;

let left = 0;
let map = new Map();
let maxFreq = 0;
let maxWindow = 0;

for (let right = 0; right < a.length; right++) {
  let rightChar = a[right];
  map.set(rightChar, (map.get(rightChar) || 0) + 1);

  maxFreq = Math.max(maxFreq, map.get(rightChar));

  if (right - left + 1 - maxFreq > k) {
    let leftChar = a[left];
    map.set(leftChar, map.get(leftChar) - 1);
    left++;
  }

  maxWindow = Math.max(maxWindow, right - left + 1);
}

console.log(maxWindow); // ✅ 5

