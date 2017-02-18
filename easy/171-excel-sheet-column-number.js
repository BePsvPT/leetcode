/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let result = 0
    
    for (let i = s.length - 1, square = 0; i >= 0; --i, ++square) {
        result += (s.charCodeAt(i) - 64) * Math.pow(26, square)
    }
    
    return result
};
