/*

Flower Sorting

You have an array of size n, which contains type of flowers we have. There can be total 5 types of flowers only (1, 2, 3, 4, 5). You need to sort those flower types in the array.

Expected Time Complexity : O(n) Expected Auxiliary Space : O(1)
Input

One integer, denoting n the size of the given array. Next line containing n space seperated values, denoting the elements of the array.
Output

Sorted array of flower types, as space seperated values.
Example

Input1:

5
3 2 5 4 5

Output1:

2 3 4 5 5

*/

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

// let n = parseInt(readLine());
// let arr = readLine().split(" ").map(x => parseInt(x));
// arr.sort((a, b) => a - b);
// console.log(...arr);

// TC O(nlogn)

// readLine();
// console.log(...readLine().split(" ").map(x => parseInt(x)).sort());

// TC O(n) --> Counting Sort

readLine();
let arr = readLine().split(" ");
let count_1 = 0
let count_2 = 0
let count_3 = 0
let count_4 = 0
let count_5 = 0

for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
        case "1":
            count_1++; break;
        case "2":
            count_2++; break;
        case "3":
            count_3++; break;
        case "4":
            count_4++; break;
        case "5":
            count_5++; break;
    }
}
while(count_1--) {
    process.stdout.write("1 ");
}
while(count_2--) {
    process.stdout.write("2 ");
}
while(count_3--) {
    process.stdout.write("3 ");
}
while(count_4--) {
    process.stdout.write("4 ");
}
while(count_5--) {
    process.stdout.write("5 ");
}