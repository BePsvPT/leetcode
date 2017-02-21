/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [], map = {')': '(', ']': '[', '}': '{'}
    
    for (let i = 0; i < s.length; ++i) {
        switch (s[i]) {
            case '(': case '[': case '{':
                stack.push(s[i])
                break
                
            case ')': case ']': case '}':
                if (stack.pop() !== map[s[i]]) {
                    return false
                }
                break
        }
    }
    
    return 0 === stack.length
};
