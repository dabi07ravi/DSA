let s = 'zzzzyxxy';


function chkLongSub(s){
    let list = []

    for (i = 0; i < s.length; i++){
        let low = i -1
        let high = i + 1
            while(low >= 0 && high < s.length && s[low] == s[high]){
                let subStr = s.substring(low, high + 1)
                    list.push(subStr)
                    low--
                    high++
            }

             low = i;
            high = i+ 1
                while(low >= 0 && high < s.length && s[low] == s[high]){
                let subStr = s.substring(low, high + 1)
                    list.push(subStr)
                    low--
                    high++
            }
    }


    return  list.sort((a, b) => a.length - b.length).pop();


}

console.log(chkLongSub(s))