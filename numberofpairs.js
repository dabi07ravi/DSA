let x = [2, 1, 6];
let y = [1, 5];
let count = 0;

for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {  
        if (x[i] ** y[j] > y[j] ** x[i]) {
            count++;
            console.log(`pairs : ${x[i]}, ${y[j]}`);
        }
    }
}

console.log(`Total pairs: ${count}`);
