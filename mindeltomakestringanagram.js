function minDeletionsToMakeAnagram(s1, s2) {
 
  let map = new Map();


  for (let ch of s1){
    map.set(ch, (map.get(ch) || 0) + 1)
  }

  for (let ch of s2){
        map.set(ch, (map.get(ch) || 0) - 1)
  }



  let del = 0


  for (let val of map.values()){
      del = del + Math.abs(val)
  }


  return del


}


console.log(minDeletionsToMakeAnagram("cde", "abc"));   // 4
