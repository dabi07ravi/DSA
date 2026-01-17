


let a = [1, 2, 3, 4, 5];
for (k = 0; k < 2; k++) {
    let temp = a[0];
    for (i = 1; i < a.length; i++) {
        a[i - 1] = a[i]
    }
    a[a.length - 1] = temp 
}

   console.log(a)




