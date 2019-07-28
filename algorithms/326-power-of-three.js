/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    //https://discuss.leetcode.com/topic/33536/a-summary-of-all-solutions-new-method-included-at-15-30pm-jan-8th
    if (n <= 0) {
        return false
    }
    
    return Number.isInteger(Math.log10(n) / Math.log10(3))
};
