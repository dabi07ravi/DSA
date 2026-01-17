let a = 'abcabcbb'.split('');
let maxLen = -Infinity
let lonSubStr = ''


function hasUnique(str) {
    for (k = 0; k < str.length; k++) {
        for (l = 0; l < str.length; l++) {
            if ( k !== l && a[k] === a[l]) {
                return false
            }
        }
    }
    return true
}

for (i = 0; i < a.length; i++) {
    for (j = i; j < a.length; j++) {
        let subStr = a.slice(i, j + 1).join('')
        if (hasUnique(subStr)) {
            let len = subStr.length;
            if (maxLen < len) {
                maxLen = len
                lonSubStr = subStr
            }
        }
    }
}




console.log(maxLen, lonSubStr)


