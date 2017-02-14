/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let result = 0
    
    if (n < 0) {
        return false
    }
    
    while (n) {
        result += n & 1
        
        n >>= 1
    }
    
    return 1 === result
};
