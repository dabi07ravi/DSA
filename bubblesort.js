let a = [1,4,2,7,5,10];
let temp;

for (i = 0; i < a.length; i++ ){
    for (j = 0; j < a.length -1 - i; j++){
        if(a[j] > a[j+1] ){
            temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp 
        }
    }
}

console.log("a",a);