/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
    let odd = 0, even = 0;

    for (let i = 0; i < nums.length; i += 2) {
        let min;

        if (i === 0) {
            min = nums[i] - nums[i+1];
        } else if (i === nums.length - 1) {
            min = nums[i] - nums[i-1];
        } else {
            min = Math.max(nums[i] - nums[i-1], nums[i] - nums[i+1]);
        }

        if (min >= 0) {
            even += Math.abs(min + 1);
        }
    }

    for (let i = 1; i < nums.length; i += 2) {
        let min;

        if (i === nums.length - 1) {
            min = nums[i] - nums[i-1];
        } else {
            min = Math.max(nums[i] - nums[i-1], nums[i] - nums[i+1]);
        }

        if (min >= 0) {
            odd += Math.abs(min + 1);
        }
    }

    return Math.min(even, odd);
};
