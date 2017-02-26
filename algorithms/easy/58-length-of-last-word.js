/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    
    let space = s.lastIndexOf(' ')
    
    return (-1 === space) ? s.length : (s.length - space - 1)
};
