let a = [1,3,5,7];
let b = [2,4,6,8];
let c = [];
let i = 0;
let j = 0;
let z = 0;

while ( i < a.length && j < b.length){
    if(a[i] < b[j]){
        c[z] = a[i];
        i++;
        z++;
        
    }else{
        c[z] = b[j];
        j++;
        z++;
    }
}

while(i < a.length){
     c[z] = a[i];
        i++;
        z++;
}

while(j < b.length){
    c[z] = b[j];
        j++;
        z++;
}

console.log("c",c);
