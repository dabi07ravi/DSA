


function groupAnagram(strs){

  let map = new Map()

  for (i=0; i < strs.length; i++){

    let sortStr = strs[i].split('').sort().join('');
      if(map.has(sortStr)){
          map.get(sortStr).push(strs[i]);
      }else{
      map.set(sortStr, [strs[i]]);
      }
  }

  return map.values()

}


console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))