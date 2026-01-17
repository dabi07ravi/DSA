function allSubstrings(str) {
    let set = new Set();
    let left = 0;
    let right = 0;
    let max = 0;

    while (right < str.length) {
        let char = str[right];

        // If char is already in the set -> shrink window from left
        if (set.has(char)) {
            set.delete(str[left]);
            left++;
        } else {
            // Add unique char and move right
            set.add(char);
            max = Math.max(max, right - left + 1);
            right++;
        }
    }

    return max;
}

console.log(allSubstrings("abcabcbb")); // ✅ 3
