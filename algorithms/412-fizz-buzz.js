/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = []
    
    for (let i = 1; i <= n; ++i) {
        let temp = ''
        
        if (0 === i % 3) {
            temp += 'Fizz'
        }
        
        if (0 === i % 5) {
            temp += 'Buzz'
        }
        
        if ('' === temp) {
            temp += i
        }
        
        result.push(temp)
    }
    
    return result
};
