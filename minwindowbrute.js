

function minWindowSubStr(a,t){
        let map = new Map();
        let start = 0;
        let minLen = Infinity;

        for ( i=0; i < a.length; i++){
            let count = 0
            for (j=0; j < t.length; j++){
                    map.set(t[j], (map.get(t[j]) || 0) + 1);
            }
            for ( k=i; k < a.length; k++){
                if(map.has(a[k]) && map.get(a[k]) > 0){
                    count++
                    let currentCount = map.get(a[k]);
                    currentCount = currentCount -1
                    map.set(a[k],currentCount);
                    if(count === t.length){
                        let len = (k - i) + 1;
                        if(len < minLen){
                            minLen = len;
                            start = i;
                        }
                        break;

                    }
                }
            }
        }

        console.log(start,minLen)

        return a.slice(start,start+minLen)
}


console.log(minWindowSubStr('ADOBECODEBANC','ABC'))