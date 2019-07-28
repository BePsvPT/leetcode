/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
    let i, sums = [], products = [];

    while (arr.length >= 2) {
        products = [];

        for (i = 0; i < arr.length - 1; ++i) {
            products.push(arr[i] * arr[i + 1]);
        }

        let min = Math.min(...products);
        let idx = products.indexOf(min);

        arr.splice(idx, 2, Math.max(arr[idx], arr[idx + 1]));

        sums.push(min);
    }

    return sums.reduce((a, b) => a + b);
};
