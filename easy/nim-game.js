/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    // https://discuss.leetcode.com/topic/26999/theorem-all-4s-shall-be-false
    return 0 !== (n % 4)
};
