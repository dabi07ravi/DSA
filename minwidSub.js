let s = 'ADOBECODEBANC';
let t = 'ABC';

let windowStart = 0;
let matchedCount = 0;
let minLen = Infinity;
let startIndex = 0;

// Create frequency map for t
let tmap = new Map();
for (let char of t) {
    tmap.set(char, (tmap.get(char) || 0) + 1);
}

let smap = new Map(); // To track current window chars

for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let endChar = s[windowEnd];
    smap.set(endChar, (smap.get(endChar) || 0) + 1);

    // If endChar matches requirement in tmap
    if (tmap.has(endChar) && smap.get(endChar) <= tmap.get(endChar)) {
        matchedCount++;
    }

    // Shrink the window if all characters are matched
    while (matchedCount === t.length) {
        if (windowEnd - windowStart + 1 < minLen) {
            minLen = windowEnd - windowStart + 1;
            startIndex = windowStart;
        }

        let startChar = s[windowStart];
        smap.set(startChar, smap.get(startChar) - 1);

        if (tmap.has(startChar) && smap.get(startChar) < tmap.get(startChar)) {
            matchedCount--;
        }
        windowStart++;
    }
}

let result = minLen === Infinity ? "" : s.substring(startIndex, startIndex + minLen);
console.log(result); // Output: "BANC"
