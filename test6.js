// Input-Shubham
// Output- A1B1H2M1S1U1

let input = "Shubham";
input = input.toUpperCase();
let input_arr = input.split("");
let count = {};

for (let i = 0; i < input_arr.length; i++) {
    if (count.hasOwnProperty(input_arr[i])) {
        count[input_arr[i]] = count[input_arr[i]] + 1;  
    } else {
        count[input_arr[i]] = 1;
    }
}
let result = "";
let key = Object.keys(count).sort();
for (let i in Object.keys(count)) {
    result += key[i] + count[key[i]];
}
console.log(result);