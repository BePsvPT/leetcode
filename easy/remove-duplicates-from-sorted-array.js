/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let unique = 0
    
    for (let i = 0; i < nums.length; ++i, ++unique) {
        while (i < nums.length && nums[i] === nums[i+1]) {
            ++i
        }
        
        nums[unique] = nums[i]
    }
    
    nums.splice(unique)
    
    return unique
};
