/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let longest = []

const walk = root => {
    if (! root) {
        longest.push(0)
        
        return 0
    }
    
    let left = 0, right = 0
    
    if (root.left) {
        left = walk(root.left) + 1
    }
    
    if (root.right) {
        right = walk(root.right) + 1
    }
    
    longest.push(left + right)
    
    return left > right ? left : right
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    longest = []
    
    walk(root)
    
    return Math.max(...longest)
};
