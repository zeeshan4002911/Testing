function maximumSumSubarray(K, Arr, N) {
    //code here
    let max = 0;
    for (let i = 0; i < K; i++) {
        max += Arr[i];
    }
    let temp_sum = max;
    for (let i = K; i < N; i++) {
        temp_sum += Arr[i] - Arr[i - K];
        if (temp_sum > max) max = temp_sum
    }
    return max
}

console.log(maximumSumSubarray(2, [100, 200, 300, 400], 4 ))