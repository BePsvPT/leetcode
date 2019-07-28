/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let m , n;
    let candidates = [];
    let map = new Map();

    // 將測資由小排到大
    nums = nums.sort((a, b) => a - b);

    // 建立 val -> idx 之對照表
    nums.forEach((num, idx) => map.set(num, idx));

    // 第一個數從頭開始循環，直到 nums.length - 2 或已經是正數
    for (m = 0; m < nums.length - 2 && nums[m] <= 0; ++m) {
        // 第二個數從第一個數後開始循環，直到 nums.length - 1
        for (n = 1 + m; n < nums.length - 1; ++n) {
            let target = 0 - nums[m] - nums[n];

            // 當要找的目標小於 0 時，代表前兩數的和已是正數
            // 而由於第一個數必為非正數，因此代表第二個數已是正數
            // 此時已不會有三數和為零之可能
            if (target < 0) {
                break;
            }

            // 目標數的 index 須大於第二個數，此時方為目標值
            if (map.get(target) > n) {
                candidates.push([nums[m], nums[n], target]);
            }

            // 避免重複尋找相同組合
            while (n < nums.length && nums[n] === nums[n + 1]) {
                ++n;
            }
        }

        // 避免重複尋找相同組合
        while (m < nums.length - 2 && nums[m] === nums[m + 1]) {
            ++m;
        }
    }

    return candidates;
};
