let arr = [1, 4, 20, 3, 10, 5]
let n = arr.length;
let w = 3;
let sum = 0;
let current;
let max;

for (i = 0; i<3; i++){
    sum = sum + arr[i];
}

 max = sum


 for( i=1; i<=n-w; i++){
    sum = sum - arr[i-1] + arr[i+w - 1];
    if(sum > max){
        max = sum
    }
 }

 console.log("max",max)




