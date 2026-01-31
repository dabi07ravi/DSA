 let a = [2, -3, 1,  6,];
//  let a = [4,2,0,1,6];
// let a = [-3, 2, 3, 1, 6]

let target = 0;

let map = new Map();
map.set(0, -1);
let currentSum = 0;
let result = [];
let startIndex = 0;
let subArray = [];

for (i = 0; i < a.length; i++) {
  currentSum = currentSum + a[i];
  let need = currentSum - target;
  if (map.has(need)) {
    startIndex = map.get(need);
    result.push([startIndex + 1, i]);
    subArray.push(a.slice(startIndex + 1, i + 1));
  }

  map.set(currentSum, i);
}

console.log(result, subArray);
