let a = [0,0,1,1,0,2,1,2,0];
let low = 0;
let high = a.length - 1;
let mid = 0;
let temp;



while(mid <= high){

    if(a[mid] === 0){
            temp = a[mid];
            a[mid] = a[low];
            a[low] = temp;
            low++
            mid++ 
    }else if(a[mid] === 1){
        mid++
    }else if(a[mid] === 2){
        temp = a[mid];
        a[mid] = a[high];
        a[high] = temp;
        high--;
    }
}


console.log(a)