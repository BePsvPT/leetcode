/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (nums, target) => {
    let hash = {}, result = []
    
    nums.forEach((val, index) => {
        hash[val] = index
    })
    
    nums.forEach((val, index) => {
        let sub = target - val
        let temp = hash[sub] || -1
        
        if (-1 !== temp && index !== temp) {
            result = [index, temp]
        }
    })
    
    return result.sort()
};
