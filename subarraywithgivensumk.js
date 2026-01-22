let a = [3,4,7,2,-3,1,4,2];
let target = 7;
let count = 0;
let subArray = []


for ( i = 0; i < a.length; i++){

    for ( j = i; j < a.length; j++){

        count  = count +  a[j];

        if(count === target && count <= target){
                subArray.push(a.slice(i, j+1));
        }
    }
    count = 0
}

console.log(subArray)


// optimal sol prefix sum method
// function prefixSum(a, t) {
//   let map = new Map();
//   map.set(0, 1);

//   let currentSum = 0;
//   let totalCount = 0;

//   for (let i = 0; i < a.length; i++) {
//     currentSum += a[i];

//     let need = currentSum - t;

//     if (map.has(need)) {
//       totalCount += map.get(need); // VERY important
//     }

//     map.set(currentSum, (map.get(currentSum) || 0) + 1);
//   }

//   return totalCount;
// }

// console.log(prefixSum([2, 12, -2, -20, 10], -10)); 
