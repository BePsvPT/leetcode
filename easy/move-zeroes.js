/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastScan = -1
    
    let firstZero = () => {
        for (let i = lastScan + 1; i < nums.length; ++i) {
            if (0 === nums[i]) {
                lastScan = i
                
                return i
            }
        }
    }
    
    for (let i = 0, index = firstZero(); i < nums.length; ++i) {
        if (i > index && 0 !== nums[i]) {
            nums[index] = nums[i]
            nums[i] = 0
            
            index = firstZero()
        }
    }
};
