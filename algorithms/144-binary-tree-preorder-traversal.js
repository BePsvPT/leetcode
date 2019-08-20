/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const stack = [], result = [];

    while (root) {
        result.push(root.val);

        if (root.right) {
            stack.push(root.right);
        }

        if (root.left) {
            stack.push(root.left);
        }

        if (stack.length) {
            root = stack.pop();
        } else {
            root = null;
        }
    }

    return result;
};
