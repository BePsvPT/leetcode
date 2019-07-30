/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return null !== s.trim().match(/^(\+|-)?(\d+|\.\d+|\d+\.(\d+)?)(e(\+|-)?\d+)?$/g);
};
