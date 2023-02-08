let input = [1, 5, 7, 8, 9, 45, 23];
let result = [];
for (let i = 1; i <= 50; i++) {
    if (!input.includes(i)) result.push(i);
}
console.log(result);