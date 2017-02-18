/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let counter = 0, el
    
    for (let i = 0; i < nums.length; ++i) {
        if (0 === counter) {
            el = nums[i]
            counter = 1
        } else if (el === nums[i]) {
            ++counter
        } else {
            --counter
        }
    }
    
    return el
};
