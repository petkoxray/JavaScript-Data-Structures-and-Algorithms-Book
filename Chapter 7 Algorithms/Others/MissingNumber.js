function missingNumber(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let n = arr.length + 1;
 
    let expectedSum = n * (n + 1) / 2;
    return expectedSum - sum;
}

let result = missingNumber([1, 3, 4, 5]);

console.log(result);