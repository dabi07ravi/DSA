
    let a = [1,2,3,4,5,6,7,8,10];

    for (i =0; i < a.length - 1; i++){
        if(a[i] + 1 != a[i+1]){
            console.log("missing number", a[i] + 1)
        }
    }

