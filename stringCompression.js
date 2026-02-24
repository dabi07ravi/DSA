let str = 'aabccccc'
let res = ''



let map = new Map();



for (i=0; i < str.length; i++){
    let ch = str[i]
    map.set(ch, (map.get(ch) || 0) + 1);
}


map.forEach((values, keys) => {

    res = `${res}${keys}${values}`
})


console.log(res)


