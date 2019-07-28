/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // https://discuss.leetcode.com/topic/21498/accepted-c-o-1-time-o-1-space-1-line-solution-with-detail-explanations
    return 1 + (num - 1) % 9;
};
