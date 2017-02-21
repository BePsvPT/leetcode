/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let strs = str.split(' ')
    
    if (pattern.length !== strs.length) {
        return false
    }
    
    let pat1 = '', pat2 = ''
    
    for (let i = 0, hash1 = {}, hash2 = {}, patPos = 0, strPos = 0; i < pattern.length; ++i) {
        if (! hash1.hasOwnProperty(pattern[i])) {
            hash1[pattern[i]] = patPos++
        }
        
        if (! hash2.hasOwnProperty(strs[i])) {
            hash2[strs[i]] = strPos++
        }
        
        pat1 += hash1[pattern[i]]
        pat2 += hash2[strs[i]]
    }
    
    return pat1 === pat2
};
