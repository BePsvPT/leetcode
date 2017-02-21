/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let hash = {}
    
    for (let i = 0; i < s.length; ++i) {
        if (! hash.hasOwnProperty(s[i])) {
            hash[s[i]] = 0
        }
        
        ++hash[s[i]]
    }
    
    for (let i = 0; i < t.length; ++i) {
        if (! hash.hasOwnProperty(t[i])) {
            return false
        }
        
        --hash[t[i]]
    }
    
    for (let i in hash) {
        if (0 !== hash[i]) {
            return false
        }
    }
    
    return true
};
