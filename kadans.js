let a = [3,-4,5,4,-1,7,-8];

let max_so_far = a[0];
let max_end = 0
let start = 0;
let end = 0;
let s = 0


for ( i = 0; i < a.length; i++){


     max_end = max_end + a[i]

        if(max_so_far < max_end){
            max_so_far = max_end
            start = s
            end = i
        }

        if(max_end < 0){
            max_end = 0
            s = i + 1
        }
       
}

console.log(max_end);

console.log(a.slice(start,end+ 1))