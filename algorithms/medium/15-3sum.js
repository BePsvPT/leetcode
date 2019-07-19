/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let m , n;
    let candidates = [];
    let map = new Map();

    nums = nums.sort((a, b) => a - b);

    nums.forEach((num, idx) => map.set(num, idx));

    for (m = 0; m < nums.length - 2; ++m) {
        for (n = 1 + m; n < nums.length - 1; ++n) {
            let target = 0 - nums[m] - nums[n];

            if (map.get(target) > n) {
                candidates.push([nums[m], nums[n], target]);
            }

            while (n < nums.length && nums[n] === nums[n + 1]) {
                ++n;
            }
        }

        while (m < nums.length - 2 && nums[m] === nums[m + 1]) {
            ++m;
        }
    }

    return candidates;
};
