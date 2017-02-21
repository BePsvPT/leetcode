/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let result = 0
    
    while (n) {
        result += n & 1
        
        n >>>= 1
    }
    
    return result
};
