
const fibonacci = function(number) {
    if (!Number.isInteger(number) || number <= 0) {
        return "OOPS";
    }

    if (number === 1 || number === 2) {
        return 1;
    }

    let previous = 1;
    let current = 1;

    for (let i = 3; i <= number; i++) {
        const next = previous + current;
        previous = current;
        current = next;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
