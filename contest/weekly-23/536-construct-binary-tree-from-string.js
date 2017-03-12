/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function(s) {
    const split = (p) => {
        let leftIndex = s.indexOf('(')
        let rightIndex = s.length - 1
        
        if (-1 === leftIndex) {
            return [parseInt(p), null, null]
        }
        
        for (let i = leftIndex, count = 0; i < s.length; ++i) {
            if ('(' === s[i]) {
                ++count
            } else if (')' === s[i]) {
                if (0 === --count) {
                    rightIndex = i
                    
                    break
                }
            }
        }
        
        return [parseInt(s.substr(0, leftIndex)), s.slice(leftIndex + 1, rightIndex), s.slice(rightIndex + 2, -1)]
    }
    
    if (0 === s.length) {
        return null
    }
    
    let num, treeLeft, treeRight
    
    [num, treeLeft, treeRight] = split(s)
    
    let t = new TreeNode(num)
    
    if (null !== treeLeft) {
        t.left = str2tree(treeLeft)
    }
    
    if (null !== treeRight) {
        t.right = str2tree(treeRight)
    }
    
    return t
};
