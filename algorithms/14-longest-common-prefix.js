/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return '';
    }

    let m, n;
    let prefix = '';
    let length = Math.min(...strs.map(str => str.length));

    for (m = 0; m < length; ++m) {
        let char = strs[0][m];

        for (n = 1; n < strs.length; ++n) {
            if (strs[n][m] !== char) {
                return prefix;
            }
        }

        prefix += char;
    }

    return prefix;
};
