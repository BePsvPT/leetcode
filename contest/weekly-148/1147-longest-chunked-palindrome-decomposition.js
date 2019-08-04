/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
    let total = 0;
    let chunks = text.split('');
    let left = '', right = '';

    while (chunks.length) {
        left += chunks.shift();
        right = chunks.pop() + right;

        if (left === right) {
            total += 2;
            left = right = '';
        }
    }

    if (left !== '' || right !== '') {
        total += 1;
    }

    return total;
};
