let s = 'ADOBECODEBANC';
let t = 'ABC';


function chkMinWiDSub(s,t){

    let windowStart = 0, windowEnd = 0; start = 0; minLen = Infinity, matchedCount = 0

    let tmap = new Map();

    for (let char of t){
        tmap.set(char, (tmap.get(char) || 0) + 1)
    }

   for (windowEnd; windowEnd < s.length; windowEnd++){
        let endChar = s[windowEnd];
        if(tmap.has(endChar)){
           tmap.set(endChar, (tmap.get(endChar)) - 1)
           if(tmap.get(endChar) >= 0){
                 matchedCount++
           }
        }

        while(matchedCount === t.length){
           
            if(minLen > (windowEnd - windowStart + 1)){
                    minLen = windowEnd - windowStart + 1;
                    start  = windowStart
            }

            let lefChar = s[windowStart++]

            if(tmap.has(lefChar)){
                 tmap.set(lefChar, (tmap.get(lefChar)) + 1)
                if(tmap.get(lefChar) > 0){
                    matchedCount = matchedCount - 1
                }
                  
            }
         
            
        }
   }

   if(minLen > s.length){
    return ''
   }

   return s.substring(start, start + minLen);


}



console.log(chkMinWiDSub(s,t))