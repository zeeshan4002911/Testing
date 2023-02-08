/*
Whenever George asks Lily to hang out, she's busy doing homework. George wants to help her finish it faster, 
but he's in over his head! Can you help George understand Lily's homework so she can hang out with him?

Consider an array of
distinct integers, . George can swap any two elements of the array any number of times. An array is beautiful if the sum of among

is minimal.

Given the array

, determine and return the minimum number of swaps that should be performed in order to make the array beautiful.

Example

One minimal array is

. To get there, George performed the following swaps:

    Swap      Result
          [7, 15, 12, 3]
    3 7   [3, 15, 12, 7]
    7 15  [3, 7, 12, 15]
   

It took

swaps to make the array beautiful. This is minimal among the choices of beautiful arrays possible.

Function Description

Complete the lilysHomework function in the editor below.

lilysHomework has the following parameter(s):

    int arr[n]: an integer array

Returns

    int: the minimum number of swaps required

Input Format

The first line contains a single integer,
, the number of elements in . The second line contains space-separated integers,

.

Constraints

Sample Input

STDIN       Function
-----       --------
4           arr[]size n = 4
2 5 3 1     arr = [2, 5, 3, 1]

Sample Output

2

Explanation

Define
to be the beautiful reordering of . The sum of the absolute values of differences between its adjacent elements is minimal 
among all permutations and only two swaps ( with and then with ) were performed.
*/

// Hashmap Solution with O(n) TC but O(n^2) SC
function lilysHomework(arr) {
    // Write your code here
    let arr2 = [...arr];
    let map_asc = new Map();
    for (let i = 0; i < arr.length; i++) {
        map_asc[arr[i]] = i;
    }
    let map_desc = new Map();
    for (let i = 0; i < arr.length; i++) {
        map_desc[arr[i]] = i;
    }
    let sorted_arr_asc = [...arr].sort((a, b) => a - b)
    let sorted_arr_desc = [...arr].sort((a, b) => b - a)
    let swap_asc = 0;
    let swap_desc = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != sorted_arr_asc[i]) {
            swap_asc++;
            let index = map_asc[sorted_arr_asc[i]]
            map_asc[sorted_arr_asc[i]] = map_asc[arr[i]];
            map_asc[arr[i]] = index;

            arr[index] = arr[i];
            arr[i] = sorted_arr_asc[i];
        }
    }
    sorted_arr_asc = null;
    map_asc = null;

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] != sorted_arr_desc[i]) {
            swap_desc++;
            let index = map_desc[sorted_arr_desc[i]]
            map_desc[sorted_arr_desc[i]] = map_desc[arr2[i]];
            map_desc[arr2[i]] = index;

            arr2[index] = arr2[i];
            arr2[i] = sorted_arr_desc[i];
        }
    }
    return Math.min(swap_asc, swap_desc);
}

// console.log(lilysHomework([3,4,2,5,1]))




// Selection Sort with O(n^2) TC and O(n) SC
function solution(arr) {
    let arr_copy = [...arr];
    let count1 = 0;
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) { min = j; }
        }
        if (arr[i] != arr[min]) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
            count1++;
        }
    }
    let count2 = 0;
    for (let i = 0; i < arr_copy.length; i++) {
        let max = i;
        for (let j = i + 1; j < arr_copy.length; j++) {
            if (arr_copy[j] > arr_copy[max]) { max = j; }
        }
        if (arr_copy[i] != arr_copy[max]) {
            let temp = arr_copy[i];
            arr_copy[i] = arr_copy[max];
            arr_copy[max] = temp;
            count2++;
        }
    }
    return Math.min(count1, count2);
}

console.log(solution([3,4,2,5,1]))
