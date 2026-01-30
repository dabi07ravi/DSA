
// let res = []
// function chkLongestPal(str) {
//     let k = 0
//     let l = str.length-1
//     while (k <= l) {
//         if (str[k] !== str[l]) {
//             return false
//         }
//         k++
//         l--
//     }
//     return true
// }



// function longestPall(str) {
//     let long = 0
//     for (i = 0; i < str.length; i++) {
//         for (j = i; j < str.length; j++) {
//             let subStr = str.slice(i, j + 1);
//             let pal = chkLongestPal(subStr)
//             if (pal) {
//                  if (subStr.length > long) {
//                     long = subStr.length;
//                     res = [subStr]; // 🔥 remove old smaller palindromes
//                 } else if (subStr.length === long) {
//                     res.push(subStr); // 🔥 same length
//                 }
//             }
//         }
//     }

//     return {long,res}

// }

// console.log(longestPall("babad")); // ✅ 3






function longestPalindrome(str){

  let maxLen = -Infinity;
  let count = 0
  let startIndex = 0

  function expand(left,right){

      while(left >=0 && right < str.length && str[left] === str[right]){
        let len = right - left + 1;

        if(len > maxLen){
          maxLen = len
          startIndex = left
          count++
        }

        left--
        right++
      }

  }


  for (i=0; i < str.length; i++){
        expand(i,i) // odd len
        expand(i,i+1) // even len
  }


  return {count, maxLen, subStrng: str.slice(startIndex, startIndex+maxLen)}

}




console.log(longestPalindrome("babad")); // "bab" or "aba"


