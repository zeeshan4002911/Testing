
class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
    getLeft() {
        return this.left;
    }
    getRight() {
        return this.right;
    }

    setLeft(value) {
        let node = new TreeNode(value);
        this.left = node;
        node.parent = this;
    }

    setRight(value) {
        let node = new TreeNode(value);
        this.right = node;
        node.parent = this;
    }

}

//      12
//   1      2
//     4  8   9
//   7  3

// null -> 0

// 12 -> 1

//    12     -> countNode(root.left) + countNode(root.right) + 1
//  1    3 
//2   3    7

let root = new TreeNode(12);
root.setLeft(1);
root.setRight(2);
let rootLeft = root.getLeft();
let rootRight = root.getRight();
rootLeft.setRight(4);
rootRight.setLeft(8);
rootRight.setRight(9);
let rootLeftRight = rootLeft.getRight();
rootLeftRight.setLeft(7);
rootLeftRight.setRight(3);

// PreOrder ( N, L, R)
let nodes = [];
function preOrder(root) {
    if (root == null) {
        return;
    } else {
        nodes.push(root.value);
        preOrder(root.left);
        preOrder(root.right);
    }
}
preOrder(root);
console.log('PreOrder ', nodes);

// InOrder ( L, N , R)
nodes = [];
function inOrder(root) {
    if (root == null) {
        return nodes;
    } else {
        inOrder(root.left);
        nodes.push(root.value);
        inOrder(root.right);
    }
}
inOrder(root);
console.log('InOrder ', nodes);

nodes = [];
// PostOrder ( L, R, N)
function postOrder(root) {
    if (root == null) {
        return nodes;
    } else {
        postOrder(root.left);
        postOrder(root.right);
        nodes.push(root.value);
    }
}
postOrder(root);
console.log('PostOrder ', nodes);

function height(root) {
    if (root == null) {
        return 0;
    } else if (root.left == null && root.right == null) {
        return 1;
    } else {
        const left_height = height(root.left);
        const right_height = height(root.right);
        if (left_height >= right_height) {
            return left_height + 1;
        } else {
            return right_height + 1;
        }
    }
}

console.log('height', height(root));

function countNodes(root) {
    if(root == null) {
        return 0;
    } else if(root.left == null && root.right == null) {
        return 1;
    } else {
        const countLeft = countNodes(root.left);
        const countRight = countNodes(root.right);
        return countLeft + countRight + 1;
    }
}
console.log('Total Nodes', countNodes(root));


/// 
/*

class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
    getLeft() {
        return this.left;
    }
    getRight() {
        return this.right;
    }

    setLeft(value) {
        let node = new TreeNode(value);
        this.left = node;
        node.parent = this;
    }

    setRight(value) {
        let node = new TreeNode(value);
        this.right = node;
        node.parent = this;
    }

}

//      12
//   6      20
//     8  14   29
//   7  9

let root = new TreeNode(12);
root.setLeft(6);
root.setRight(20);
let rootLeft = root.getLeft();
let rootRight = root.getRight();
rootLeft.setRight(8);
rootRight.setLeft(14);
rootRight.setRight(29);
let rootLeftRight = rootLeft.getRight();
rootLeftRight.setLeft(7);
rootLeftRight.setRight(9);

// T.C -> O(n) 
// S.C -> O(n) 

let nodes = [];
function inOrder(root) {
    if(root == null) {
        return nodes;
    }
    inOrder(root.left);
    nodes.push(root.value);
    inOrder(root.right);
}

// TC -> O(n)
function toCheckSortedArray(arr) {
    let n = arr.length;
    for(let i=0;i<n-1;i++) {
        if(arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}

inOrder(root);
console.log(nodes);
console.log(toCheckSortedArray(nodes));

// check BST (inorder + checkSorted ) -> O(n+n) = O(2n) = O(n) <- TC
// check BST (inorder + checkSorted ) -> O(n) <- SC


// TC -> O(n) -> n : no of nodes
// SC -> O(height of the tree)
// function isBST(root, min, max) {
//     if (root == null) { return true; }
//     if (root.value < min || root.val > max) { return false; }
//     return isBST(root.left, min, root.value - 1) && isBST(root.right, root.value + 1, max);
// }

// console.log(isBST(root, -Infinity, +Infinity));

*/
