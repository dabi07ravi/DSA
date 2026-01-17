function convertRomanToInt(r) {
    let map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let res = 0;
    let prev = 0;

    // Loop from right to left
    for (let i = r.length - 1; i >= 0; i--) {
        let curr = map.get(r[i]);

        if (curr < prev) {
            res -= curr;   // subtract if smaller
        } else {
            res += curr;   // add if larger or equal
        }

        prev = curr;
    }

    console.log(res);
    return res;
}

convertRomanToInt('MCMXCIV'); // 1994
