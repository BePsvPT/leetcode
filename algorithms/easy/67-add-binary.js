/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (b.length > a.length) {
        [a, b] = [b, a]
    }
    
    b = Array(a.length - b.length).fill(0).join('') + b
    
    let result = [], carry = 0
    
    for (let i = a.length - 1; i >= 0; --i) {
        let and = a[i] & b[i]
        let or = a[i] | b[i]
        
        if (and || ! or) {
            result.push(carry)
            
            carry = and ? 1 : 0
        } else {
            result.push(carry ? 0 : 1)
            
            carry = carry ? 1 : 0
        }
    }
    
    if (carry) {
        result.push(carry)
    }
    
    return result.reverse().join('')
};
