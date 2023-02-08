// 3  3  3  3  3  3  3
// 3  2  2  2  2  2  3
// 3  2  1  1  1  2  3
// 3  2  1  0  1  2  3 
// 3  2  1  1  1  2  3
// 3  2  2  2  2  2  3
// 3  3  3  3  3  3  3

let n = 3;
let arr = [];
let num = n;
for (let i = 0; i < 2 * n + 1; i++) {
    let row = [];
    for (let j = 0; j < 2 * n + 1; j++) {
        row.push(num);
    }
    if (i < n) {
        
    } else if ( i == n) {

    } else {

    }
    console.log(row);
}