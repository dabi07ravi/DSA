
let a = 'abc'.split('');
let subStr = [];


for ( i=0; i < a.length; i++){
    for (j=i; j < a.length; j++ ){
        subStr.push(a.slice(i, j+1).join(''))
    }
}

console.log(subStr)


