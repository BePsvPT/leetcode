/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let unique = new Set(nums)
    
    return Array.from(unique).length !== nums.length
};
