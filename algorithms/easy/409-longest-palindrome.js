/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let hash = {}, hasOdd = false, length = 0
    
    for (let i = 0; i < s.length; ++i) {
        if (! hash.hasOwnProperty(s[i])) {
            hash[s[i]] = 0
        }
        
        ++hash[s[i]]
    }
    
    for (let i in hash) {
        if (hash[i] & 1) {
            length -= 1
            
            hasOdd = true
        }
        
        length += hash[i]
    }
    
    return length + hasOdd
};
