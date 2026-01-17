a  = [1,1,2,2,2,3,3,4];
// let temp = [];


// for (i = 0; i < a.length; i++){
//     if(a[i] != a[i+1]){
//         temp.push(a[i])
//     }
// }
// console.log('temppp',temp)



let i = 0;

for ( j= 1; j < a.length; j++){
    if(a[i] !== a[j]){
        i++;
        a[i] = a[j]
    }
}

console.log(i);

a.length = i + 1;

console.log(a)