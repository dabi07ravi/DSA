let a = [3,8,2,5,7,6,2];
let k = 3;
let current = 0
let start = 0



for ( i =0; i < k; i++ ){
        current = current + a[i]
}

let max = current;

for ( j = 1; j <= a.length-k; j++){
        current = current - a[j-1] + a[j+k-1]
        if(current > max){
            max = current
            start = j
        }
}

console.log(a.slice(start, start+k))



// brute force approach 


// function maxSubArraySum(a, k) {
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

//   for (let i = 0; i <= a.length - k; i++) {
//     let subArray = a.slice(i, k + i);
//     maxSubArrayCal(subArray);
//   }

//   return {maxSubArray,maxSum}
// }

// console.log(maxSubArraySum([1, 2, 3, 4], 2));
// [2, 3, -8, 7, -1, 2, 3]






