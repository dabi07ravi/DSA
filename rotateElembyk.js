let a = [1,2,3,4,5,6,7];


for ( k = 0; k < 3; k++){

let lastElm = a[a.length - 1];

for( j = a.length -1 ; j > 0; j--){
    a[j] = a[j-1]
}

a[0] = lastElm;



}

console.log(a)

