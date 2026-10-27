const sumAll = function(first, second) {
    if (
        !Number.isInteger(first) ||
        !Number.isInteger(second) ||
        first <= 0 ||
        second <= 0
    ) {
        return "ERROR";
    }

    const start = Math.min(first, second);
    const end = Math.max(first, second);

    let total = 0;

    for (let i = start; i <= end; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;