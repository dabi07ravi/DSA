function longestSubstringWithKDistinctChars(s, k) {
    let fmap = new Map();

    let left = 0;
    let maxLen = 0;
    let startIndex = 0;

    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right];

        fmap.set(rightChar, (fmap.get(rightChar) || 0) + 1);

        // Shrink until window becomes valid
        while (fmap.size > k) {
            let leftChar = s[left];

            fmap.set(leftChar, fmap.get(leftChar) - 1);

            if (fmap.get(leftChar) === 0) {
                fmap.delete(leftChar);
            }

            left++;
        }

        // Window is guaranteed valid here
        let len = right - left + 1;

        if (len > maxLen) {
            maxLen = len;
            startIndex = left;
        }
    }

    return {
        maxLen,
        str: s.slice(startIndex, startIndex + maxLen)
    };
}

console.log(longestSubstringWithKDistinctChars("aaabbccd", 2));