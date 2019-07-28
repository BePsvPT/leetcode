/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let m = new Set(nums1), n = new Set(nums2), result = []
    
    n.forEach(val => {
        if (m.has(val)) {
            result.push(val)
        }
    })
    
    return result
};
