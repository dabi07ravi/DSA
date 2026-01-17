function countAndSay(n) {
    if (n === 1) return "1";

    const say = countAndSay(n-1)

    let res = ''

    for ( let i = 0; i < say.length; i++){
            let char = say[i];
            let count  = 1;
            while( i < say.length - 1 && say[i] == say[i+1]){
                count++
                i++
            }

            res = res.toString() + count.toString() + char.toString()
    }

      return res

    }

console.log(countAndSay(4))

