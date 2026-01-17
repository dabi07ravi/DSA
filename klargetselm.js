let a = [3,2,1,5,6,4];

let k = 2;

let heap = [];


for ( i = 0; i < a.length; i++){

    if(heap.length !== k){
         heap.push(a[i]);
    }

    if( heap.length === k && a[i] > heap[heap.length - 1]){
        heap.pop();
        heap.push(a[i])
    }

   
}

console.log(heap[0])