/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let ascii = 0
    
    for (let i = 0; i < s.length; ++i) {
        ascii ^= s.charCodeAt(i)
        ascii ^= t.charCodeAt(i)
    }
    
    ascii ^= t.charCodeAt(s.length)
    
    return String.fromCharCode(ascii)
};
