let a = [1,2,3,4,5,6];
let sortedArray = false

for (i =1; i < a.length; i++){
    if(a[i] > a[i-1]){
        sortedArray = true
    }else{
        sortedArray = false
    }
}

console.log(sortedArray)