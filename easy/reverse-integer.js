/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let negative = false, result
    
    if (0 >= x) {
        negative = true
        
        x = -x
    }
    
    result = parseInt(x.toString().split('').reverse().join(''))
    
    if (result > (2147483647 + negative)) {
        return 0
    }
    
    return result * (negative ? -1 : 1)
};
