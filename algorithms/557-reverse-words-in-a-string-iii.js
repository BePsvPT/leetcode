/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map((w) => Array.from(w).reverse().join('')).join(' ');
};
