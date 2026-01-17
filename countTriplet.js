let a = [1,2,3,4,5,7];
let temp;
let count = 0
let left = 0;
let right = a.length - 2
let target = a.length - 1

for (k= a.length - 1; k >=2 ; k--){
    while(left < right){
    if(a[left] + a[right] == a[target]){
        count++
        left = left + 1
        right = right - 1
    }else{
        left++
    }
}
left = 0;
target = target - 1
right = target - 1
}


console.log(count)