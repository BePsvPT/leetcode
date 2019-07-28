/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    let sorted = Array.from(nums)
    let map = new Map()
    
    sorted.sort((a, b) => b - a)
    
    for (let i = 0; i < sorted.length; ++i) {
        map.set(sorted[i], i + 1);
    }
    
    for (let i = 0; i < nums.length; ++i) {
        let temp = map.get(nums[i])
        
        if (1 === temp) {
            nums[i] = 'Gold Medal'
        } else if (2 === temp) {
            nums[i] = 'Silver Medal'
        } else if (3 === temp) {
            nums[i] = 'Bronze Medal'
        } else {
            nums[i] = temp.toString()
        }
    }
    
    return nums
};
