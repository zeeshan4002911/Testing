function factorial_itr(n) {
    // Using iteration
    let factorial = n;
    if (n == 0) return 1;
    while (n--) {
        if (n == 1) break;
        factorial *= n;
    }
    return (factorial);
}
function factorial_rec(n) {
    // Using recursion
    if (n == 0 || n == 1) return 1;
    return n * factorial_rec(n - 1);
}

console.log(factorial_itr(0));
console.log(factorial_rec(0));