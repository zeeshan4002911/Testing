/*

Double - Agents

There is a cold war going between a lot of planets. Every planet has an agent, however many of them are double agents. A double agent is an agent who works for more than one planet. however, double agents usually change their names while working for 2 different planets(they can also work with same name if they want). Agents usually jumble the alphabets of their names in order to create a new name(such that it still contains the same number of alphabets as the original name did).

ex- an agent named abc can have following names by jumbling abc,acb,bac,cab,bca,cba.

No 2 agents can have same names that can be obtained by jumbling up either of the two's names.

Given a list of agents working for each of the 'N' planets, find out the agent working for most number of planets.
Input

First line contains 'N' representing the number of planets. the following line contains the names of agents of all the planets in form of a space separated list.
Output

Find out the maxmimum number of planets any single agent is working for and print it.
Example

Input1:

5

abc bac fed efd eee

Output1:

2

Explanation1:

both agents named abc and fed are working for a couple of nations.

Input2:

10

abcd db aert dcab bd erta bcda cbad trih rtih

Output2:

4

Explanation2:

agent named abcd is working for 4 planets with names (abcd, dcab, bcda, cdab)

agent named db is working for 2 planets with names (db, bd)

agent named aert is working for 2 planets with names(aert, erta)

agent named trih is working for 2 planets with names (trih,rtih)

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
let names = readLine().split(" ");
let name_count = {};

for (let i = 0; i < n; i++) {
    let agent = names[i].split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
    if (name_count.hasOwnProperty(agent)) {
        name_count[agent] = name_count[agent] + 1;
    } else {
        name_count[agent] = 1;
    }
}
let value = Object.values(name_count);
console.log(Math.max(...value));

// let n = parseInt(readLine());
// let names = readLine().split(" ");
// let map = new Map();

// for (let i = 0; i < n; i++) {
//     let agent = names[i].split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
//     if (!map.has(agent)) {
//         map.set(agent, 1);
//     } else {
//         map.set(agent, map.get(agent) + 1);
//     }    
// }
// let values = map.values();
// console.log(Math.max(...values));