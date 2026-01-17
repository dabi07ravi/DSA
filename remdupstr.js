let str = 'pmming';

let wdup = [];


let strq = str.split('');

let i = 0;


for (j=1; j < strq.length; j++){
    if(strq[i] !== strq[j]){
            i++;
            strq[i] = strq[j]
    }
}


strq.length = i + 1


console.log("strq",strq.join(''))


// for(i = 0; i < strq.length; i++){
//     if(strq[i] != strq[i+1]){
//         wdup.push(strq[i])
//     }
// }


console.log(wdup.join(''))