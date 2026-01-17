const { Heap } = require("heap-js");

let a = [3, 2, 1, 5, 6, 4];
let k = 2;

// Min Heap → smallest element at top
const heap = new Heap((a, b) => b - a);

for (let i = 0; i < a.length; i++) {
    heap.push(a[i]);

    if (heap.size() > k) {
        heap.pop();
    }
}

console.log(heap.peek()); // 5
