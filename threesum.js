// let a = [1, 4, 45, 6, 10, 8];
// let indices = []

// let target = 13;

// for (i=0; i < a.length; i++){
//     for (j=i+1; j < a.length; j++){
//         for (k=j+1; k < a.length; k++){
//             if(a[i] + a[j] + a[k] === target){
//                     indices.push(i,j,k)
//             }
//         }
//     }
// }

// console.log(indices)

// let a = [2, 11, 15, 7, -2, 4];
// let target = 9;

// let result = [];

// for (i = 0; i < a.length; i++) {
//   let map = new Map();

//   let newTarget = target - a[i];

//   for (j = i + 1; j < a.length; j++) {
//     let need = newTarget - a[j];
//     if (map.has(need)) {
//       result.push(i, j, map.get(need));
//     }
//     map.set(a[j], j);
//   }
// }

// console.log(result);

// more optimal usig two pointer

let a = [2, 11, 15, 7, -2, 4].sort((a, b) => a - b);
let target = 9;

let result = [];
let k = a.length - 1;

for (i = 0; i < a.length; i++) {
  let j = i + 1;
  while (j < k) {
    let sum = a[i] + a[j] + a[k];
    if (sum === target) {
      result.push([a[i], a[j], a[k]]);
      j++;
      k--;
    } else if (sum < target) {
      j++;
    } else {
      k--;
    }
  }
}

console.log(result);
