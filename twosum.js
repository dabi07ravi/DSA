// let a = [2,11,15,7];
// let target = 9;
// let indices = []


// for ( i =0; i < a.length; i++){

//     for (j = i + 1; j < a.length; j++){

//         if(a[i] + a[j] === target){
//                 indices.push([i, j])
//         }
//     }
// }


// console.log(indices)



// two sum optimal

let a = [2, 11, 15, 7];
let target = 9;
let indices = [];

let map = new Map();

for (i = 0; i < a.length; i++) {
  let need = target - a[i];
  if (map.has(need)) {
    indices.push(i, map.get(need));
  }

  map.set(a[i], i);
}

console.log(indices);