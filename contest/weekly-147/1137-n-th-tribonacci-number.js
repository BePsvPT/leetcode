let set = {};

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    }

    if (set.hasOwnProperty(n)) {
        return set[n];
    }

    return set[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};
