/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    return nums.sort((a, b) => a - b).reduce((acc, val, idx) => {
        return acc + ((idx & 1) ? 0 : val);
    }, 0);
};
