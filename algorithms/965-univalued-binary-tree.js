/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if (!root) {
        return true;
    } else if (root.left && root.val !== root.left.val) {
        return false;
    } else if (root.right && root.val !== root.right.val) {
        return false;
    }

    return isUnivalTree(root.left) && isUnivalTree(root.right);
};
