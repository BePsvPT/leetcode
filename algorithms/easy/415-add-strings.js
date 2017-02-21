/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let result = '', carry = 0, temp
    
    if (num1.length > num2.length) {
        num2 = '0'.repeat(num1.length - num2.length) + num2
    } else {
        num1 = '0'.repeat(num2.length - num1.length) + num1
    }
    
    for (let i = num1.length - 1; i >= 0; --i) {
        temp = carry + parseInt(num1[i]) + parseInt(num2[i])
        
        carry = Math.floor(temp / 10)
        
        result = (temp % 10).toString() + result
    }
    
    if (1 === carry) {
        result = '1' + result
    }
    
    return result
};
