let arr = [1,2,3,4,5,9, 2];

let container = {};
let slNo = 1;
for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (container.hasOwnProperty(curr)) {
        console.log( slNo - container[curr] + 1);
    }
    else {
        container[curr] = slNo;
        slNo++;
    }
}