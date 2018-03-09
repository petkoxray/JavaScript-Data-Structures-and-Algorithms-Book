function checkPrime(number) {
    if (number < 2)
        return false;

    for (let current = 2; current <= Math.sqrt(number); current++) {
        if (number % current === 0)
            return false;
    }

    return true;
}

console.log(checkPrime(5));
