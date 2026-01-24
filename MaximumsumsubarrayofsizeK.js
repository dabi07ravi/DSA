




let a = [100,200,300,400];


let k = 2
let maxSum = -Infinity
let windowSum = 0

for (let i=0; i < k; i++){
        windowSum = windowSum + a[i]
}



for (let i = k; i < a.length; i++){
    windowSum = windowSum + a[i] - a[i-k]
    maxSum = Math.max(windowSum,maxSum)
}


console.log(maxSum)