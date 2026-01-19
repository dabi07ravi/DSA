
const {Heap} = require('heap-js')


let a = [1,6,2,9,10];
let k = 2


let minHeap = new Heap()


for (let i=0; i < a.length; i++){
            minHeap.push(a[i])


            if(minHeap.size() > k){
                minHeap.pop()
            }
}


 console.log("k largest",minHeap.peek())


 let maxHeap = new Heap((a,b) => b-a);

 for ( let i=0; i < a.length; i++ ){
        maxHeap.push(a[i])

        if(maxHeap.size() > k){
            maxHeap.pop()
        }
 }  


 console.log("k smallest", maxHeap.peek())


