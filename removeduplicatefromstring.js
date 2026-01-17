let a = "programming".split('');
let result = ''

for (i = 0; i < a.length; i++) {
    let duplicate = false;
    for (j = 0; j < i; j++) {
        if (a[i] === a[j]) {
            duplicate = true
            break;
        }
    }

    if (!duplicate) {
        result = result + a[i]
    }
}


console.log(result)




// optimasl sol for remove duplicate

 // let set = new Set();
  // for (i = 0; i < str1.length; i++) {
  //   set.add(str1[i]);
  // }

  // return [...set].join('')

