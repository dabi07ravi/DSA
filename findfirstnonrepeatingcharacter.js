let a = "aacb".split('');
let res = ''
for (i=0; i < a.length; i++){
    let unique = true
    for (j=0; j < a.length; j++){
        if(i !== j && a[i] === a[j]){
            unique = false
            break
        }
    }
    if(unique){
        res = res+a[i]
        break
    }
}


console.log(res)

