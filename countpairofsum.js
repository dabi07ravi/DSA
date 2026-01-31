 let a = [1,5,7,1]
sum = 6
count = 0


for (i = 0; i < a.length; i++){
    for (j = 1+i; j < a.length; j++){
        if(sum == a[i] + a[j]){
            count++
        }
    }
}

console.log("counttt",count)



// optimal

// let a = [0, -1, 2, -3, 1, -3, 1];
// let sum = -2
// let pair = []

// let map = new Map(); // value → frequency
// let count = 0;

// for (let i = 0; i < a.length; i++) {
//   let need = sum - a[i];

//   if (map.has(need)) {
//     count += map.get(need);
//   }

//   map.set(a[i], (map.get(a[i]) || 0) + 1);
// }

// console.log(count);






