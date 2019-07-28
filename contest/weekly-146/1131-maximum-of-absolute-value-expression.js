/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    let i, j, sum, max = Number.MIN_SAFE_INTEGER;

    for (i = 0; i < arr1.length; ++i) {
        for (j = 0; j < arr1.length; ++j) {
            if (i === j) {
                continue;
            }

            sum = Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + Math.abs(i - j);

            if (sum > max) {
                max = sum;
            }
        }
    }

    return max;
};
