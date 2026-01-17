




function longCommonSubStr(str1, str2) {
    let a = [];
    let b = [];
    let lonElm = null;

    let maxLen = 0

    for (i = 0; i < str1.length; i++) {
        for (j = i; j < str1.length; j++) {
            a.push(str1.slice(i, j + 1))
        }
    }


    for (k = 0; k < str2.length; k++) {
        for (l = k; l < str2.length; l++) {
            b.push(str2.slice(k, l + 1))
        }
    }


    for (m = 0; m < a.length; m++) {
        for (n = 0; n < b.length; n++) {
            if (a[m] === b[n]) {
                let len = a[m].length;
                if (len > maxLen) {
                    maxLen = len
                    lonElm = a[m]
                }
            }
        }
    }


    return { maxLen, lonElm }
}

console.log(longCommonSubStr('zfbcdzb', 'zbcdf'))