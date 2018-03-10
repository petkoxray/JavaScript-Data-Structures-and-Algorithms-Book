function fibonacci(number) {
    let nums = [0, 1];
    if (number <= 2)
        return 1;

    for (let i = 2; i <= number; i++) {
        nums[i] = nums[i - 1] + nums[i - 2];
    }

    return nums[number];
}

console.log(fibonacci(12));