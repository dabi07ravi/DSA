let a  = [2, 3, -1, 4];
let finalproduct = -Infinity;
let bestSub = [];

for (let i = 0; i < a.length; i++) {
    let product = 1; // reset for each i
    for (let j = i; j < a.length; j++) {
        product *= a[j]; // multiply
        if (product > finalproduct) {
            finalproduct = product;
            bestSub = a.slice(i, j + 1); // correct subarray
        }
    }
}

console.log(finalproduct); // 6
console.log(bestSub);      // [2, 3]
