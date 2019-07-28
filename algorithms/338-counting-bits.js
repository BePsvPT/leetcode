/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let i, hack, results = [0];

    for (i = 1; i <= num; ++i, ++hack) {
        if (i && !(i & (i - 1))) {
            hack = 0;
        }

        results.push(results[hack] + 1);
    }

    return results;
};
