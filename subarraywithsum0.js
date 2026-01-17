let a = [4,2,-3,1,6];
let sum = 0
let target = 0
let subArray = []


// for ( i =0; i < a.length; i++){

//     for ( j= i; j < a.length; j++){

//             sum = sum + a[j];
//             if(sum === target){
//                 subArray.push(a.slice(i, j+1))
//             }
//     }
//     sum = 0
// }


//console.log(subArray)


let map = new Map();


for ( i =0; i < a.length; i++){

    sum = sum + a[i]

    const chk = map.get(sum);
    if(chk){
        subArray.push(a.slice(i, a.indexof(chk) + 1))
    }
}

console.log(subArray)