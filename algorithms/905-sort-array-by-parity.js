/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let nums = [];

    A.forEach((num) => {
        if (num & 1) {
            nums.push(num);
        } else {
            nums.unshift(num);
        }
    });

    return nums;
};
