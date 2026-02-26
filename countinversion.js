let a = [6,3,5,2,7];
let count = 0


for ( i = 0; i < a.length; i++){
    for ( j= i+1; j < a.length; j++){
        if(i < j && a[i] > a[j]){
            count++
        }
    }
}


console.log(count);