/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let nums = [], i;

    for (i = left; i <= right; ++i) {
        let digits = i.toString(10).split(''), c;

        if (digits.includes('0')) {
            continue;
        }

        for (c = 0; c < digits.length; ++c) {
            if ((i % digits[c]) !== 0) {
                break;
            }
        }

        if (c === digits.length) {
            nums.push(i);
        }
    }

    return nums;
};
