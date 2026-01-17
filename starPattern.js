// # pattern 
// # *
// # **
// # ***
// # ****
// # *****


// for (i = 1; i <= 5; i++){
//     for (j=1; j <= i; j++){
//             process.stdout.write("*");
//     }
//     console.log()
// }


// # pattern 
// # ****
// # ***
// # **
// # *

// for (i=1; i<=5; i++){
//     for (j=5; j>=i; j--){
//           process.stdout.write("*");
//     }
//     console.log()
// }


// # pattern 
// #    *
// #   **
// #  ***
// # ****


// for (i = 1; i <= 4; i++){
//     for(j=3; j>=i; j--){
//          process.stdout.write(" ");
//     }
//     for(k=1; k<=i; k++){
//         process.stdout.write("*");
//     }
//     console.log()
// }


// # pattern 
// ****
//  ***
//   **
//    *

// for (i=1; i<=4; i++){
//     for (j=1; j <=i; j++){
//         process.stdout.write(" ");
//     }
//     for (k=4; k>=i; k--){
//         process.stdout.write("*");
//     }
//     console.log()
// }




let count = 1

for (i = 1; i <= 4; i++) {

    for (j = 3; j >= i; j--) {
        process.stdout.write(" ");
    }

    for (k = 1; k <= i; k++) {
        process.stdout.write(count.toString());
        process.stdout.write(" ");
    }
    console.log("")
    count++
}

let nxtCount = 3
for (l = 1; l <= 3; l++) {

    for (n = 2; n <= l; n++) {
        process.stdout.write(" ");
    }


    for (m = 3; m >= l; m--) {
        process.stdout.write(" ");
        process.stdout.write(nxtCount.toString());
    }


    console.log('')
    nxtCount--
}

