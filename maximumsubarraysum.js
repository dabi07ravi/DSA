let a = [3, 4, 7, 2, -3, 1, 4, 2];
let target = 7;
let count = 0;
let subArray = [];
let sum = 0;

for (i = 0; i < a.length; i++) {
  count = 0;

  for (j = i; j < a.length; j++) {
    count = count + a[j];

    if (count === target && count <= target) {
      subArray = a.slice(i, j + 1);
    }
  }
}

console.log(subArray);

let t = subArray.sort((a, b) => a.length - b.length);
console.log("t", t);

// amother way when target is not given

// function maxSubArraySum(a) {
//   let maxSubArray = [];
//   let maxSum = 0;

//   function maxSubArrayCal(b) {
//     for (let i = 0; i < b.length; i++) {
//       let sum = 0;
//       for (let j = i; j < b.length; j++) {
//         sum = sum + b[j];

//         if (sum > maxSum) {
//           maxSum = sum;
//           maxSubArray = b.slice(i, j + 1);
//         }
//       }
//     }
//   }

//   for (let i = 0; i < a.length; i++) {
//     for (let j = i; j < a.length; j++) {
//       let subArray = a.slice(i, j + 1);
//       maxSubArrayCal(subArray);
//     }
//   }

//   return {maxSubArray,maxSum}
// }

// console.log(maxSubArraySum([2, 3, -8, 7, -1, 2, 3]));
