let a = [1,2,3,5];
let n = a.length + 1
let totalsum = n*(n+1)/2
let sum = 0

for (i =0 ; i < a.length; i++){
    sum = sum + a[i]
}

let missingNo = totalsum - sum
console.log("missingNo",missingNo);