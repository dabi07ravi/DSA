let a = [1,2,3,4];
let b = []
let product = 1



for ( i = 0; i < a.length; i++){
    for ( j= 0; j< a.length; j++){
        if(i !== j){
                product = product * a[j]
        }
    }

    b.push(product);
    product = 1
}


console.log(b)