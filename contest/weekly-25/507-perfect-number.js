/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num <= 1) {
        return false
    }
    
    let factors = [1]
    
    const sqrt = Math.floor(Math.sqrt(num))
    
    for (let i = 2; i <= sqrt; ++i) {
        if (0 === (num % i)) {
            factors.push(i)
            factors.push(num / i)
        }
    }
    
    return 0 === factors.reduce((acc, val) => acc - val, num)
};
