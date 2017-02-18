/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let last = nums.length - 1
    
    for (let i = nums.length - 1, temp; i >= 0; --i) {
        if (val === nums[i]) {
            temp = nums[i]
            nums[i] = nums[last]
            nums[last] = temp
            
            --last
        }
    }
    
    nums.splice(last+1)
    
    return nums.length
};
