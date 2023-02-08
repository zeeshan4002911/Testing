/*
Addition

Design a class Addition. This class should have three properties operandOne, operandTwo and result. There should be a method performSum() which will add the two operands and store it in the result and getSum() which will return the result. By default assume these two operands are integers.

Next, design three subclasses addFloat, addArray, addString which will inherit all the functionalities of the Addition class. All these subclasses should contain their own performSum() methods. This is also known as method overriding.

To add floats we simply add the two operands and return the final value. To add two arrays we add each element of the same index in both the arrays and return the final array. To add Strings we concatenate the two strings given and return the final string.
Input

You don't need to worry about input. Just complete the given class description.
Output

You don't need to output anything. It is already been done in driver code.
Example

Input1:

3

1 3 4 6 8 2

2 5 7 8 5 2

Output1:

3

8

11

14

13

4

Input2:

4

ABCDE

XYZFG

Output2:

ABCDEXYZFG
*/

let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
    idx++;
    return data[idx - 1];
}
// Do not edit above this line
// Code here

class Addition {
    constructor(operandOne, operandTwo) {
        this.operandOne = operandOne;
        this.operandTwo = operandTwo;
        this.result = 0;
    }
    performSum() {
        this.result = (this.operandOne + this.operandTwo);
    }
    getSum() {
        return this.result;
    }
}

class addFloat extends Addition {
    constructor(operandOne, operandTwo) {
        super(operandOne, operandTwo);
    }
    // Override the performSum() of parent Addition Class
    performSum() {
        this.result = (this.operandOne + this.operandTwo);
    }
}

class addArray extends Addition {
    constructor(operandOne, operandTwo) {
        super(operandOne, operandTwo);

    }
    // Override the performSum() of parent Addition Class
    performSum() {
        let result = [];
        for (let i = 0; i < this.operandOne.length; i++) {
            result.push(this.operandOne[i] + this.operandTwo[i])
        }
        this.result = result;
    }
}

class addString extends Addition {
    constructor(operandOne, operandTwo) {
        super(operandOne, operandTwo);
    }
    // Override the performSum() of parent Addition Class
    performSum() {
        this.result = (this.operandOne.concat(this.operandTwo));
    }
}

// Do not edit below this line
// Code here

let t = parseInt(readLine());

if (t === 1) {
    operandOne = parseInt(readLine());
    operandTwo = parseInt(readLine());
    const addint = new Addition(operandOne, operandTwo);
    addint.performSum();

    // Output The sum of Integers
    console.log(addint.getSum());
}
else if (t === 2) {
    operandOne = parseFloat(readLine());
    operandTwo = parseFloat(readLine());
    const addfloat = new addFloat(operandOne, operandTwo);
    addfloat.performSum();

    // Output The sum of Float fixed to 2 decimal places
    console.log(addfloat.getSum().toFixed(2));
}
else if (t === 3) {
    operandOne = readLine().split(" ");
    operandTwo = readLine().split(" ");
    let n = operandOne.length;
    for (let i = 0; i < n; i++) {
        operandOne[i] = parseInt(operandOne[i]);
        operandTwo[i] = parseInt(operandTwo[i]);
    }
    const addarray = new addArray(operandOne, operandTwo);
    addarray.performSum();

    // Output The sum of Arrays
    for (let i = 0; i < n; i++) {
        console.log(addarray.getSum()[i]);
    }
}
else {
    operandOne = readLine().trim();
    operandTwo = readLine().trim();

    const addstring = new addString(operandOne, operandTwo);
    addstring.performSum();

    // Output The sum of Strings
    console.log(addstring.getSum());
}