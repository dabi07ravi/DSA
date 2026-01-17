let n = 64;
let ans;
let start = 1;
let end = n;

while (start <= end){

    let mid  = Math.floor((start+end)/2);


    if(mid * mid <= n){
            ans = mid;
            start++
    }else{
        end = mid - 1
    }

}

console.log(ans)