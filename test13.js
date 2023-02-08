let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format



// let set = new Set();
// let missing_num = 0;
// for (let i = 0; i <= n; i++) {
//     if (set.has(arr[i])) {
//         missing_num = arr[i];
//         break;
//     } else {
//         set.add(arr[i]);
//     }
// }
// let actual_sum = 0;
// for (let i = 1; i <= n; i++ ) {
//     actual_sum += i;
// }
// let sum = arr.reduce((sum, ele) => sum += ele);
// let repeated_num = Math.abs(sum - missing_num - actual_sum);
// console.log(missing_num, repeated_num)


let n = parseInt(readLine()) 
let arr = readLine().split(" ").map(x => parseInt(x));

let index_arr = [];
for (let i = 0; i < n; i++) {
    index_arr.push(Math.abs(arr[i] - i));
}

console.log((Math.max(...index_arr) / Math.min(...index_arr)).toFixed(1));
