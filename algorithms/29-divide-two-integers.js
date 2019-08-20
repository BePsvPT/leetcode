/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const positive = (dividend >= 0 && divisor >= 0) || (dividend < 0 && divisor < 0);

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let skip = false, result = 0;

    if (dividend === 0) {
        return 0;
    } else if (divisor === 1) {
        skip = true;
        result = dividend;
    }

    if (!skip) {
        while (dividend > 0) {
            dividend -= divisor;
            ++result;
        }

        if (dividend < 0) {
            --result;
        }
    }

    if (!positive) {
        result *= -1;
    }

    if (result > 2147483647 || result < -2147483648) {
        return 2147483647;
    }

    return result;
};
