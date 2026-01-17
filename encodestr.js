let strs = ['lint', 'code', 'love', 'you'];

let decStr = []

function encodeStr(strs) {

    let res = '';

    for (char of strs) {
        res = res + char.length + '#' + char
    }

    return res

}


function decode(callback) {

    let i = 0;
    const enc = callback();

    console.log(enc)

    while (i < enc.length) {
        let j = i;

        while (enc[j] !== '#') {
            j++
        }

        const len = parseInt(enc.substring(i, j));

        const extWord = enc.substring(j + 1, j + 1 + len)

        decStr.push(extWord)

        i = j + 1 + len
    }

    console.log(decStr)

}




decode(() => encodeStr(strs))
