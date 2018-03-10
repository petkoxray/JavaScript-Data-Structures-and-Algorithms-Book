function fibonacciRecursive(number) {
    if (number <= 1)
        return number;
    else
        return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

let result = fibonacciRecursive(12);

console.log(result);