
function groupAnagrams(list){
        let map = {};

        for (let val of list){
                let sorted = val.split('').sort().join('');

                if(!map[sorted]){
                    map[sorted] = []
                }

                map[sorted].push(val)
        }

        return Object.values(map)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
