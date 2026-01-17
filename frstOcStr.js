
let heyStack = 'sadbutsad'
let needle = 'but'
function chkFrstO(a,b){
let c = a.split('');
let d = b.split('');

for (i =0; i < c.length; i++){
            if(c[i] == d[0]){
                let e = c.slice(i, i + d.length).join('');
                if( e === needle){
                    return i
                }else{
                    return -1
                }
            }
}


}
        


console.log(chkFrstO(heyStack, needle))