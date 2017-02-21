/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num <= 0) {
        return false
    }
    
    let bin = num.toString(2)
    
    if (bin.indexOf('1') !== bin.lastIndexOf('1')) {
        return false
    } else if (0 === (bin.length & 1)) {
        return false
    }
    
    return true
};
