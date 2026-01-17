 let a  = [1,2,6,90,3,5]
 
let i = 0;

let min = a[0];
let max = a[1];


while( i < a.length){

    if(a[i] < min){
        min = a[i]
    }

    if(a[i] > max){
        max = a[i]
    }

    i++
}


console.log(min,max)