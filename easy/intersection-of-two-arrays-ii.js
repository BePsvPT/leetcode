/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let sortNumber = (a, b) => {
        return a - b;
    }
    
    let result = []
    
    nums1 = nums1.sort(sortNumber)
    nums2 = nums2.sort(sortNumber)
    
    for (let m = 0, n = 0; m < nums1.length && n < nums2.length;) {
        if (nums1[m] === nums2[n]) {
            result.push(nums1[m])
            
             ++m
             ++n
        } else if (nums1[m] > nums2[n]) {
            ++n
        } else {
            ++m
        }
    }
    
    return result
};
