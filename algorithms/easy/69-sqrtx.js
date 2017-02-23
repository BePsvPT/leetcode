/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x <= 0) {
        return 0
    }
    
    let left = 1, right = x, mid
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        let square = mid * mid
        
        if (x === square) {
            return mid
        } else if (x > square) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    if (mid * mid > x) {
        --mid
    }
    
    return mid
};
