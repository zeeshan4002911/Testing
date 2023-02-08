let obj = {};
let arr = [1,2,3,4,2,3,5];

for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
        obj[arr[i]] = obj[arr[i]] + 1;
    }
    else {
        obj[arr[i]] = 1;
    }
}
let sum = 0;
for (let i of Object.keys(obj)) {
    if (obj[i] == 1) sum += parseInt(i);
}
console.log(sum)