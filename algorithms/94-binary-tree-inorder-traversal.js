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
var inorderTraversal = function(root) {
    const stack = [], result = [];

    while (root) {
        if (root.left) {
            const pre = root
            root = root.left;
            pre.left = null;
            stack.push(pre);
        } else {
            result.push(root.val);

            if (root.right) {
                root = root.right;
            } else if (stack.length) {
                root = stack.pop();
            } else {
                root = null;
            }
        }
    }

    return result;
};
