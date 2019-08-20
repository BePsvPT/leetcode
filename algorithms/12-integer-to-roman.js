/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const nums = num.toString(10).split('');
    let result = '';

    if (nums.length === 4) {
        result += 'M'.repeat(nums.shift());
    }

    if (nums.length === 3) {
        const hundred = parseInt(nums.shift(), 10);

        if (hundred >= 1 && hundred <= 3) {
            result += 'C'.repeat(hundred);
        } else if (hundred === 4) {
            result += 'CD';
        } else if (hundred >= 5 && hundred <= 8) {
            result += 'D' + 'C'.repeat(hundred - 5);
        } else if (hundred === 9) {
            result += 'CM'
        }
    }

    if (nums.length === 2) {
        const ten = parseInt(nums.shift(), 10);

        if (ten >= 1 && ten <= 3) {
            result += 'X'.repeat(ten);
        } else if (ten === 4) {
            result += 'XL';
        } else if (ten >= 5 && ten <= 8) {
            result += 'L' + 'X'.repeat(ten - 5);
        } else if (ten === 9) {
            result += 'XC'
        }
    }

    const n = parseInt(nums.shift(), 10);

    if (n >= 1 && n <= 3) {
        result += 'I'.repeat(n);
    } else if (n === 4) {
        result += 'IV';
    } else if (n >= 5 && n <= 8) {
        result += 'V' + 'I'.repeat(n - 5);
    } else if (n === 9) {
        result += 'IX'
    }

    return result;
};
