/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let i, nums = [], regex;

    for (i = 97; i <= 122; ++i) {
        nums.push(String.fromCharCode(i, i));
    }

    regex = new RegExp(nums.join('|'), 'g')

    while (regex.test(S)) {
        S = S.replace(regex, '');
    }

    return S;
};
