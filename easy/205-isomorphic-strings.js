/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (new Set(s.split('')).size !== new Set(t.split('')).size) {
        return false
    }
    
    let hash = {}
    
    for (let i = 0; i < s.length; ++i) {
        if (! hash.hasOwnProperty(s[i])) {
            hash[s[i]] = t[i]
        }
        
        if (hash[s[i]] !== t[i]) {
            return false
        }
    }
    
    return true
};
