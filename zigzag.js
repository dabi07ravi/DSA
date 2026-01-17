



let s = 'paypalishiring';
let rows = 3


function convertStr(s, r) {

    let map = new Map();
    let i = 0;
    let j = 0;
    let p = 0;

    while(p < s.length){
                    while (i < r && p < s.length) {

            map.set(`${i}, ${j}`, s[p])

            p++;
            i++
        }

        i = r - 2;
        j++

        while (i > 0 && p < s.length) {
            map.set(`${i}, ${j}`, s[p])
            p++
            i--;
            j++

        }
    
    }

    console.log(map)

    let newStr = ''

    for (l = 0; l < r; l++){
        for ( m = 0; m <= j; m++){
            if(map.has(`${l}, ${m}`)){
                      newStr = newStr + map.get(`${l}, ${m}`)
            }
              
        }
    }
    console.log(newStr);

}



convertStr(s, rows)