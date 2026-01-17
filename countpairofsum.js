 let a = [1,5,7,1]
sum = 6
count = 0


for (i = 0; i < a.length; i++){
    for (j = 1+i; j < a.length; j++){
        if(sum == a[i] + a[j]){
            count++
        }
    }
}

console.log("counttt",count)

