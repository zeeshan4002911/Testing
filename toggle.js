/*

Toggle

You have been given a String S consisting of uppercase and lowercase English alphabets. You need to change the case of each alphabet in this String. That is, all the uppercase letters should be converted to lowercase and all the lowercase letters should be converted to uppercase. You need to then print the resultant String to output.
Input Format

The first and only line of input contains the String S
Output Format

Print the resultant String on a single line.
Constraints

    The length is string lies in [1,100].

Sample Input

abcdE

Sample Output

ABCDe


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

let input = readLine().split("");
let lower_case = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let result = "";
for (let i = 0; i < input.length; i++) {
    if (lower_case.indexOf(input[i]) != -1) {
        result += input[i].toUpperCase();
        continue;
    }
    result += input[i].toLowerCase();
}
console.log(result);