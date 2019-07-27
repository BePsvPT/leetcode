/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let odd = 1, even = 0, result = {};

    A.forEach((num) => {
        if (num & 1) {
            result[odd] = num;
            odd += 2;
        } else {
            result[even] = num;
            even += 2;
        }
    })

    return Object.values(result);
};
