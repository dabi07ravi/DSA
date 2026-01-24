// let a = [3,-4,5,4,-1,7,-8];

// let max_so_far = a[0];
// let max_end = 0
// let start = 0;
// let end = 0;
// let s = 0


// for ( i = 0; i < a.length; i++){


//      max_end = max_end + a[i]

//         if(max_so_far < max_end){
//             max_so_far = max_end
//             start = s
//             end = i
//         }

//         if(max_end < 0){
//             max_end = 0
//             s = i + 1
//         }
       
// }

// console.log(max_end);

// console.log(a.slice(start,end+ 1))


let a = [2, -5, 1, 7, -3, 4, -6];
let currentSum = 0;
let maxSum = -Infinity;
let startIndex = 0;
let endIndex = 0;

for (let i = 0; i < a.length; i++) {
  currentSum = currentSum + a[i];
  if (currentSum > maxSum) {
    maxSum = currentSum;
    endIndex = i;
  }

  if (currentSum < 0) {
    currentSum = 0;
    startIndex = i + 1;
  }
}

console.log(maxSum, a.slice(startIndex, endIndex + 1));
