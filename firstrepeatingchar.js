let a = "abcb".split('');
let res = ''
for (i=0; i <a.length; i++){
    let uni = false

    for(j=i+1; j < a.length; j++){
        if(a[i] === a[j]){
            uni = true
            break
        }
    }
    if(uni){
        res = res+a[i]
        break
    }
}


console.log(res)

