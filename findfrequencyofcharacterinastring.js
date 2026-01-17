let word = 'programming'.split('');

let map = new Map();



for (i = 0; i < word.length; i++) {
    let count = 1;
    if (map.has(word[i])) {
        let getMapCount = map.get(word[i]);
        console.log(getMapCount)
        map.set(word[i], (getMapCount + 1))
    } else {
        map.set(word[i], count)
    }

}



console.log(map)

