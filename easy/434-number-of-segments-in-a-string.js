/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.split(' ').reduce((acc, val) => {
        return acc + (val.length ? 1 : 0)
    }, 0)
};
