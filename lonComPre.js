

function chkLongestComPref(d) {
    let srt = d.sort();
    let a = srt[0];
    let b = srt[srt.length - 1];
    let c = []
    for (i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            c.push(a[i])
        }
    }


    if (c.length > 0) {
        return c.join('')
    } else {
        return ' '
    }


}


const res = chkLongestComPref(["flower", "flow", "flight"])

console.log(res)