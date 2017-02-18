/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    
    const n = x.toString()
    const len = Math.floor(n.length / 2)
    
    for (let i = 0; i < len; ++i) {
        if (n[i] !== n[n.length - i - 1]) {
            return false
        }
    }
    
    return true
};
