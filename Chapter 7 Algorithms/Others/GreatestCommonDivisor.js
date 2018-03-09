function greatestCommonDivisor(firstNum, secondNum) {
    let divisor = 2;
    let greatestDivisor = 1;

    if (firstNum < 2 || secondNum < 2)
        return greatestDivisor;

    while (firstNum >= divisor && secondNum >= divisor) {
        if (firstNum % divisor === 0 && secondNum % divisor === 0)
            greatestDivisor = divisor;

        divisor++;
    }

    return greatestDivisor;
}

console.log(greatestCommonDivisor(48, 32));