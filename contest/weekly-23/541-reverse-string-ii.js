/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (0 === s.length) {
        return ''
    }
    
    let chunks = s.match(new RegExp('.{1,' + k + '}', 'g'))
    
    for (let i = 0; i < chunks.length; i += 2) {
        chunks[i] = chunks[i].split('').reverse().join('')
    }
    
    return chunks.join('')
};
