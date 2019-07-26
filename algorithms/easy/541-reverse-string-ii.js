/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let chunks = [];

    for (let i = 0; i < s.length; i += 2 * k) {
        chunks.push(s.substring(i, i + k).split('').reverse().join(''));
        chunks.push(s.substring(i + k, i + 2 * k));
    }

    return chunks.join('');
};
