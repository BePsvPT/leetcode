/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = nums.length * (nums.length + 1) / 2
    
    return nums.reduce((a, b) => a - b, sum)
};
