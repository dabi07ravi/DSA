let arr = [1, 4, 20, 3, 10, 5]
let target_sum = 33
let sum = 0
let count = 0


// brute force
for (i = 0; i < arr.length; i++) {
    for (j = i; j < arr.length; j++) {
        sum = sum + arr[j]
        if (sum == target_sum) {
            count++;
            console.log("counttt",count);
             console.log("Subarray with given sum found:", arr.slice(i, j + 1));
        }
    }

    sum = 0
} 



// optimal sol sliding window
// function subArrayWithGivenSum(a, t) {
//   let subArrayIndex = [];

//   //   for (i = 0; i < a.length; i++) {
//   //     let sum = 0;
//   //     for (j = i; j < a.length; j++) {
//   //       sum = sum + a[j];
//   //       if (sum === t) {
//   //         subArrayIndex.push(i, j);
//   //       }
//   //     }
//   //   }

//   let left = 0;
//   let right = 0;
//       let sum = 0;


//   for (right; right < a.length; right++) {
//     sum = sum + a[right];

//     while (sum > t) {
//       sum = sum - a[left];
//       left++;
//     }
//     if (sum === t) {
//       subArrayIndex.push(left, right);
//       break;
//     }
//   }

//   return subArrayIndex;
// }

// console.log(subArrayWithGivenSum([1, 10, 4, 0, 3, 5], 7));

