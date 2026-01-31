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

// let a = [2, 11, 15, 7];
// let target = 9;
// let indices = [];

// let map = new Map();

// for (i = 0; i < a.length; i++) {
//   let need = target - a[i];
//   if (map.has(need)) {
//     indices.push(i, map.get(need));
//   }

//   map.set(a[i], i);
// }

// console.log(indices);


// two sum without map


// let i = 0;
// let j = i + 1;
// while (i < j) {
//   let sum = a[i] + a[j];
//   if (sum === target) {
//     indices.push([a[i], a[j]]);
//     i++;
//     j--;
//   } else if (sum < target) {
//     i++;
//   } else {
//     j--;
//   }
// }

// console.log(indices);


// two sum and count pair are same but only idff is in two sum duplicate allowed but in count pair sun duplicate not allowed