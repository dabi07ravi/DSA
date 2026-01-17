let a = [1, 2, 3, 4, 5];
let i = 0;
let j = a.length - 1;
let k = [];

while (i <= j) {
    if (i === j) {
        k.push(a[i]); 
    } else {
        k.push(a[j]);
        k.push(a[i]);
    }
    j--;
    i++;
}

console.log("aaaa", k);
