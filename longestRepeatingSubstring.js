




function longRepSubStr(str) {


    let subStrings = []
    let maxLen = 0
    let res = null

    for (i = 0; i < str.length; i++) {
        for (j = i; j < str.length; j++) {
            subStrings.push(str.slice(i, j + 1))
        }
    }
    for (k = 0; k < subStrings.length; k++) {
        for (l = k + 1; l < subStrings.length; l++) {
            if (subStrings[k] === subStrings[l]) {
                let len = subStrings[k].length;
                if (len > maxLen) {
                    maxLen = len;
                    res = subStrings[k]
                }
            }
        }
    }


    console.log(maxLen, res)
}

console.log(longRepSubStr('banana'))