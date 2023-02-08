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

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insertLevelOrder(arr, i, n) {
        if (i >= n || arr[i] === null || arr[i] === NaN) {
            return null;
        }
        let tree = new Node(arr[i]);
        tree.left = this.insertLevelOrder(arr, 2 * i + 1, n);
        tree.right = this.insertLevelOrder(arr, 2 * i + 2, n);
        return tree;
    }
}


function getLeftView(root, map, index) {
    if (!root) {
        return;
    }
    if (map[index] === undefined) {
        map[index] = root.data;
    }
    getLeftView(root.left, map, index + 1);
    getLeftView(root.right, map, index + 1);
}


function leftView(root) {
    // write your code here
    let map = new Map();
    getLeftView(root, map, 0);
    let i = 0;
    let result = [];
    while (map[i] != undefined) {
        result.push(map[i]);
        i++;
    }
    console.log(...result);
}



function convertToNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "N" && arr[i] !== 'None') {
            arr[i] = parseInt(arr[i]);
        } else {
            arr[i] = null;
        }
    }
}

let N = parseInt(readLine());
let arr;
while (N--) {
    arr = (readLine().split(" "));
}
convertToNumber(arr);
let tree = new BinaryTree();
tree.root = tree.insertLevelOrder(arr, 0, arr.length);

leftView(tree.root);