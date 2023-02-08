/*
Insert element into sorted list
Given a sorted list with an unsorted number in the rightmost cell, can you write some simple code to insert

into the array so that it remains sorted?

Since this is a learning exercise, it won't be the most efficient way of performing the insertion. It will instead demonstrate the brute-force method in detail.

Assume you are given the array
indexed . Store the value of . Now test lower index values successively from to until you reach a value that is lower than , at in this case. Each time your test fails, copy the value at the lower index to the current index and print your array. When the next lower indexed value is smaller than

, insert the stored value at the current index and print the entire array.

Example


Start at the rightmost index. Store the value of

. Compare this to each element to the left until a smaller value is reached. Here are the results as described:

1 2 4 5 5
1 2 4 4 5
1 2 3 4 5

Function Description

Complete the insertionSort1 function in the editor below.

insertionSort1 has the following parameter(s):

    n: an integer, the size of 

    arr: an array of integers to sort

Returns

    None: Print the interim and final arrays, each on a new line. No return value is expected.

Input Format

The first line contains the integer
, the size of the array .
The next line contains space-separated integers

.

Constraints


Output Format

Print the array as a row of space-separated integers each time there is a shift or insertion.

Sample Input

5
2 4 6 8 3

Sample Output

2 4 6 8 8 
2 4 6 6 8 
2 4 4 6 8 
2 3 4 6 8 

Explanation

is removed from the end of the array.
In the 1st line 8 > 3, so 8 is shifted one cell to the right.
In the 2nd line 6 > 3, so 6 is shifted one cell to the right.
In the 3rd line 4 > 3, so 4 is shifted one cell to the right.
In the 4th line 2 < 3, so 3 is placed at position 1. 
*/

function insertionSort1(n, arr) {
    // Write your code here
    let key = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] >= key) {
            arr[i + 1] = arr[i];
        }
        else {
            arr[i + 1] = key;
            i = -1;
        }
        if (i == 0 && key < arr[i]) {
            console.log(...arr)
            arr[0] = key;
        }
        console.log(...arr);
    }
}

insertionSort1(5, [2,4,5,7,1])