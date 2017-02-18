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
        
        let temp = nums[unique]
        nums[unique] = nums[i]
        nums[i] = temp
    }
    
    nums.splice(unique)
    
    return unique
};
