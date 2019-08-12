/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    if (!root) {
        return 0;
    }

    return rangeSumBST(root.left, L, R) + ((root.val >= L && root.val <= R) ? root.val : 0) + rangeSumBST(root.right, L, R);
};
