// let str = 'aabccccc'
// let res = []



// let map = new Map();



// for (i=0; i < str.length; i++){
//     let ch = str[i]
//     map.set(ch, (map.get(ch) || 0) + 1);
// }


// map.forEach((values, keys) => {

//     res.push(keys+values)
// })


// console.log(res.join(''))



let str = "aabccccc";
let res = "";
let count = 1;

for (i = 1; i < str.length; i++) {
  if (str[i] === str[i - 1]) {
    count++;
  } else {
    res = res + str[i - 1] + count;
    count = 1;
  }
}

res = res + str[i - 1] + count;

console.log(res);



