/*
Complete the weightedUniformStrings function in the editor below.

weightedUniformStrings has the following parameter(s):
- string s: a string
- int queries[n]: an array of integers

Returns
- string[n]: an array of strings that answer the queries

Input Format

The first line contains a string
, the original string.
The second line contains an integer , the number of queries.
Each of the next lines contains an integer , the weight of a uniform subtring of that may or may not exist.

Sample Input 0

abccddde
6
1
3
12
5
9
10

Sample Output 0

Yes
Yes
Yes
Yes
No
No


*/

function weightedUniformStrings(s, queries) {
    let n = s.length;
    let weights = [];
    weights.push(s.charCodeAt(0) - 96);
    let sum = s.charCodeAt(0) - 96;
    for (let i = 1; i < n; i++) {
        let weight = s.charCodeAt(i) - 96;
        if (s[i] == s[i - 1]) {
            sum += weight;
            weights.push(sum);
        }
        else {
            weights.push(weight);
            sum = weight;
        }
    }
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        (weights.includes(queries[i])) ? result.push("Yes") : result.push("No"); 
    }
    console.log(weights)
    return result;
}

weightedUniformStrings("abbc", [])
