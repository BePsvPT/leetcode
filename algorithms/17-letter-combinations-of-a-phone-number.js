/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) {
        return [];
    }

    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }

    const nums = digits.split('');

    let result = map[nums.shift()];

    nums.forEach((num) => {
        result = map[num]
            .map((c) => result.slice(0).map((v) => v + c))
            .reduce((acc, val) => acc.concat(val), []);
    });

    return result;
};
