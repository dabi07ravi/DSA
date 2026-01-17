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





