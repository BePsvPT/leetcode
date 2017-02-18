/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = -1, right = s.length
    
    s = s.split('')
    
    while (left < right) {
        while (left < right && ! 'aeiouAEIOU'.includes(s[++left]));
        while (left < right && ! 'aeiouAEIOU'.includes(s[--right]));
        
        if (left < right) {
            let temp = s[left]
            s[left] = s[right]
            s[right] = temp
        }
    }
    
    return s.join('')
};
