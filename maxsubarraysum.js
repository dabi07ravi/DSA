let a = [1, 4, 20, 3, 10, 5]
let b = [];
let max = 0;
let sum = 0;
let n = a.length;
let start = 0;
let end = 0;

for (i = 0; i < n-4; i++) {
    for (j = i; j < 4+i; j++) {
        sum = sum + a[j];
    }
    if (sum > max) {
        max = sum;
        sum = 0;
    }   
}

  console.log("max",max);


  let obj  = {
    name : "hjf",
    age : 12
  }
  


