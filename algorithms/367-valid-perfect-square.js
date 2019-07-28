/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 1, right = num
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let square = mid * mid
        
        if (num === square) {
            return true
        } else if (num > square) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    return false
};
