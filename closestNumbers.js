/*
Sorting is useful as the first step in many different tasks. The most common task is to make finding things easier, but there are other uses as well. In this case, it will make it easier to determine which pair or pairs of elements have the smallest absolute difference between them.

Example
Sorted, . Several pairs have the minimum difference of : . Return the array

.

Note
As shown in the example, pairs may overlap.

Given a list of unsorted integers,

, find the pair of elements that have the smallest absolute difference between them. If there are multiple pairs, find them all.

Function Description

Complete the closestNumbers function in the editor below.

closestNumbers has the following parameter(s):

    int arr[n]: an array of integers

Returns
- int[]: an array of integers as described

Input Format

The first line contains a single integer
, the length of .
The second line contains space-separated integers,

.

Constraints

All are unique in

    .

Output Format

Sample Input 0

10
-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854 

Sample Output 0

-20 30

Explanation 0
(30) - (-20) = 50, which is the smallest difference.

Sample Input 1

12
-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854 -520 -470 

Sample Output 1

-520 -470 -20 30

Explanation 1
(-470) - (-520) = 30 - (-20) = 50, which is the smallest difference.

Sample Input 2

4
5 4 3 2

Sample Output 2

2 3 3 4 4 5

Explanation 2
Here, the minimum difference is 1. Valid pairs are (2, 3), (3, 4), and (4, 5). 
*/

function closestNumbers(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    if (arr.length == 1) { return arr; }
    let min_diff = arr[1] - arr[0];

    for (let i = 1; i < arr.length; i++) {
        let diff = Math.abs(arr[i] - arr[i - 1]);
        if (diff < min_diff) { min_diff = diff; };
    }

    let result = [];
    for (let i = 1; i < arr.length; i++) {
        let diff = Math.abs(arr[i] - arr[i - 1]);
        if (diff == min_diff) {
            result.push(arr[i - 1], arr[i]);
        }
    }
    return result;
}

closestNumbers([5, 2, 3, 4, 1])