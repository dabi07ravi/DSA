let arr = [1, 4, 20, 3, 10, 5]
let target_sum = 33
let sum = 0
let count = 0


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

