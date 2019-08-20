/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    const fraction = n < 0;
    const positive = ((n = Math.abs(n)) & 1) === 0;

    let result = 1;

    while (n-- && Number.isFinite(result)) {
        result *= x;

        if (x === 1 || x === -1) {
            break;
        }
    }

    if (positive) {
        result = Math.abs(result);
    } else if (x < 0 && result > 0) {
        result *= -1;
    }

    if (fraction) {
        result = 1 / result;
    }

    return result;
};
