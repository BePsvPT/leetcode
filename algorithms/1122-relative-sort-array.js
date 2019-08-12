/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const counts = {};
    const result = [];

    let num;

    while ((num = arr1.pop()) !== undefined) {
        counts[num] = (counts[num] || 0) + 1;
    }

    arr2.forEach((n) => {
        while (counts[n] && counts[n]--) {
            result.push(n);
        }
    });

    Object.keys(counts).reduce((acc, n) => {
        if (counts[n] > 0) {
            acc.push(...Array(counts[n]).fill(parseInt(n, 10)));
        }
        
        return acc;
    }, result)

    return result;
};
