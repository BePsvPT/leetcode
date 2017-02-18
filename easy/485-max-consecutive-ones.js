/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    return nums.join('').split('0').reduce((accumulator, val) => Math.max(val.length, accumulator), 0)
};
