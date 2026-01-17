


function cal(s) {
    let maxLen = 0;

    let a = s.split('');

    for (i = 0; i < a.length; i++) {

        let seen = new Set();
        for (j = i; j < a.length; j++) {

            if (seen.has(a[j])) {
                break;
            }
            seen.add(a[j])

            maxLen = Math.max(maxLen, j - i + 1)
        }
      
    }

      return maxLen

}


console.log(cal('abcabcbb'))