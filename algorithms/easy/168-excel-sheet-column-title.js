/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let s = []
    
    while (n > 0) {
        let c = n % 26
        
        s.push(String.fromCharCode(64 + (c || 26)))
        
        n = Math.floor(n / 26)
        
        if (0 === c) {
            --n
        }
    }
    
    return s.reverse().join('')
};
