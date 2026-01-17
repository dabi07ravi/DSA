let a = [[1,3],[2,6],[8,10],[15,18], [13,20]];

let b= []



a.sort((a,b) => a[0]-b[0]);


let start = a[0][0];
let end = a[0][1];

for ( i = 1; i < a.length; i++){

    let s = a[i][0];
    let e = a[i][1];

    if(s <= end){
        end = Math.max(end,e);

    }else{
        b.push([start,end])
        start = s;
        end = e
    }



}

b.push([start,end])

console.log(b);