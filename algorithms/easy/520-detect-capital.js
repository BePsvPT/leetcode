/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return null !== word.match(/^([A-Z]+|[a-z]+|[A-Z][a-z]+)$/)
};
