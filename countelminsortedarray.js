let a = [2,4,10,10,10,11,20];

let res;

let map = new Map();

for (i =0; i < a.length; i++){


     res = map.set(a[i], (map.get(a[i]) || 0) + 1);
}

console.log(res)