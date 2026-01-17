function maxvowelssubstr(s, k) {
 
let vowels = ['a','e','i','o','u'];

let totalVowels = 0
let windowVowels = 0


for (let i=0; i < k; i++){
    if(vowels.includes(s[i])){
      windowVowels++
    }

    totalVowels = windowVowels;
}


for (let i = k; i < s.length; i++){
    if(vowels.includes(s[i-k])){
      windowVowels--
    }

    if(vowels.includes(s[i])){
      windowVowels++
    }

    totalVowels = Math.max(totalVowels,windowVowels)
}

return totalVowels

}


console.log(maxvowelssubstr("abciiidef", 3)) 

4