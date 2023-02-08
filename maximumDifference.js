/*

Maximum difference
Description

Given an array of integers of size N, find the maximum difference between any two elements of the array.
Input format

First line contains a positive integer n denoting the number of elements in the array and second line contains n space separated elements of array.
Output format

For the given array, print the maximum difference between any two elements of the array.
Sample input-1

10
1 7 14 0 9 4 18 11 2 4

Sample output-1

18

Explanation-1

Maximum difference is between elements 18 and 0.

Sample input-2

5
1 1 1 1 1

Sample output-2

0

Explanation-2

Maximum difference is between elements 1 and 1.


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

parseInt(readLine());
let arr = readLine().split(" ").map(x => parseInt(x));
console.log(Math.max(...arr) - Math.min(...arr));