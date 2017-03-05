/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k < 0) {
        return 0
    }
    
    let index = 1, last = NaN, result = 0
    
    nums.sort((a, b) => a - b)
    
    for (let i = 0; i < nums.length - 1; ++i, ++index) {
        if (last === nums[i]) {
            continue
        }
        
        if (nums.includes(nums[i] + k, index)) {
            ++result
        }
        
        last = nums[i]
    }
    
    return result
};
