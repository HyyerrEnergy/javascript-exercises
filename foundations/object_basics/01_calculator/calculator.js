const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
};

const multiply = function(numbers) {
    let result = 1;

    for (const number of numbers) {
        result *= number;
    }

    return result;
};

const power = function(base, exponent) {
    return base ** exponent;
};

const factorial = function(number) {
    let result = 1;

    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    return result;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};