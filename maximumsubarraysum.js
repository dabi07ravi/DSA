let a = [3,4,7,2,-3,1,4,2];
let target = 7;
let count = 0;
let subArray = []
let sum = 0


for ( i = 0; i < a.length; i++){

    for ( j = i; j < a.length; j++){

        count  = count +  a[j];

        if(count === target && count <= target){
                subArray.push(a.slice(i, j+1));
        }
    }
    count = 0
}


console.log(subArray)


let t = subArray.sort((a,b) => a.length - b.length)
console.log("t",t)

