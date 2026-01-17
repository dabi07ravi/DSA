function buildLPS(pattern) {
    let lps = new Array(pattern.length).fill(0);
    let len = 0, i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

function kmpSearch(text, pattern) {
    let lps = buildLPS(pattern);
    let i = 0, j = 0; // i → text, j → pattern
    let matches = [];

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
            if (j === pattern.length) {      // full match
                matches.push(i - j);
                j = lps[j - 1];              // continue searching
            }
        } else {
            if (j !== 0) {
                j = lps[j - 1];              // fallback
            } else {
                i++;
            }
        }
    }
    return matches;
}


let text = "abxabcabcaby";
let pattern = "abcaby";

console.log("Matches at:", kmpSearch(text, pattern)); 