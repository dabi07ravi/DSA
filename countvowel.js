let str = 'ravi'

let a = str.split('')

console.log("a",a)


let vowels = ['a','e','i','o','u','A','E','I','O','U']
let vowelsCount = 0;
let cons = 0

for (i = 0; i < a.length; i++){
    if(vowels.includes(a[i])){
        console.log(a[i])
        vowelsCount++
    }else{
        cons++
    }
}


console.log("vowelsCount", vowelsCount);
console.log("conssss",cons)