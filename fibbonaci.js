console.log("print fibonacci series upto 5");


let fb = [0,1];
let s;
for(i = 0; i < 3; i++){
  s =  fb[fb.length - 1] + fb[fb.length -2] ;
    fb.push(s)
}
console.log("fb",fb)