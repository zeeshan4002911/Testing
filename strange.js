/*

Strange

You have been given n non-negative integer values. Lets say the given values are a1, a2, a3, a4 ...

A given integer ai is called as strange integer, if the sum of its digits is greater than or equal to product of its digits.

You need to find the number of strange integers in the given input values.
Input Format:

First line denotes n, the number of inputs. The next n lines contains one integer in each line.
Output Format:

One integer denoting the result, as mentioned above.
Example:

Input:

5
10
20
30
40
50

Output:

5

Explanation:

For the given 5 integers, sum of the digits >= product of the digits.

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

let n = parseInt(readLine());
let strange_count = 0;
for (let i = 0; i < n; i++) {
    let input = parseInt(readLine());
    let sum = 0, product = 1;
    if (input == 0) { strange_count++ }
    while (input != 0) {
        let rem = input % 10;
        sum += rem;
        product *= rem;
        input = parseInt(input / 10);
    }
    if (sum >= product) { strange_count++ }
}
console.log(strange_count);