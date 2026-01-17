let a = [1,3,4,3,3,3,1,1,1,1,1];


let map = new Map();


for ( i = 0; i < a.length; i++){

map.set(a[i], (map.get(a[i]) || 0) + 1);
}


for ( let [key,value] of map){
        if(value > Math.floor(a.length/2)){
            console.log(key,value)
        }
}