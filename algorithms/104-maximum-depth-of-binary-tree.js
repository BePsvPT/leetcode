/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, deep = 0) {
    if (null === root) {
        return deep
    }
    
    ++deep;
    
    let temp = deep
    
    if (null !== root.left) {
        temp = Math.max(temp, maxDepth(root.left, deep))
    }
    
    if (null !== root.right) {
        temp = Math.max(temp, maxDepth(root.right, deep))
    }
    
    return temp
};
