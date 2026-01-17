let a = [2,4,6,8,8,8,11,13];

let res = [];

let target = 11


for ( i = 0; i < a.length; i++){

    if(a[i] === target){
        res.push(i)
    }
}

if(res.length === 0){
    console.log([-1,-1])
}

if(res.length === 1){
    console.log(res[0],res[0])
}

if(res.length > 1){
    console.log(res[0], res[res.length - 1])
}


