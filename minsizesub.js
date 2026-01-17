let a = [2,3,1,2,4,3];
let low = 0;
let high = 0
let minlen = Infinity
let currentSum = 0
let target = 7
let startindex = 0;

for ( high; high < a.length; high++){
    currentSum = currentSum + a[high];

    while(currentSum >= target){
        let size = high - low + 1;
        if(size < minlen){
            minlen = size
            startindex = low
        }
        currentSum = currentSum - a[low]
        low++
    }
}

console.log(startindex);
console.log(a.slice(startindex, startindex + minlen))
