let a = [1,2,3,4,5];


let i = 0;
let j = a.length - 1;

while(i <= j){
    let temp = a[j];
    a[j] = a[i];
    a[i] = temp
    i++;
    j--
}


console.log(a)