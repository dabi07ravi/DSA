let a = [3,4,5,8,2,10];
let firstLargest = a[0];

let secondLargest;
let temp;


for( i = 1; i < a.length; i++){

    if(a[i] > firstLargest){
            temp = firstLargest
            secondLargest = temp
            firstLargest = a[i]
    }
}


console.log(firstLargest);
console.log(secondLargest)