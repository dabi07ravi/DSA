let chkP = 'madam'

let i = 0;
let j = chkP.length-1
let chk = true

while(i <= j){
    if(chkP[i] != chkP[j]){
        chk = false
        break;
    }
    i++;
    j--
}

if(chk){
    console.log("string is pallindrome")
}else{
    console.log("string is not pallindrome")
}