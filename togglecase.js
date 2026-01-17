const a = 'ProGraM123';
let res = ''


for ( i=0; i < a.length; i++){
    let ch = a[i];

    if(ch >= 'a' && ch <= 'z'){
            res = res + String.fromCharCode(ch.charCodeAt(0) - 32)
    }else if(ch >= 'A' && ch <= 'Z'){
            res = res + String.fromCharCode(ch.charCodeAt(0) + 32)

    }else{
        res = res+ch
    }
}


console.log(res)